import { PUBLISHED_AT } from '..'
import { pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface FullMulArgs {
  u321: number | TransactionArgument
  u322: number | TransactionArgument
}

export function fullMul(txb: TransactionBlock, args: FullMulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u32::full_mul`,
    arguments: [pure(txb, args.u321, `u32`), pure(txb, args.u322, `u32`)],
  })
}

export interface MulDivFloorArgs {
  u321: number | TransactionArgument
  u322: number | TransactionArgument
  u323: number | TransactionArgument
}

export function mulDivFloor(txb: TransactionBlock, args: MulDivFloorArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u32::mul_div_floor`,
    arguments: [
      pure(txb, args.u321, `u32`),
      pure(txb, args.u322, `u32`),
      pure(txb, args.u323, `u32`),
    ],
  })
}

export interface MulDivRoundArgs {
  u321: number | TransactionArgument
  u322: number | TransactionArgument
  u323: number | TransactionArgument
}

export function mulDivRound(txb: TransactionBlock, args: MulDivRoundArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u32::mul_div_round`,
    arguments: [
      pure(txb, args.u321, `u32`),
      pure(txb, args.u322, `u32`),
      pure(txb, args.u323, `u32`),
    ],
  })
}

export interface MulDivCeilArgs {
  u321: number | TransactionArgument
  u322: number | TransactionArgument
  u323: number | TransactionArgument
}

export function mulDivCeil(txb: TransactionBlock, args: MulDivCeilArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u32::mul_div_ceil`,
    arguments: [
      pure(txb, args.u321, `u32`),
      pure(txb, args.u322, `u32`),
      pure(txb, args.u323, `u32`),
    ],
  })
}

export interface MulShrArgs {
  u321: number | TransactionArgument
  u322: number | TransactionArgument
  u8: number | TransactionArgument
}

export function mulShr(txb: TransactionBlock, args: MulShrArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u32::mul_shr`,
    arguments: [pure(txb, args.u321, `u32`), pure(txb, args.u322, `u32`), pure(txb, args.u8, `u8`)],
  })
}

export interface MulShlArgs {
  u321: number | TransactionArgument
  u322: number | TransactionArgument
  u8: number | TransactionArgument
}

export function mulShl(txb: TransactionBlock, args: MulShlArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::full_math_u32::mul_shl`,
    arguments: [pure(txb, args.u321, `u32`), pure(txb, args.u322, `u32`), pure(txb, args.u8, `u8`)],
  })
}
