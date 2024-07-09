import { PUBLISHED_AT } from '..'
import { pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface WrappingAddArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
}

export function wrappingAdd(txb: TransactionBlock, args: WrappingAddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::wrapping_add`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`)],
  })
}

export interface OverflowingAddArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
}

export function overflowingAdd(txb: TransactionBlock, args: OverflowingAddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::overflowing_add`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`)],
  })
}

export interface WrappingSubArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
}

export function wrappingSub(txb: TransactionBlock, args: WrappingSubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::wrapping_sub`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`)],
  })
}

export interface OverflowingSubArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
}

export function overflowingSub(txb: TransactionBlock, args: OverflowingSubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::overflowing_sub`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`)],
  })
}

export interface WrappingMulArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
}

export function wrappingMul(txb: TransactionBlock, args: WrappingMulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::wrapping_mul`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`)],
  })
}

export interface OverflowingMulArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
}

export function overflowingMul(txb: TransactionBlock, args: OverflowingMulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::overflowing_mul`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`)],
  })
}

export interface FullMulArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
}

export function fullMul(txb: TransactionBlock, args: FullMulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::full_mul`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`)],
  })
}

export function hi(txb: TransactionBlock, u128: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::hi`,
    arguments: [pure(txb, u128, `u128`)],
  })
}

export function lo(txb: TransactionBlock, u128: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::lo`,
    arguments: [pure(txb, u128, `u128`)],
  })
}

export function hiU128(txb: TransactionBlock, u128: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::hi_u128`,
    arguments: [pure(txb, u128, `u128`)],
  })
}

export function loU128(txb: TransactionBlock, u128: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::lo_u128`,
    arguments: [pure(txb, u128, `u128`)],
  })
}

export interface FromLoHiArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function fromLoHi(txb: TransactionBlock, args: FromLoHiArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::from_lo_hi`,
    arguments: [pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`)],
  })
}

export interface CheckedDivRoundArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  bool: boolean | TransactionArgument
}

export function checkedDivRound(txb: TransactionBlock, args: CheckedDivRoundArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::checked_div_round`,
    arguments: [
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.bool, `bool`),
    ],
  })
}

export interface MaxArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
}

export function max(txb: TransactionBlock, args: MaxArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::max`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`)],
  })
}

export interface MinArgs {
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
}

export function min(txb: TransactionBlock, args: MinArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::min`,
    arguments: [pure(txb, args.u1281, `u128`), pure(txb, args.u1282, `u128`)],
  })
}

export function leadingZeros(txb: TransactionBlock, u128: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::leading_zeros`,
    arguments: [pure(txb, u128, `u128`)],
  })
}

export interface PowArgs {
  u128: bigint | TransactionArgument
  u8: number | TransactionArgument
}

export function pow(txb: TransactionBlock, args: PowArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u128::pow`,
    arguments: [pure(txb, args.u128, `u128`), pure(txb, args.u8, `u8`)],
  })
}
