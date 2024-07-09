import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure, vector } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export function init(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::pool_factory::init`, arguments: [] })
}

export interface UpgradeArgs {
  poolFactoryAdminCap: ObjectArg
  versioned: ObjectArg
}

export function upgrade(txb: TransactionBlock, args: UpgradeArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::upgrade`,
    arguments: [obj(txb, args.poolFactoryAdminCap), obj(txb, args.versioned)],
  })
}

export interface DeployPoolArgs {
  poolConfig: ObjectArg
  fee: ObjectArg
  u128: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function deployPool(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: DeployPoolArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::deploy_pool`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.poolConfig),
      obj(txb, args.fee),
      pure(txb, args.u128, `u128`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface TogglePoolStatusArgs {
  poolFactoryAdminCap: ObjectArg
  pool: ObjectArg
  versioned: ObjectArg
}

export function togglePoolStatus(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: TogglePoolStatusArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::toggle_pool_status`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.poolFactoryAdminCap), obj(txb, args.pool), obj(txb, args.versioned)],
  })
}

export interface CollectProtocolFeeArgs {
  poolFactoryAdminCap: ObjectArg
  pool: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
  versioned: ObjectArg
}

export function collectProtocolFee(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CollectProtocolFeeArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::collect_protocol_fee`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.pool),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
      obj(txb, args.versioned),
    ],
  })
}

export interface CollectProtocolFeeWithReturn_Args {
  poolFactoryAdminCap: ObjectArg
  pool: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
  versioned: ObjectArg
}

export function collectProtocolFeeWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CollectProtocolFeeWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::collect_protocol_fee_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.pool),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
      obj(txb, args.versioned),
    ],
  })
}

export interface UpdatePoolFeeProtocolArgs {
  poolFactoryAdminCap: ObjectArg
  pool: ObjectArg
  u32: number | TransactionArgument
  versioned: ObjectArg
}

export function updatePoolFeeProtocol(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: UpdatePoolFeeProtocolArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::update_pool_fee_protocol`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.pool),
      pure(txb, args.u32, `u32`),
      obj(txb, args.versioned),
    ],
  })
}

export interface MigratePositionArgs {
  poolFactoryAdminCap: ObjectArg
  pool: ObjectArg
  positions: ObjectArg
  vecAddress: Array<string | TransactionArgument> | TransactionArgument
  address: string | TransactionArgument
  versioned: ObjectArg
}

export function migratePosition(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: MigratePositionArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::migrate_position`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.pool),
      obj(txb, args.positions),
      pure(txb, args.vecAddress, `vector<address>`),
      pure(txb, args.address, `address`),
      obj(txb, args.versioned),
    ],
  })
}

export interface ModifyTickRewardArgs {
  poolFactoryAdminCap: ObjectArg
  pool: ObjectArg
  u32: number | TransactionArgument
  bool: boolean | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function modifyTickReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ModifyTickRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::modify_tick_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.pool),
      pure(txb, args.u32, `u32`),
      pure(txb, args.bool, `bool`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface ModifyTickArgs {
  poolFactoryAdminCap: ObjectArg
  pool: ObjectArg
  u32: number | TransactionArgument
  bool: boolean | TransactionArgument
  versioned: ObjectArg
}

export function modifyTick(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ModifyTickArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::modify_tick`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.pool),
      pure(txb, args.u32, `u32`),
      pure(txb, args.bool, `bool`),
      obj(txb, args.versioned),
    ],
  })
}

export function init_(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::pool_factory::init_`, arguments: [] })
}

export interface UpdateNftNameArgs {
  poolFactoryAdminCap: ObjectArg
  positions: ObjectArg
  string: string | TransactionArgument
  versioned: ObjectArg
}

export function updateNftName(txb: TransactionBlock, args: UpdateNftNameArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::update_nft_name`,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.positions),
      pure(txb, args.string, `0x1::string::String`),
      obj(txb, args.versioned),
    ],
  })
}

export interface UpdateNftDescriptionArgs {
  poolFactoryAdminCap: ObjectArg
  positions: ObjectArg
  string: string | TransactionArgument
  versioned: ObjectArg
}

export function updateNftDescription(txb: TransactionBlock, args: UpdateNftDescriptionArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::update_nft_description`,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.positions),
      pure(txb, args.string, `0x1::string::String`),
      obj(txb, args.versioned),
    ],
  })
}

export interface UpdateNftImgUrlArgs {
  poolFactoryAdminCap: ObjectArg
  positions: ObjectArg
  string: string | TransactionArgument
  versioned: ObjectArg
}

export function updateNftImgUrl(txb: TransactionBlock, args: UpdateNftImgUrlArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::update_nft_img_url`,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.positions),
      pure(txb, args.string, `0x1::string::String`),
      obj(txb, args.versioned),
    ],
  })
}

export interface DeployPoolAndMintArgs {
  poolConfig: ObjectArg
  fee: ObjectArg
  u128: bigint | TransactionArgument
  positions: ObjectArg
  vecCoin1: Array<ObjectArg> | TransactionArgument
  vecCoin2: Array<ObjectArg> | TransactionArgument
  u321: number | TransactionArgument
  bool1: boolean | TransactionArgument
  u322: number | TransactionArgument
  bool2: boolean | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
  u644: bigint | TransactionArgument
  address: string | TransactionArgument
  u645: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function deployPoolAndMint(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: DeployPoolAndMintArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::deploy_pool_and_mint`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.poolConfig),
      obj(txb, args.fee),
      pure(txb, args.u128, `u128`),
      obj(txb, args.positions),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin1),
      vector(txb, `0x2::coin::Coin<${typeArgs[1]}>`, args.vecCoin2),
      pure(txb, args.u321, `u32`),
      pure(txb, args.bool1, `bool`),
      pure(txb, args.u322, `u32`),
      pure(txb, args.bool2, `bool`),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
      pure(txb, args.u644, `u64`),
      pure(txb, args.address, `address`),
      pure(txb, args.u645, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface PoolKeyArgs {
  typeName1: ObjectArg
  typeName2: ObjectArg
  typeName3: ObjectArg
}

export function poolKey(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: PoolKeyArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::pool_key`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.typeName1), obj(txb, args.typeName2), obj(txb, args.typeName3)],
  })
}

export interface CompareTypesArgs {
  vecU81: Array<number | TransactionArgument> | TransactionArgument
  vecU82: Array<number | TransactionArgument> | TransactionArgument
}

export function compareTypes(txb: TransactionBlock, args: CompareTypesArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::compare_types`,
    arguments: [pure(txb, args.vecU81, `vector<u8>`), pure(txb, args.vecU82, `vector<u8>`)],
  })
}

export interface SetFeeTierArgs {
  poolFactoryAdminCap: ObjectArg
  poolConfig: ObjectArg
  fee: ObjectArg
  versioned: ObjectArg
}

export function setFeeTier(txb: TransactionBlock, typeArg: string, args: SetFeeTierArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::set_fee_tier`,
    typeArguments: [typeArg],
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.poolConfig),
      obj(txb, args.fee),
      obj(txb, args.versioned),
    ],
  })
}

export interface SetFeeProtocolArgs {
  poolFactoryAdminCap: ObjectArg
  poolConfig: ObjectArg
  u32: number | TransactionArgument
  versioned: ObjectArg
}

export function setFeeProtocol(txb: TransactionBlock, args: SetFeeProtocolArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::set_fee_protocol`,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.poolConfig),
      pure(txb, args.u32, `u32`),
      obj(txb, args.versioned),
    ],
  })
}

export interface ModifyRewardArgs {
  poolFactoryAdminCap: ObjectArg
  pool: ObjectArg
  positions: ObjectArg
  u321: number | TransactionArgument
  bool1: boolean | TransactionArgument
  u322: number | TransactionArgument
  bool2: boolean | TransactionArgument
  vecAddress1: Array<string | TransactionArgument> | TransactionArgument
  vecAddress2: Array<string | TransactionArgument> | TransactionArgument
  versioned: ObjectArg
}

export function modifyReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ModifyRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::modify_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.pool),
      obj(txb, args.positions),
      pure(txb, args.u321, `u32`),
      pure(txb, args.bool1, `bool`),
      pure(txb, args.u322, `u32`),
      pure(txb, args.bool2, `bool`),
      pure(txb, args.vecAddress1, `vector<address>`),
      pure(txb, args.vecAddress2, `vector<address>`),
      obj(txb, args.versioned),
    ],
  })
}

export interface FakeSwapArgs {
  poolFactoryAdminCap: ObjectArg
  pool: ObjectArg
  address: string | TransactionArgument
  bool1: boolean | TransactionArgument
  u1281: bigint | TransactionArgument
  bool2: boolean | TransactionArgument
  u1282: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function fakeSwap(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: FakeSwapArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool_factory::fake_swap`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.poolFactoryAdminCap),
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      pure(txb, args.bool1, `bool`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.bool2, `bool`),
      pure(txb, args.u1282, `u128`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}
