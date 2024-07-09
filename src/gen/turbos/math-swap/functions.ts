import { PUBLISHED_AT } from '..'
import { pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface ComputeSwapArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
  u1284: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  u32: number | TransactionArgument
}

export function computeSwap(txb: TransactionBlock, args: ComputeSwapArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_swap::compute_swap`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
      pure(txb, args.u1284, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.u32, `u32`),
    ],
  })
}

export interface GetAmountFixedDeltaArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
  bool1: boolean | TransactionArgument
  bool2: boolean | TransactionArgument
}

export function getAmountFixedDelta(txb: TransactionBlock, args: GetAmountFixedDeltaArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_swap::get_amount_fixed_delta`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
      pure(txb, args.bool1, `bool`),
      pure(txb, args.bool2, `bool`),
    ],
  })
}

export interface GetAmountUnfixedDeltaArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
  bool1: boolean | TransactionArgument
  bool2: boolean | TransactionArgument
}

export function getAmountUnfixedDelta(txb: TransactionBlock, args: GetAmountUnfixedDeltaArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_swap::get_amount_unfixed_delta`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
      pure(txb, args.bool1, `bool`),
      pure(txb, args.bool2, `bool`),
    ],
  })
}
