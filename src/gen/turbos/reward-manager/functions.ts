import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure, vector } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export function init(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::reward_manager::init`, arguments: [] })
}

export interface InitRewardArgs {
  rewardManagerAdminCap: ObjectArg
  pool: ObjectArg
  u64: bigint | TransactionArgument
  address: string | TransactionArgument
  versioned: ObjectArg
}

export function initReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: InitRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::reward_manager::init_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.rewardManagerAdminCap),
      obj(txb, args.pool),
      pure(txb, args.u64, `u64`),
      pure(txb, args.address, `address`),
      obj(txb, args.versioned),
    ],
  })
}

export interface UpdateRewardManagerArgs {
  rewardManagerAdminCap: ObjectArg
  pool: ObjectArg
  u64: bigint | TransactionArgument
  address: string | TransactionArgument
  versioned: ObjectArg
}

export function updateRewardManager(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: UpdateRewardManagerArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::reward_manager::update_reward_manager`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.rewardManagerAdminCap),
      obj(txb, args.pool),
      pure(txb, args.u64, `u64`),
      pure(txb, args.address, `address`),
      obj(txb, args.versioned),
    ],
  })
}

export interface UpdateRewardEmissionsArgs {
  pool: ObjectArg
  u64: bigint | TransactionArgument
  u128: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function updateRewardEmissions(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: UpdateRewardEmissionsArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::reward_manager::update_reward_emissions`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.u64, `u64`),
      pure(txb, args.u128, `u128`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface AddRewardArgs {
  pool: ObjectArg
  poolRewardVault: ObjectArg
  u641: bigint | TransactionArgument
  vecCoin: Array<ObjectArg> | TransactionArgument
  u642: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function addReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: AddRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::reward_manager::add_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.poolRewardVault),
      pure(txb, args.u641, `u64`),
      vector(txb, `0x2::coin::Coin<${typeArgs[3]}>`, args.vecCoin),
      pure(txb, args.u642, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface RemoveRewardArgs {
  pool: ObjectArg
  poolRewardVault: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function removeReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: RemoveRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::reward_manager::remove_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.poolRewardVault),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export function init_(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::reward_manager::init_`, arguments: [] })
}
