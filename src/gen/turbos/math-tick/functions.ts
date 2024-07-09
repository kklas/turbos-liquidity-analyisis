import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export function getMinTick(txb: TransactionBlock, u32: number | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_tick::get_min_tick`,
    arguments: [pure(txb, u32, `u32`)],
  })
}

export function getMaxTick(txb: TransactionBlock, u32: number | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_tick::get_max_tick`,
    arguments: [pure(txb, u32, `u32`)],
  })
}

export function maxLiquidityPerTick(txb: TransactionBlock, u32: number | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_tick::max_liquidity_per_tick`,
    arguments: [pure(txb, u32, `u32`)],
  })
}

export function tickIndexFromSqrtPrice(txb: TransactionBlock, u128: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_tick::tick_index_from_sqrt_price`,
    arguments: [pure(txb, u128, `u128`)],
  })
}

export function sqrtPriceFromTickIndex(txb: TransactionBlock, i32: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_tick::sqrt_price_from_tick_index`,
    arguments: [obj(txb, i32)],
  })
}

export function getSqrtPricePositiveTick(txb: TransactionBlock, i32: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_tick::get_sqrt_price_positive_tick`,
    arguments: [obj(txb, i32)],
  })
}

export function getSqrtPriceNegativeTick(txb: TransactionBlock, i32: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_tick::get_sqrt_price_negative_tick`,
    arguments: [obj(txb, i32)],
  })
}
