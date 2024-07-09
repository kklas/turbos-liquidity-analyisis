import { PUBLISHED_AT } from '..'
import { pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface DivModArgs {
  u2561: bigint | TransactionArgument
  u2562: bigint | TransactionArgument
}

export function divMod(txb: TransactionBlock, args: DivModArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u256::div_mod`,
    arguments: [pure(txb, args.u2561, `u256`), pure(txb, args.u2562, `u256`)],
  })
}

export function shlw(txb: TransactionBlock, u256: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u256::shlw`,
    arguments: [pure(txb, u256, `u256`)],
  })
}

export function shrw(txb: TransactionBlock, u256: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u256::shrw`,
    arguments: [pure(txb, u256, `u256`)],
  })
}

export function checkedShlw(txb: TransactionBlock, u256: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u256::checked_shlw`,
    arguments: [pure(txb, u256, `u256`)],
  })
}

export interface DivRoundArgs {
  u2561: bigint | TransactionArgument
  u2562: bigint | TransactionArgument
  bool: boolean | TransactionArgument
}

export function divRound(txb: TransactionBlock, args: DivRoundArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u256::div_round`,
    arguments: [
      pure(txb, args.u2561, `u256`),
      pure(txb, args.u2562, `u256`),
      pure(txb, args.bool, `bool`),
    ],
  })
}
