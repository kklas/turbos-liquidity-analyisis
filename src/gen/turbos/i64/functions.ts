import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface WrappingAddArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function wrappingAdd(txb: TransactionBlock, args: WrappingAddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::wrapping_add`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface WrappingSubArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function wrappingSub(txb: TransactionBlock, args: WrappingSubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::wrapping_sub`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export function zero(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i64::zero`, arguments: [] })
}

export function fromU64(txb: TransactionBlock, u64: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::from_u64`,
    arguments: [pure(txb, u64, `u64`)],
  })
}

export function from(txb: TransactionBlock, u64: bigint | TransactionArgument) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i64::from`, arguments: [pure(txb, u64, `u64`)] })
}

export function negFrom(txb: TransactionBlock, u64: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::neg_from`,
    arguments: [pure(txb, u64, `u64`)],
  })
}

export interface AddArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function add(txb: TransactionBlock, args: AddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::add`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface SubArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function sub(txb: TransactionBlock, args: SubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::sub`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface MulArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function mul(txb: TransactionBlock, args: MulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::mul`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface DivArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function div(txb: TransactionBlock, args: DivArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::div`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export function abs(txb: TransactionBlock, i64: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i64::abs`, arguments: [obj(txb, i64)] })
}

export function absU64(txb: TransactionBlock, i64: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i64::abs_u64`, arguments: [obj(txb, i64)] })
}

export interface ShlArgs {
  i64: ObjectArg
  u8: number | TransactionArgument
}

export function shl(txb: TransactionBlock, args: ShlArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::shl`,
    arguments: [obj(txb, args.i64), pure(txb, args.u8, `u8`)],
  })
}

export interface ShrArgs {
  i64: ObjectArg
  u8: number | TransactionArgument
}

export function shr(txb: TransactionBlock, args: ShrArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::shr`,
    arguments: [obj(txb, args.i64), pure(txb, args.u8, `u8`)],
  })
}

export interface ModArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function mod(txb: TransactionBlock, args: ModArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::mod`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export function asU64(txb: TransactionBlock, i64: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i64::as_u64`, arguments: [obj(txb, i64)] })
}

export function sign(txb: TransactionBlock, i64: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i64::sign`, arguments: [obj(txb, i64)] })
}

export function isNeg(txb: TransactionBlock, i64: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i64::is_neg`, arguments: [obj(txb, i64)] })
}

export interface CmpArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function cmp(txb: TransactionBlock, args: CmpArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::cmp`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface EqArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function eq(txb: TransactionBlock, args: EqArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::eq`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface GtArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function gt(txb: TransactionBlock, args: GtArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::gt`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface GteArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function gte(txb: TransactionBlock, args: GteArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::gte`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface LtArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function lt(txb: TransactionBlock, args: LtArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::lt`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface LteArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function lte(txb: TransactionBlock, args: LteArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::lte`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface OrArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function or(txb: TransactionBlock, args: OrArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::or`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export interface AndArgs {
  i641: ObjectArg
  i642: ObjectArg
}

export function and(txb: TransactionBlock, args: AndArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::and`,
    arguments: [obj(txb, args.i641), obj(txb, args.i642)],
  })
}

export function u64Neg(txb: TransactionBlock, u64: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i64::u64_neg`,
    arguments: [pure(txb, u64, `u64`)],
  })
}

export function u8Neg(txb: TransactionBlock, u8: number | TransactionArgument) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i64::u8_neg`, arguments: [pure(txb, u8, `u8`)] })
}
