import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure, vector } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface SwapArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  bool1: boolean | TransactionArgument
  u1281: bigint | TransactionArgument
  bool2: boolean | TransactionArgument
  u1282: bigint | TransactionArgument
  clock: ObjectArg
}

export function swap(txb: TransactionBlock, typeArgs: [string, string, string], args: SwapArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      pure(txb, args.bool1, `bool`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.bool2, `bool`),
      pure(txb, args.u1282, `u128`),
      obj(txb, args.clock),
    ],
  })
}

export function version(txb: TransactionBlock, versioned: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::version`,
    arguments: [obj(txb, versioned)],
  })
}

export function init(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::pool::init`, arguments: [] })
}

export interface GetPositionKeyArgs {
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
}

export function getPositionKey(txb: TransactionBlock, args: GetPositionKeyArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_position_key`,
    arguments: [pure(txb, args.address, `address`), obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export function upgrade(txb: TransactionBlock, versioned: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::upgrade`,
    arguments: [obj(txb, versioned)],
  })
}

export interface MintArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  u128: bigint | TransactionArgument
  clock: ObjectArg
}

export function mint(txb: TransactionBlock, typeArgs: [string, string, string], args: MintArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::mint`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.u128, `u128`),
      obj(txb, args.clock),
    ],
  })
}

export interface BurnArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  u128: bigint | TransactionArgument
  clock: ObjectArg
}

export function burn(txb: TransactionBlock, typeArgs: [string, string, string], args: BurnArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::burn`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.u128, `u128`),
      obj(txb, args.clock),
    ],
  })
}

export interface SplitAndTransferArgs {
  pool: ObjectArg
  coin1: ObjectArg
  u641: bigint | TransactionArgument
  coin2: ObjectArg
  u642: bigint | TransactionArgument
}

export function splitAndTransfer(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SplitAndTransferArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::split_and_transfer`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.coin1),
      pure(txb, args.u641, `u64`),
      obj(txb, args.coin2),
      pure(txb, args.u642, `u64`),
    ],
  })
}

export function checkVersion(txb: TransactionBlock, versioned: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::check_version`,
    arguments: [obj(txb, versioned)],
  })
}

export interface DeployPoolArgs {
  u321: number | TransactionArgument
  u322: number | TransactionArgument
  u128: bigint | TransactionArgument
  u323: number | TransactionArgument
  clock: ObjectArg
}

export function deployPool(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: DeployPoolArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::deploy_pool`,
    typeArguments: typeArgs,
    arguments: [
      pure(txb, args.u321, `u32`),
      pure(txb, args.u322, `u32`),
      pure(txb, args.u128, `u128`),
      pure(txb, args.u323, `u32`),
      obj(txb, args.clock),
    ],
  })
}

export interface ComputeSwapResultArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  bool1: boolean | TransactionArgument
  u1281: bigint | TransactionArgument
  bool2: boolean | TransactionArgument
  u1282: bigint | TransactionArgument
  bool3: boolean | TransactionArgument
  clock: ObjectArg
}

export function computeSwapResult(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ComputeSwapResultArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::compute_swap_result`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      pure(txb, args.bool1, `bool`),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.bool2, `bool`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.bool3, `bool`),
      obj(txb, args.clock),
    ],
  })
}

export function togglePoolStatus(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  pool: ObjectArg
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::toggle_pool_status`,
    typeArguments: typeArgs,
    arguments: [obj(txb, pool)],
  })
}

export interface CollectArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function collect(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CollectArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::collect`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
    ],
  })
}

export interface CollectV2Args {
  pool: ObjectArg
  address1: string | TransactionArgument
  address2: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function collectV2(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CollectV2Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::collect_v2`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address1, `address`),
      pure(txb, args.address2, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
    ],
  })
}

export interface CollectProtocolFeeArgs {
  pool: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function collectProtocolFee(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CollectProtocolFeeArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::collect_protocol_fee`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface CollectProtocolFeeWithReturn_Args {
  pool: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function collectProtocolFeeWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CollectProtocolFeeWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::collect_protocol_fee_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface UpdatePoolFeeProtocolArgs {
  pool: ObjectArg
  u32: number | TransactionArgument
}

export function updatePoolFeeProtocol(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: UpdatePoolFeeProtocolArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::update_pool_fee_protocol`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), pure(txb, args.u32, `u32`)],
  })
}

export interface InitRewardArgs {
  pool: ObjectArg
  u64: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function initReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: InitRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::init_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.u64, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface UpdateRewardManagerArgs {
  pool: ObjectArg
  u64: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function updateRewardManager(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: UpdateRewardManagerArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::update_reward_manager`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.u64, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface UpdateRewardEmissionsArgs {
  pool: ObjectArg
  u64: bigint | TransactionArgument
  u128: bigint | TransactionArgument
  clock: ObjectArg
}

export function updateRewardEmissions(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: UpdateRewardEmissionsArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::update_reward_emissions`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.u64, `u64`),
      pure(txb, args.u128, `u128`),
      obj(txb, args.clock),
    ],
  })
}

export interface AddRewardArgs {
  pool: ObjectArg
  poolRewardVault: ObjectArg
  u641: bigint | TransactionArgument
  coin: ObjectArg
  u642: bigint | TransactionArgument
  clock: ObjectArg
}

export function addReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: AddRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::add_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.poolRewardVault),
      pure(txb, args.u641, `u64`),
      obj(txb, args.coin),
      pure(txb, args.u642, `u64`),
      obj(txb, args.clock),
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
}

export function removeReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: RemoveRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::remove_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.poolRewardVault),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
      obj(txb, args.clock),
    ],
  })
}

export interface CollectRewardArgs {
  pool: ObjectArg
  poolRewardVault: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function collectReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: CollectRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::collect_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.poolRewardVault),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
    ],
  })
}

export interface CollectRewardV2Args {
  pool: ObjectArg
  poolRewardVault: ObjectArg
  address1: string | TransactionArgument
  address2: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function collectRewardV2(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: CollectRewardV2Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::collect_reward_v2`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.poolRewardVault),
      pure(txb, args.address1, `address`),
      pure(txb, args.address2, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
    ],
  })
}

export interface CollectRewardWithReturn_Args {
  pool: ObjectArg
  poolRewardVault: ObjectArg
  address1: string | TransactionArgument
  address2: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function collectRewardWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: CollectRewardWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::collect_reward_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.poolRewardVault),
      pure(txb, args.address1, `address`),
      pure(txb, args.address2, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
    ],
  })
}

export interface NextPoolRewardInfosArgs {
  pool: ObjectArg
  u64: bigint | TransactionArgument
}

export function nextPoolRewardInfos(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: NextPoolRewardInfosArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::next_pool_reward_infos`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), pure(txb, args.u64, `u64`)],
  })
}

export interface NextInitializedTickWithinOneWordArgs {
  pool: ObjectArg
  i32: ObjectArg
  bool: boolean | TransactionArgument
}

export function nextInitializedTickWithinOneWord(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: NextInitializedTickWithinOneWordArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::next_initialized_tick_within_one_word`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i32), pure(txb, args.bool, `bool`)],
  })
}

export function positionTick(txb: TransactionBlock, i32: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::position_tick`,
    arguments: [obj(txb, i32)],
  })
}

export interface TryInitTickWordArgs {
  pool: ObjectArg
  i32: ObjectArg
}

export function tryInitTickWord(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: TryInitTickWordArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::try_init_tick_word`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i32)],
  })
}

export interface GetTickWordArgs {
  pool: ObjectArg
  i32: ObjectArg
}

export function getTickWord(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetTickWordArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_tick_word`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i32)],
  })
}

export interface GetTickWordMutArgs {
  pool: ObjectArg
  i32: ObjectArg
}

export function getTickWordMut(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetTickWordMutArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_tick_word_mut`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i32)],
  })
}

export interface ModifyPositionArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  i128: ObjectArg
  clock: ObjectArg
}

export function modifyPosition(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ModifyPositionArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::modify_position`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      obj(txb, args.i128),
      obj(txb, args.clock),
    ],
  })
}

export interface TryInitPositionArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
}

export function tryInitPosition(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: TryInitPositionArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::try_init_position`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
    ],
  })
}

export interface UpdatePositionArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  i128: ObjectArg
  clock: ObjectArg
}

export function updatePosition(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: UpdatePositionArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::update_position`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      obj(txb, args.i128),
      obj(txb, args.clock),
    ],
  })
}

export interface CheckTicksArgs {
  i321: ObjectArg
  i322: ObjectArg
}

export function checkTicks(txb: TransactionBlock, args: CheckTicksArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::check_ticks`,
    arguments: [obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface UpdateTickArgs {
  pool: ObjectArg
  i321: ObjectArg
  i322: ObjectArg
  i128: ObjectArg
  bool: boolean | TransactionArgument
  vecU128: Array<bigint | TransactionArgument> | TransactionArgument
}

export function updateTick(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: UpdateTickArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::update_tick`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.i321),
      obj(txb, args.i322),
      obj(txb, args.i128),
      pure(txb, args.bool, `bool`),
      pure(txb, args.vecU128, `vector<u128>`),
    ],
  })
}

export interface GetTickArgs {
  pool: ObjectArg
  i32: ObjectArg
}

export function getTick(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetTickArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_tick`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i32)],
  })
}

export interface InitTickArgs {
  pool: ObjectArg
  i32: ObjectArg
}

export function initTick(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: InitTickArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::init_tick`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i32)],
  })
}

export interface CrossTickArgs {
  pool: ObjectArg
  i32: ObjectArg
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  vecU128: Array<bigint | TransactionArgument> | TransactionArgument
  bool: boolean | TransactionArgument
}

export function crossTick(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CrossTickArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::cross_tick`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.i32),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.vecU128, `vector<u128>`),
      pure(txb, args.bool, `bool`),
    ],
  })
}

export interface ClearTickArgs {
  pool: ObjectArg
  i32: ObjectArg
}

export function clearTick(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ClearTickArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::clear_tick`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i32)],
  })
}

export interface FlipTickArgs {
  pool: ObjectArg
  i32: ObjectArg
}

export function flipTick(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: FlipTickArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::flip_tick`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i32)],
  })
}

export interface NextFeeGrowthInsideArgs {
  pool: ObjectArg
  i321: ObjectArg
  i322: ObjectArg
  i323: ObjectArg
}

export function nextFeeGrowthInside(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: NextFeeGrowthInsideArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::next_fee_growth_inside`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i321), obj(txb, args.i322), obj(txb, args.i323)],
  })
}

export interface NextRewardGrowthsInsideArgs {
  pool: ObjectArg
  i321: ObjectArg
  i322: ObjectArg
  i323: ObjectArg
}

export function nextRewardGrowthsInside(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: NextRewardGrowthsInsideArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::next_reward_growths_inside`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i321), obj(txb, args.i322), obj(txb, args.i323)],
  })
}

export interface UpdatePositionMetadataArgs {
  pool: ObjectArg
  string: string | TransactionArgument
  i128: ObjectArg
  u1281: bigint | TransactionArgument
  u1282: bigint | TransactionArgument
  vecU128: Array<bigint | TransactionArgument> | TransactionArgument
}

export function updatePositionMetadata(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: UpdatePositionMetadataArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::update_position_metadata`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.string, `0x1::string::String`),
      obj(txb, args.i128),
      pure(txb, args.u1281, `u128`),
      pure(txb, args.u1282, `u128`),
      pure(txb, args.vecU128, `vector<u128>`),
    ],
  })
}

export interface GetPositionArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
}

export function getPosition(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetPositionArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_position`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
    ],
  })
}

export interface CheckPositionExistsArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
}

export function checkPositionExists(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CheckPositionExistsArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::check_position_exists`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
    ],
  })
}

export interface GetPositionMutArgs {
  pool: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
}

export function getPositionMut(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetPositionMutArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_position_mut`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
    ],
  })
}

export interface GetPositionByKeyArgs {
  pool: ObjectArg
  string: string | TransactionArgument
}

export function getPositionByKey(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetPositionByKeyArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_position_by_key`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), pure(txb, args.string, `0x1::string::String`)],
  })
}

export interface GetPositionMutByKeyArgs {
  pool: ObjectArg
  string: string | TransactionArgument
}

export function getPositionMutByKey(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetPositionMutByKeyArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_position_mut_by_key`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), pure(txb, args.string, `0x1::string::String`)],
  })
}

export function getPoolFee(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  pool: ObjectArg
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_pool_fee`,
    typeArguments: typeArgs,
    arguments: [obj(txb, pool)],
  })
}

export function getPoolSqrtPrice(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  pool: ObjectArg
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_pool_sqrt_price`,
    typeArguments: typeArgs,
    arguments: [obj(txb, pool)],
  })
}

export function getPoolTickSpacing(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  pool: ObjectArg
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_pool_tick_spacing`,
    typeArguments: typeArgs,
    arguments: [obj(txb, pool)],
  })
}

export function getPoolCurrentIndex(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  pool: ObjectArg
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_pool_current_index`,
    typeArguments: typeArgs,
    arguments: [obj(txb, pool)],
  })
}

export interface GetPositionFeeGrowthInsideAArgs {
  pool: ObjectArg
  string: string | TransactionArgument
}

export function getPositionFeeGrowthInsideA(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetPositionFeeGrowthInsideAArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_position_fee_growth_inside_a`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), pure(txb, args.string, `0x1::string::String`)],
  })
}

export interface GetPositionBaseInfoArgs {
  pool: ObjectArg
  string: string | TransactionArgument
}

export function getPositionBaseInfo(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetPositionBaseInfoArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_position_base_info`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), pure(txb, args.string, `0x1::string::String`)],
  })
}

export interface GetPositionRewardInfosArgs {
  pool: ObjectArg
  string: string | TransactionArgument
}

export function getPositionRewardInfos(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetPositionRewardInfosArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_position_reward_infos`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), pure(txb, args.string, `0x1::string::String`)],
  })
}

export function getPositionRewardInfo(txb: TransactionBlock, positionRewardInfo: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_position_reward_info`,
    arguments: [obj(txb, positionRewardInfo)],
  })
}

export interface GetPositionFeeGrowthInsideBArgs {
  pool: ObjectArg
  string: string | TransactionArgument
}

export function getPositionFeeGrowthInsideB(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: GetPositionFeeGrowthInsideBArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_position_fee_growth_inside_b`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), pure(txb, args.string, `0x1::string::String`)],
  })
}

export function getFlashSwapReceiptInfo(
  txb: TransactionBlock,
  typeArgs: [string, string],
  flashSwapReceipt: ObjectArg
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_flash_swap_receipt_info`,
    typeArguments: typeArgs,
    arguments: [obj(txb, flashSwapReceipt)],
  })
}

export function mergeCoin(
  txb: TransactionBlock,
  typeArg: string,
  vecCoin: Array<ObjectArg> | TransactionArgument
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::merge_coin`,
    typeArguments: [typeArg],
    arguments: [vector(txb, `0x2::coin::Coin<${typeArg}>`, vecCoin)],
  })
}

export interface TransferInArgs {
  pool: ObjectArg
  coin1: ObjectArg
  coin2: ObjectArg
}

export function transferIn(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: TransferInArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::transfer_in`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.coin1), obj(txb, args.coin2)],
  })
}

export interface TransferOutArgs {
  pool: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function transferOut(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: TransferOutArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::transfer_out`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface SplitOutAndReturn_Args {
  pool: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function splitOutAndReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SplitOutAndReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::split_out_and_return_`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), pure(txb, args.u641, `u64`), pure(txb, args.u642, `u64`)],
  })
}

export interface SplitAndReturn_Args {
  pool: ObjectArg
  coin1: ObjectArg
  u641: bigint | TransactionArgument
  coin2: ObjectArg
  u642: bigint | TransactionArgument
}

export function splitAndReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SplitAndReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::split_and_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.coin1),
      pure(txb, args.u641, `u64`),
      obj(txb, args.coin2),
      pure(txb, args.u642, `u64`),
    ],
  })
}

export interface SwapCoinABArgs {
  pool: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function swapCoinAB(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SwapCoinABArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_a_b`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface SwapCoinABWithReturn_Args {
  pool: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function swapCoinABWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SwapCoinABWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_a_b_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
    ],
  })
}

export interface SwapCoinBAArgs {
  pool: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function swapCoinBA(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SwapCoinBAArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_b_a`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface SwapCoinBAWithReturn_Args {
  pool: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
}

export function swapCoinBAWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SwapCoinBAWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_b_a_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
    ],
  })
}

export interface SwapCoinABBCArgs {
  pool1: ObjectArg
  pool2: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function swapCoinABBC(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapCoinABBCArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_a_b_b_c`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface SwapCoinABBCWithReturn_Args {
  pool1: ObjectArg
  pool2: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
}

export function swapCoinABBCWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapCoinABBCWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_a_b_b_c_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
    ],
  })
}

export interface SwapCoinABCBArgs {
  pool1: ObjectArg
  pool2: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function swapCoinABCB(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapCoinABCBArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_a_b_c_b`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface SwapCoinABCBWithReturn_Args {
  pool1: ObjectArg
  pool2: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
}

export function swapCoinABCBWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapCoinABCBWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_a_b_c_b_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
    ],
  })
}

export interface SwapCoinBABCArgs {
  pool1: ObjectArg
  pool2: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function swapCoinBABC(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapCoinBABCArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_b_a_b_c`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface SwapCoinBABCWithReturn_Args {
  pool1: ObjectArg
  pool2: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
}

export function swapCoinBABCWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapCoinBABCWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_b_a_b_c_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
    ],
  })
}

export interface SwapCoinBACBArgs {
  pool1: ObjectArg
  pool2: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
  address: string | TransactionArgument
}

export function swapCoinBACB(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapCoinBACBArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_b_a_c_b`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface SwapCoinBACBWithReturn_Args {
  pool1: ObjectArg
  pool2: ObjectArg
  coin: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
}

export function swapCoinBACBWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string, string],
  args: SwapCoinBACBWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_coin_b_a_c_b_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool1),
      obj(txb, args.pool2),
      obj(txb, args.coin),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
    ],
  })
}

export function getPoolBalance(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  pool: ObjectArg
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::get_pool_balance`,
    typeArguments: typeArgs,
    arguments: [obj(txb, pool)],
  })
}

export interface MigratePositionArgs {
  pool: ObjectArg
  string1: string | TransactionArgument
  string2: string | TransactionArgument
}

export function migratePosition(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: MigratePositionArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::migrate_position`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.string1, `0x1::string::String`),
      pure(txb, args.string2, `0x1::string::String`),
    ],
  })
}

export interface ModifyTickRewardArgs {
  pool: ObjectArg
  i321: ObjectArg
  i322: ObjectArg
}

export function modifyTickReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ModifyTickRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::modify_tick_reward`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i321), obj(txb, args.i322)],
  })
}

export interface ModifyTickArgs {
  pool: ObjectArg
  i32: ObjectArg
}

export function modifyTick(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ModifyTickArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::modify_tick`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), obj(txb, args.i32)],
  })
}

export interface ModifyPositionRewardInsideArgs {
  pool: ObjectArg
  i321: ObjectArg
  i322: ObjectArg
  address: string | TransactionArgument
  u64: bigint | TransactionArgument
  u128: bigint | TransactionArgument
}

export function modifyPositionRewardInside(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ModifyPositionRewardInsideArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::modify_position_reward_inside`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.address, `address`),
      pure(txb, args.u64, `u64`),
      pure(txb, args.u128, `u128`),
    ],
  })
}

export interface ModifyTickRewardOutsideArgs {
  pool: ObjectArg
  i32: ObjectArg
  u64: bigint | TransactionArgument
  u128: bigint | TransactionArgument
}

export function modifyTickRewardOutside(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: ModifyTickRewardOutsideArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::modify_tick_reward_outside`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.i32),
      pure(txb, args.u64, `u64`),
      pure(txb, args.u128, `u128`),
    ],
  })
}

export interface SavePositionArgs {
  pool: ObjectArg
  string: string | TransactionArgument
  position: ObjectArg
}

export function savePosition(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: SavePositionArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::save_position`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.string, `0x1::string::String`),
      obj(txb, args.position),
    ],
  })
}

export interface CleanPositionArgs {
  pool: ObjectArg
  string: string | TransactionArgument
}

export function cleanPosition(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CleanPositionArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::pool::clean_position`,
    typeArguments: typeArgs,
    arguments: [obj(txb, args.pool), pure(txb, args.string, `0x1::string::String`)],
  })
}
