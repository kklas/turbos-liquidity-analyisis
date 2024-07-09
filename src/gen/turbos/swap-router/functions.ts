import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure, vector } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface SwapABArgs {
  pool: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u128: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapAB(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SwapABArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_a_b`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u128, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface SwapABWithReturn_Args {
  pool: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u128: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapABWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SwapABWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_a_b_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u128, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface SwapBAArgs {
  pool: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u128: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapBA(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SwapBAArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_b_a`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      vector(txb, `0x2::coin::Coin<${typeArgs[1]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u128, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface SwapBAWithReturn_Args {
  pool: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u128: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapBAWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SwapBAWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_b_a_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      vector(txb, `0x2::coin::Coin<${typeArgs[1]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u128, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface CheckAmountThresholdArgs {
  bool1: boolean | TransactionArgument
  bool2: boolean | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
}

export function checkAmountThreshold(txb: TransactionBlock, args: CheckAmountThresholdArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::check_amount_threshold`,
    arguments: [
      pure(txb, args.bool1, `bool`),
      pure(txb, args.bool2, `bool`),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
    ],
  })
}

export interface SwapABBCArgs {
  pool1: ObjectArg
  pool2: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapABBC(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapABBCArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_a_b_b_c`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface SwapABBCWithReturn_Args {
  pool1: ObjectArg
  pool2: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapABBCWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapABBCWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_a_b_b_c_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface SwapABCBArgs {
  pool1: ObjectArg
  pool2: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapABCB(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapABCBArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_a_b_c_b`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface SwapABCBWithReturn_Args {
  pool1: ObjectArg
  pool2: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapABCBWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapABCBWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_a_b_c_b_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface SwapBABCArgs {
  pool1: ObjectArg
  pool2: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapBABC(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapBABCArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_b_a_b_c`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface SwapBABCWithReturn_Args {
  pool1: ObjectArg
  pool2: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapBABCWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapBABCWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_b_a_b_c_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface SwapBACBArgs {
  pool1: ObjectArg
  pool2: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapBACB(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapBACBArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_b_a_c_b`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface SwapBACBWithReturn_Args {
  pool1: ObjectArg
  pool2: ObjectArg
  vecCoin: Array<ObjectArg> | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  bool: boolean | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function swapBACBWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapBACBWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::swap_router::swap_b_a_c_b_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.bool, `bool`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}
