import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface GetLiquidityForAmountsArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
  u1284: bigint | TransactionArgument
  u1285: bigint | TransactionArgument
}

export function getLiquidityForAmounts(txb: TransactionBlock, args: GetLiquidityForAmountsArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_liquidity::get_liquidity_for_amounts`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
      pure(txb, args.u1284, `u128`),
      pure(txb, args.u1285, `u128`),
    ],
  })
}

export interface GetLiquidityForAmountAArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
}

export function getLiquidityForAmountA(txb: TransactionBlock, args: GetLiquidityForAmountAArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_liquidity::get_liquidity_for_amount_a`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
    ],
  })
}

export interface GetLiquidityForAmountBArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
}

export function getLiquidityForAmountB(txb: TransactionBlock, args: GetLiquidityForAmountBArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_liquidity::get_liquidity_for_amount_b`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
    ],
  })
}

export interface AddDeltaArgs {
  u128: bigint | TransactionArgument
  i128: ObjectArg
}

export function addDelta(txb: TransactionBlock, args: AddDeltaArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_liquidity::add_delta`,
    arguments: [pure(txb, args.u128, `u128`), obj(txb, args.i128)],
  })
}

export interface GetAmountForLiquidityArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
  u1284: bigint | TransactionArgument
}

export function getAmountForLiquidity(txb: TransactionBlock, args: GetAmountForLiquidityArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_liquidity::get_amount_for_liquidity`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
      pure(txb, args.u1284, `u128`),
    ],
  })
}

export interface GetAmountAForLiquidityArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
}

export function getAmountAForLiquidity(txb: TransactionBlock, args: GetAmountAForLiquidityArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_liquidity::get_amount_a_for_liquidity`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
    ],
  })
}

export interface GetAmountBForLiquidityArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
}

export function getAmountBForLiquidity(txb: TransactionBlock, args: GetAmountBForLiquidityArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_liquidity::get_amount_b_for_liquidity`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
    ],
  })
}
