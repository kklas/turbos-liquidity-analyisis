import { PUBLISHED_AT } from '..'
import { pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface FullMulArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
}

export function fullMul(txb: TransactionBlock, args: FullMulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u128::full_mul`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`)],
  })
}

export interface MulDivFloorArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
}

export function mulDivFloor(txb: TransactionBlock, args: MulDivFloorArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u128::mul_div_floor`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
    ],
  })
}

export interface MulDivRoundArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
}

export function mulDivRound(txb: TransactionBlock, args: MulDivRoundArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u128::mul_div_round`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
    ],
  })
}

export interface MulDivCeilArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u1283: bigint | TransactionArgument
}

export function mulDivCeil(txb: TransactionBlock, args: MulDivCeilArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u128::mul_div_ceil`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u1283, `u128`),
    ],
  })
}

export interface MulShrArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u8: number | TransactionArgument
}

export function mulShr(txb: TransactionBlock, args: MulShrArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u128::mul_shr`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u8, `u8`),
    ],
  })
}

export interface MulShlArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  u8: number | TransactionArgument
}

export function mulShl(txb: TransactionBlock, args: MulShlArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u128::mul_shl`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.u8, `u8`),
    ],
  })
}
