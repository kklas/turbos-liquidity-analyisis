import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface WrappingAddArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function wrappingAdd(txb: TransactionBlock, args: WrappingAddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::wrapping_add`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface WrappingSubArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function wrappingSub(txb: TransactionBlock, args: WrappingSubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::wrapping_sub`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export function zero(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i32::zero`, arguments: [] })
}

export function from(txb: TransactionBlock, u32: number | TransactionArgument) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i32::from`, arguments: [pure(txb, u32, `u32`)] })
}

export function negFrom(txb: TransactionBlock, u32: number | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::neg_from`,
    arguments: [pure(txb, u32, `u32`)],
  })
}

export interface AddArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function add(txb: TransactionBlock, args: AddArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::add`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface SubArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function sub(txb: TransactionBlock, args: SubArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::sub`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface MulArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function mul(txb: TransactionBlock, args: MulArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::mul`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface DivArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function div(txb: TransactionBlock, args: DivArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::div`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export function abs(txb: TransactionBlock, i32: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i32::abs`, arguments: [obj(txb, i32)] })
}

export interface ShlArgs {
  i32: ObjectArg
  u8: number | TransactionArgument
}

export function shl(txb: TransactionBlock, args: ShlArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::shl`,
    arguments: [obj(txb, args.i32), pure(txb, args.u8, `u8`)],
  })
}

export interface ShrArgs {
  i32: ObjectArg
  u8: number | TransactionArgument
}

export function shr(txb: TransactionBlock, args: ShrArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::shr`,
    arguments: [obj(txb, args.i32), pure(txb, args.u8, `u8`)],
  })
}

export interface ModArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function mod(txb: TransactionBlock, args: ModArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::mod`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export function sign(txb: TransactionBlock, i32: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i32::sign`, arguments: [obj(txb, i32)] })
}

export function isNeg(txb: TransactionBlock, i32: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i32::is_neg`, arguments: [obj(txb, i32)] })
}

export interface CmpArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function cmp(txb: TransactionBlock, args: CmpArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::cmp`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface EqArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function eq(txb: TransactionBlock, args: EqArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::eq`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface GtArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function gt(txb: TransactionBlock, args: GtArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::gt`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface GteArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function gte(txb: TransactionBlock, args: GteArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::gte`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface LtArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function lt(txb: TransactionBlock, args: LtArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::lt`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface LteArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function lte(txb: TransactionBlock, args: LteArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::lte`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface OrArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function or(txb: TransactionBlock, args: OrArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::or`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface AndArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function and(txb: TransactionBlock, args: AndArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::and`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export function u8Neg(txb: TransactionBlock, u8: number | TransactionArgument) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i32::u8_neg`, arguments: [pure(txb, u8, `u8`)] })
}

export interface FromU32NegArgs {
  u32: number | TransactionArgument
  bool: boolean | TransactionArgument
}

export function fromU32Neg(txb: TransactionBlock, args: FromU32NegArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::from_u32_neg`,
    arguments: [pure(txb, args.u32, `u32`), pure(txb, args.bool, `bool`)],
  })
}

export function fromU32(txb: TransactionBlock, u32: number | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::from_u32`,
    arguments: [pure(txb, u32, `u32`)],
  })
}

export function absU32(txb: TransactionBlock, i32: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i32::abs_u32`, arguments: [obj(txb, i32)] })
}

export interface ModEuclideanArgs {
  i32: ObjectArg
  u32: number | TransactionArgument
}

export function modEuclidean(txb: TransactionBlock, args: ModEuclideanArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::mod_euclidean`,
    arguments: [obj(txb, args.i32), pure(txb, args.u32, `u32`)],
  })
}

export function asU32(txb: TransactionBlock, i32: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::i32::as_u32`, arguments: [obj(txb, i32)] })
}

export function u32Neg(txb: TransactionBlock, u32: number | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::i32::u32_neg`,
    arguments: [pure(txb, u32, `u32`)],
  })
}
