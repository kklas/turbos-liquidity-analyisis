import { PUBLISHED_AT } from '..'
import { pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export function mostSignificantBit(txb: TransactionBlock, u256: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_bit::most_significant_bit`,
    arguments: [pure(txb, u256, `u256`)],
  })
}

export function leastSignificantBit(txb: TransactionBlock, u256: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_bit::least_significant_bit`,
    arguments: [pure(txb, u256, `u256`)],
  })
}
