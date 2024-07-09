import { Decimal, Network, TurbosSdk } from 'turbos-clmm-sdk'
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client'
import { Field } from './gen/_dependencies/onchain/0x2/dynamic-field/structs'
import { Pool, Tick } from './gen/turbos/pool/structs'
import fs from 'fs'
import { I32 } from './gen/turbos/i32/structs'
import { fromB64 } from '@mysten/bcs'
import { phantom as p } from './gen/_framework/reified'

const sdk = new TurbosSdk(Network.mainnet)

const poolId = '0x2ce764106ace913ff43f3c1fd6a91454898a42710464cd60d220130eb78ca5ca'

const USDT = '0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN'
const USDC = '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN'
const FEE =
  '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee100bps::FEE100BPS'

const client = new SuiClient({
  url: getFullnodeUrl('mainnet'),
})

const Q64 = new Decimal(2).pow(64)

interface Amounts {
  amountX: Decimal
  amountY: Decimal
}

function decodeSignedInt(v: bigint | number, width: number): bigint {
  const value = BigInt(v)
  if (value & (1n << BigInt(width - 1))) {
    return value - (1n << BigInt(width))
  } else {
    return value
  }
}

async function fetchData() {
  const tickIds = fs
    .readFileSync('tick-ids.csv')
    .toString()
    .split('\n')
    .map(id => {
      return id.replaceAll('"', '')
    })
  const chunkedIds = []
  for (let i = 0; i < tickIds.length; i += 50) {
    chunkedIds.push(tickIds.slice(i, i + 50))
  }

  const ticks: Array<Field<I32, Tick>> = []
  for (const ids of chunkedIds) {
    const res = await client.multiGetObjects({
      ids: ids,
      options: {
        showBcs: true,
      },
    })
    for (const tick of res) {
      const field = Field.r(I32.r, Tick.r).fromBcs(fromB64(tick.data!.bcs!.bcsBytes))
      ticks.push(field)
    }
  }
  ticks.sort((a, b) => {
    const aVal = decodeSignedInt(a.name.bits, 32)
    const bVal = decodeSignedInt(b.name.bits, 32)
    return Number(aVal - bVal)
  })

  const pool = await Pool.r(p(USDT), p(USDC), p(FEE)).fetch(client, poolId)

  return { pool, ticks }
}

async function fetchAndSaveDataToDisk() {
  const { pool, ticks } = await fetchData()
  fs.writeFileSync('ticks.json', JSON.stringify(ticks.map(t => t.toJSON()), null, 2))
  fs.writeFileSync('pool.json', JSON.stringify(pool.toJSON(), null, 2))
}


async function loadDataFromDisk() {
  const pool = Pool.r(p(USDT), p(USDC), p(FEE)).fromJSON(
    JSON.parse(fs.readFileSync('pool.json').toString())
  )
  const ticks = []
  for (const tick of JSON.parse(fs.readFileSync('ticks.json').toString())) {
    const tickField = Field.r(I32.r, Tick.r).fromJSON(tick)
    ticks.push(tickField)
  }

  return { pool, ticks }
}

function calcAmounts(sqrtPa: Decimal, sqrtPb: Decimal, sqrtP: Decimal, l: Decimal) {
  if (sqrtP.lessThanOrEqualTo(sqrtPa)) {
    return {
      amountX: l.mul(sqrtPb.sub(sqrtPa)).div(sqrtPb.mul(sqrtPa)),
      amountY: 0
    }
  }
  if (sqrtP.greaterThanOrEqualTo(sqrtPb)) {
    return {
      amountX: 0,
      amountY: l.mul(sqrtPb.sub(sqrtPa))
    }
  }
  return {
      amountX: l.mul(sqrtPb.sub(sqrtP)).div(sqrtP.mul(sqrtPb)),
      amountY: l.mul(sqrtP.sub(sqrtPa))
  }
}

function tickIdxToSqrtPrice(idx: number) {
  const sqrtPriceX64 =  sdk.math.tickIndexToSqrtPriceX64(Number(idx))
  return new Decimal(sqrtPriceX64.toString()).div(Q64)
}

function tickFieldToSqrtPrice(tick: Field<I32, Tick>) {
  const idx = decodeSignedInt(tick.name.bits, 32)
  return tickIdxToSqrtPrice(Number(idx))
}

async function main() {
  await fetchAndSaveDataToDisk()
  const { pool, ticks } = await loadDataFromDisk()

  const sqrtP = new Decimal(pool.sqrtPrice.toString()).div(Q64)

  let currentL = new Decimal(0)
  const n = ticks.length;
  let amounts = []
  for (let i = 0; i < n - 1; i++) {
    const tickA = ticks[i]
    const tickB = ticks[i + 1]

    const sqrtPa = tickFieldToSqrtPrice(tickA)
    const sqrtPb = tickFieldToSqrtPrice(tickB)

    const lNet = decodeSignedInt(tickA.value.liquidityNet.bits, 128)
    currentL = currentL.add(new Decimal(lNet.toString()))

    amounts.push(calcAmounts(sqrtPa, sqrtPb, sqrtP, currentL))
  }

  const exp = amounts.reduce<Amounts>((prev, cur) => {
    return {
      amountX: prev.amountX.add(cur.amountX),
      amountY: prev.amountY.add(cur.amountY)
    }
  }, { amountX: new Decimal(0), amountY: new Decimal(0) })
  exp.amountX = exp.amountX.div(1e6)
  exp.amountY = exp.amountY.div(1e6)
  console.log('expected', JSON.stringify(exp, undefined, 2))

  const have = {
    amountX: new Decimal(pool.coinA.value.toString()).div(1e6),
    amountY: new Decimal(pool.coinB.value.toString()).div(1e6)
  }
  console.log('have', JSON.stringify(have, undefined, 2))

  const p = sqrtP.pow(2)
  const expY = exp.amountY.add(exp.amountX.mul(p))
  const haveY = have.amountY.add(exp.amountX.mul(p))

  console.log('USDC value', JSON.stringify({
    exp: expY.toString(),
    have: haveY.toString()
  }, undefined, 2))

  console.log('diff', haveY.sub(expY).toString(), 'USDC')
}

main().catch(console.error)