import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface GetAmountADelta_Args {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
  bool: boolean | TransactionArgument
}

export function getAmountADelta_(txb: TransactionBlock, args: GetAmountADelta_Args) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_sqrt_price::get_amount_a_delta_`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
      pure(txb, args.bool, `bool`),
    ],
  })
}

export interface GetAmountBDelta_Args {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
  bool: boolean | TransactionArgument
}

export function getAmountBDelta_(txb: TransactionBlock, args: GetAmountBDelta_Args) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_sqrt_price::get_amount_b_delta_`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
      pure(txb, args.bool, `bool`),
    ],
  })
}

export interface GetAmountADeltaArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  i128: ObjectArg
}

export function getAmountADelta(txb: TransactionBlock, args: GetAmountADeltaArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_sqrt_price::get_amount_a_delta`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`), obj(txb, args.i128)],
  })
}

export interface GetAmountBDeltaArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  i128: ObjectArg
}

export function getAmountBDelta(txb: TransactionBlock, args: GetAmountBDeltaArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_sqrt_price::get_amount_b_delta`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`), obj(txb, args.i128)],
  })
}

export interface GetNextSqrtPriceArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
  bool1: boolean | TransactionArgument
  bool2: boolean | TransactionArgument
}

export function getNextSqrtPrice(txb: TransactionBlock, args: GetNextSqrtPriceArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_sqrt_price::get_next_sqrt_price`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
      pure(txb, args.bool1, `bool`),
      pure(txb, args.bool2, `bool`),
    ],
  })
}

export interface GetNextSqrtPriceFromAmountARoundingUpArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
  bool: boolean | TransactionArgument
}

export function getNextSqrtPriceFromAmountARoundingUp(
  txb: TransactionBlock,
  args: GetNextSqrtPriceFromAmountARoundingUpArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_sqrt_price::get_next_sqrt_price_from_amount_a_rounding_up`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
      pure(txb, args.bool, `bool`),
    ],
  })
}

export interface MulDivRoundFixedArgs {
  u2561: bigint | TransactionArgument
  u2562: bigint | TransactionArgument
  u2563: bigint | TransactionArgument
}

export function mulDivRoundFixed(txb: TransactionBlock, args: MulDivRoundFixedArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_sqrt_price::mul_div_round_fixed`,
    arguments: [
      pure(txb, args.u2561, `u256`),
      pure(txb, args.u2562, `u256`),
      pure(txb, args.u2563, `u256`),
    ],
  })
}

export interface GetNextSqrtPriceFromAmountBRoundingDownArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
  bool: boolean | TransactionArgument
}

export function getNextSqrtPriceFromAmountBRoundingDown(
  txb: TransactionBlock,
  args: GetNextSqrtPriceFromAmountBRoundingDownArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_sqrt_price::get_next_sqrt_price_from_amount_b_rounding_down`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
      pure(txb, args.bool, `bool`),
    ],
  })
}
