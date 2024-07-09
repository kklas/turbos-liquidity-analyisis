import { PUBLISHED_AT } from '..'
import { pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface FullMulArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function fullMul(txb: TransactionBlock, args: FullMulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u64::full_mul`,
    arguments: [pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`)],
  })
}

export interface MulDivFloorArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
}

export function mulDivFloor(txb: TransactionBlock, args: MulDivFloorArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u64::mul_div_floor`,
    arguments: [
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
    ],
  })
}

export interface MulDivRoundArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
}

export function mulDivRound(txb: TransactionBlock, args: MulDivRoundArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u64::mul_div_round`,
    arguments: [
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
    ],
  })
}

export interface MulDivCeilArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
}

export function mulDivCeil(txb: TransactionBlock, args: MulDivCeilArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u64::mul_div_ceil`,
    arguments: [
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
    ],
  })
}

export interface MulShrArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u8: number | TransactionArgument
}

export function mulShr(txb: TransactionBlock, args: MulShrArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u64::mul_shr`,
    arguments: [pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`), pure(txb, args.u8, `u8`)],
  })
}

export interface MulShlArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u8: number | TransactionArgument
}

export function mulShl(txb: TransactionBlock, args: MulShlArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u64::mul_shl`,
    arguments: [pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`), pure(txb, args.u8, `u8`)],
  })
}
