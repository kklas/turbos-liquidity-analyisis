import { PUBLISHED_AT } from '..'
import { pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface WrappingAddArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function wrappingAdd(txb: TransactionBlock, args: WrappingAddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u64::wrapping_add`,
    arguments: [pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`)],
  })
}

export interface OverflowingAddArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function overflowingAdd(txb: TransactionBlock, args: OverflowingAddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u64::overflowing_add`,
    arguments: [pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`)],
  })
}

export interface WrappingSubArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function wrappingSub(txb: TransactionBlock, args: WrappingSubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u64::wrapping_sub`,
    arguments: [pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`)],
  })
}

export interface OverflowingSubArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function overflowingSub(txb: TransactionBlock, args: OverflowingSubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u64::overflowing_sub`,
    arguments: [pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`)],
  })
}

export interface WrappingMulArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function wrappingMul(txb: TransactionBlock, args: WrappingMulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u64::wrapping_mul`,
    arguments: [pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`)],
  })
}

export interface OverflowingMulArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function overflowingMul(txb: TransactionBlock, args: OverflowingMulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u64::overflowing_mul`,
    arguments: [pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`)],
  })
}

export interface CarryAddArgs {
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
}

export function carryAdd(txb: TransactionBlock, args: CarryAddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::math_u64::carry_add`,
    arguments: [
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
    ],
  })
}
