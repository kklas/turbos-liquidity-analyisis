import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface ComputeSwapResultArgs {
  pool: ObjectArg
  bool1: boolean | TransactionArgument
  u1281: bigint | TransactionArgument
  bool2: boolean | TransactionArgument
  u1282: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function computeSwapResult(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ComputeSwapResultArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_fetcher::compute_swap_result`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.bool1, `bool`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.bool2, `bool`),
      pure(txb, args.u1282, `u128`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}
