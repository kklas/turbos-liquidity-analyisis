import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface WrappingAddArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function wrappingAdd(txb: TransactionBlock, args: WrappingAddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::wrapping_add`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface OverflowingAddArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function overflowingAdd(txb: TransactionBlock, args: OverflowingAddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::overflowing_add`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface WrappingSubArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function wrappingSub(txb: TransactionBlock, args: WrappingSubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::wrapping_sub`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface OverflowingSubArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function overflowingSub(txb: TransactionBlock, args: OverflowingSubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::overflowing_sub`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export function zero(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i128::zero`, arguments: [] })
}

export function from(txb: TransactionBlock, u128: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::from`,
    arguments: [pure(txb, u128, `u128`)],
  })
}

export function negFrom(txb: TransactionBlock, u128: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::neg_from`,
    arguments: [pure(txb, u128, `u128`)],
  })
}

export interface AddArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function add(txb: TransactionBlock, args: AddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::add`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface SubArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function sub(txb: TransactionBlock, args: SubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::sub`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface MulArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function mul(txb: TransactionBlock, args: MulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::mul`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface DivArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function div(txb: TransactionBlock, args: DivArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::div`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export function abs(txb: TransactionBlock, i128: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i128::abs`, arguments: [obj(txb, i128)] })
}

export interface ShlArgs {
  i128: ObjectArg
  u8: number | TransactionArgument
}

export function shl(txb: TransactionBlock, args: ShlArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::shl`,
    arguments: [obj(txb, args.i128), pure(txb, args.u8, `u8`)],
  })
}

export interface ShrArgs {
  i128: ObjectArg
  u8: number | TransactionArgument
}

export function shr(txb: TransactionBlock, args: ShrArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::shr`,
    arguments: [obj(txb, args.i128), pure(txb, args.u8, `u8`)],
  })
}

export function sign(txb: TransactionBlock, i128: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i128::sign`, arguments: [obj(txb, i128)] })
}

export function isNeg(txb: TransactionBlock, i128: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i128::is_neg`, arguments: [obj(txb, i128)] })
}

export interface CmpArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function cmp(txb: TransactionBlock, args: CmpArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::cmp`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface EqArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function eq(txb: TransactionBlock, args: EqArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::eq`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface GtArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function gt(txb: TransactionBlock, args: GtArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::gt`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface GteArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function gte(txb: TransactionBlock, args: GteArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::gte`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface LtArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function lt(txb: TransactionBlock, args: LtArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::lt`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface LteArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function lte(txb: TransactionBlock, args: LteArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::lte`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface OrArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function or(txb: TransactionBlock, args: OrArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::or`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export interface AndArgs {
  i1281: ObjectArg
  i1282: ObjectArg
}

export function and(txb: TransactionBlock, args: AndArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::and`,
    arguments: [obj(txb, args.i1281), obj(txb, args.i1282)],
  })
}

export function u8Neg(txb: TransactionBlock, u8: number | TransactionArgument) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i128::u8_neg`, arguments: [pure(txb, u8, `u8`)] })
}

export function neg(txb: TransactionBlock, i128: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i128::neg`, arguments: [obj(txb, i128)] })
}

export function absU128(txb: TransactionBlock, i128: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i128::abs_u128`, arguments: [obj(txb, i128)] })
}

export function asU128(txb: TransactionBlock, i128: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i128::as_u128`, arguments: [obj(txb, i128)] })
}

export function asI64(txb: TransactionBlock, i128: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i128::as_i64`, arguments: [obj(txb, i128)] })
}

export function asI32(txb: TransactionBlock, i128: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i128::as_i32`, arguments: [obj(txb, i128)] })
}

export function u128Neg(txb: TransactionBlock, u128: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i128::u128_neg`,
    arguments: [pure(txb, u128, `u128`)],
  })
}
