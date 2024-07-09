import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure, vector } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export function init(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::position_manager::init`, arguments: [] })
}

export interface MintArgs {
  pool: ObjectArg
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

export function mint(txb: TransactionBlock, typeArgs: [string, string, string], args: MintArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::mint`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
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

export interface BurnArgs {
  positions: ObjectArg
  turbosPositionNft: ObjectArg
  versioned: ObjectArg
}

export function burn(txb: TransactionBlock, typeArgs: [string, string, string], args: BurnArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::burn`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.positions),
      obj(txb, args.turbosPositionNft),
      obj(txb, args.versioned),
    ],
  })
}

export interface CollectArgs {
  pool: ObjectArg
  positions: ObjectArg
  turbosPositionNft: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function collect(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CollectArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::collect`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.positions),
      obj(txb, args.turbosPositionNft),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface CollectRewardArgs {
  pool: ObjectArg
  positions: ObjectArg
  turbosPositionNft: ObjectArg
  poolRewardVault: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function collectReward(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: CollectRewardArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::collect_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.positions),
      obj(txb, args.turbosPositionNft),
      obj(txb, args.poolRewardVault),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface CollectRewardWithReturn_Args {
  pool: ObjectArg
  positions: ObjectArg
  turbosPositionNft: ObjectArg
  poolRewardVault: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function collectRewardWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string, string],
  args: CollectRewardWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::collect_reward_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.positions),
      obj(txb, args.turbosPositionNft),
      obj(txb, args.poolRewardVault),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface MigratePositionArgs {
  pool: ObjectArg
  positions: ObjectArg
  vecAddress: Array<string | TransactionArgument> | TransactionArgument
  address: string | TransactionArgument
}

export function migratePosition(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: MigratePositionArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::migrate_position`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.positions),
      pure(txb, args.vecAddress, `vector<address>`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface ModifyPositionRewardInsideArgs {
  positions: ObjectArg
  address: string | TransactionArgument
  u64: bigint | TransactionArgument
  u128: bigint | TransactionArgument
}

export function modifyPositionRewardInside(
  txb: TransactionBlock,
  args: ModifyPositionRewardInsideArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::modify_position_reward_inside`,
    arguments: [
      obj(txb, args.positions),
      pure(txb, args.address, `address`),
      pure(txb, args.u64, `u64`),
      pure(txb, args.u128, `u128`),
    ],
  })
}

export interface CleanPositionArgs {
  positions: ObjectArg
  i321: ObjectArg
  i322: ObjectArg
  address: string | TransactionArgument
}

export function cleanPosition(txb: TransactionBlock, args: CleanPositionArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::clean_position`,
    arguments: [
      obj(txb, args.positions),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.address, `address`),
    ],
  })
}

export function init_(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::position_manager::init_`, arguments: [] })
}

export interface MintWithReturn_Args {
  pool: ObjectArg
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
  u645: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function mintWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: MintWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::mint_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
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
      pure(txb, args.u645, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface AddLiquidityArgs {
  pool: ObjectArg
  coin1: ObjectArg
  coin2: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  clock: ObjectArg
}

export function addLiquidity(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: AddLiquidityArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::add_liquidity`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.coin1),
      obj(txb, args.coin2),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      obj(txb, args.clock),
    ],
  })
}

export interface AddLiquidityWithReturn_Args {
  pool: ObjectArg
  coin1: ObjectArg
  coin2: ObjectArg
  address: string | TransactionArgument
  i321: ObjectArg
  i322: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  clock: ObjectArg
}

export function addLiquidityWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: AddLiquidityWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::add_liquidity_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.coin1),
      obj(txb, args.coin2),
      pure(txb, args.address, `address`),
      obj(txb, args.i321),
      obj(txb, args.i322),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      obj(txb, args.clock),
    ],
  })
}

export interface IncreaseLiquidityArgs {
  pool: ObjectArg
  positions: ObjectArg
  vecCoin1: Array<ObjectArg> | TransactionArgument
  vecCoin2: Array<ObjectArg> | TransactionArgument
  turbosPositionNft: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
  u644: bigint | TransactionArgument
  u645: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function increaseLiquidity(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: IncreaseLiquidityArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::increase_liquidity`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.positions),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin1),
      vector(txb, `0x2::coin::Coin<${typeArgs[1]}>`, args.vecCoin2),
      obj(txb, args.turbosPositionNft),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
      pure(txb, args.u644, `u64`),
      pure(txb, args.u645, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface IncreaseLiquidityWithReturn_Args {
  pool: ObjectArg
  positions: ObjectArg
  vecCoin1: Array<ObjectArg> | TransactionArgument
  vecCoin2: Array<ObjectArg> | TransactionArgument
  turbosPositionNft: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
  u644: bigint | TransactionArgument
  u645: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function increaseLiquidityWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: IncreaseLiquidityWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::increase_liquidity_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.positions),
      vector(txb, `0x2::coin::Coin<${typeArgs[0]}>`, args.vecCoin1),
      vector(txb, `0x2::coin::Coin<${typeArgs[1]}>`, args.vecCoin2),
      obj(txb, args.turbosPositionNft),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
      pure(txb, args.u644, `u64`),
      pure(txb, args.u645, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface DecreaseLiquidityArgs {
  pool: ObjectArg
  positions: ObjectArg
  turbosPositionNft: ObjectArg
  u128: bigint | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function decreaseLiquidity(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: DecreaseLiquidityArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::decrease_liquidity`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.positions),
      obj(txb, args.turbosPositionNft),
      pure(txb, args.u128, `u128`),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface DecreaseLiquidityWithReturn_Args {
  pool: ObjectArg
  positions: ObjectArg
  turbosPositionNft: ObjectArg
  u128: bigint | TransactionArgument
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function decreaseLiquidityWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: DecreaseLiquidityWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::decrease_liquidity_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.positions),
      obj(txb, args.turbosPositionNft),
      pure(txb, args.u128, `u128`),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface CollectWithReturn_Args {
  pool: ObjectArg
  positions: ObjectArg
  turbosPositionNft: ObjectArg
  u641: bigint | TransactionArgument
  u642: bigint | TransactionArgument
  address: string | TransactionArgument
  u643: bigint | TransactionArgument
  clock: ObjectArg
  versioned: ObjectArg
}

export function collectWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CollectWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::collect_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.positions),
      obj(txb, args.turbosPositionNft),
      pure(txb, args.u641, `u64`),
      pure(txb, args.u642, `u64`),
      pure(txb, args.address, `address`),
      pure(txb, args.u643, `u64`),
      obj(txb, args.clock),
      obj(txb, args.versioned),
    ],
  })
}

export interface GetPositionTickInfoArgs {
  positions: ObjectArg
  address: string | TransactionArgument
}

export function getPositionTickInfo(txb: TransactionBlock, args: GetPositionTickInfoArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::get_position_tick_info`,
    arguments: [obj(txb, args.positions), pure(txb, args.address, `address`)],
  })
}

export interface CopyPositionWithAddressArgs {
  pool: ObjectArg
  positions: ObjectArg
  string: string | TransactionArgument
  address: string | TransactionArgument
}

export function copyPositionWithAddress(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CopyPositionWithAddressArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::copy_position_with_address`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      obj(txb, args.positions),
      pure(txb, args.string, `0x1::string::String`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface GetMutPositionArgs {
  positions: ObjectArg
  address: string | TransactionArgument
}

export function getMutPosition(txb: TransactionBlock, args: GetMutPositionArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::get_mut_position`,
    arguments: [obj(txb, args.positions), pure(txb, args.address, `address`)],
  })
}

export interface GetPositionInfoArgs {
  positions: ObjectArg
  address: string | TransactionArgument
}

export function getPositionInfo(txb: TransactionBlock, args: GetPositionInfoArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::get_position_info`,
    arguments: [obj(txb, args.positions), pure(txb, args.address, `address`)],
  })
}

export interface UpdateNftNameArgs {
  positions: ObjectArg
  string: string | TransactionArgument
}

export function updateNftName(txb: TransactionBlock, args: UpdateNftNameArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::update_nft_name`,
    arguments: [obj(txb, args.positions), pure(txb, args.string, `0x1::string::String`)],
  })
}

export interface UpdateNftDescriptionArgs {
  positions: ObjectArg
  string: string | TransactionArgument
}

export function updateNftDescription(txb: TransactionBlock, args: UpdateNftDescriptionArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::update_nft_description`,
    arguments: [obj(txb, args.positions), pure(txb, args.string, `0x1::string::String`)],
  })
}

export interface UpdateNftImgUrlArgs {
  positions: ObjectArg
  string: string | TransactionArgument
}

export function updateNftImgUrl(txb: TransactionBlock, args: UpdateNftImgUrlArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::update_nft_img_url`,
    arguments: [obj(txb, args.positions), pure(txb, args.string, `0x1::string::String`)],
  })
}

export interface MintNftArgs {
  id1: string | TransactionArgument
  id2: string | TransactionArgument
  positions: ObjectArg
  address: string | TransactionArgument
}

export function mintNft(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: MintNftArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::mint_nft`,
    typeArguments: typeArgs,
    arguments: [
      pure(txb, args.id1, `0x2::object::ID`),
      pure(txb, args.id2, `0x2::object::ID`),
      obj(txb, args.positions),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface MintNftWithReturn_Args {
  id1: string | TransactionArgument
  id2: string | TransactionArgument
  positions: ObjectArg
}

export function mintNftWithReturn_(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: MintNftWithReturn_Args
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::mint_nft_with_return_`,
    typeArguments: typeArgs,
    arguments: [
      pure(txb, args.id1, `0x2::object::ID`),
      pure(txb, args.id2, `0x2::object::ID`),
      obj(txb, args.positions),
    ],
  })
}

export function burnNft(txb: TransactionBlock, turbosPositionNft: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::burn_nft`,
    arguments: [obj(txb, turbosPositionNft)],
  })
}

export function burnNftDirectly(txb: TransactionBlock, turbosPositionNft: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::burn_nft_directly`,
    arguments: [obj(txb, turbosPositionNft)],
  })
}

export interface InsertUserPositionArgs {
  positions: ObjectArg
  id: string | TransactionArgument
  address: string | TransactionArgument
}

export function insertUserPosition(txb: TransactionBlock, args: InsertUserPositionArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::insert_user_position`,
    arguments: [
      obj(txb, args.positions),
      pure(txb, args.id, `0x2::object::ID`),
      pure(txb, args.address, `address`),
    ],
  })
}

export interface DeleteUserPositionArgs {
  positions: ObjectArg
  address: string | TransactionArgument
}

export function deleteUserPosition(txb: TransactionBlock, args: DeleteUserPositionArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::delete_user_position`,
    arguments: [obj(txb, args.positions), pure(txb, args.address, `address`)],
  })
}

export interface CopyPositionArgs {
  pool: ObjectArg
  string: string | TransactionArgument
  position: ObjectArg
}

export function copyPosition(
  txb: TransactionBlock,
  typeArgs: [string, string, string],
  args: CopyPositionArgs
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::copy_position`,
    typeArguments: typeArgs,
    arguments: [
      obj(txb, args.pool),
      pure(txb, args.string, `0x1::string::String`),
      obj(txb, args.position),
    ],
  })
}

export interface CopyRewardInfoArgs {
  vecPositionRewardInfo1: Array<ObjectArg> | TransactionArgument
  vecPositionRewardInfo2: Array<ObjectArg> | TransactionArgument
}

export function copyRewardInfo(txb: TransactionBlock, args: CopyRewardInfoArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::copy_reward_info`,
    arguments: [
      vector(
        txb,
        `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo`,
        args.vecPositionRewardInfo1
      ),
      vector(
        txb,
        `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::PositionRewardInfo`,
        args.vecPositionRewardInfo2
      ),
    ],
  })
}

export interface TryInitRewardInfosArgs {
  vecPositionRewardInfo: Array<ObjectArg> | TransactionArgument
  u64: bigint | TransactionArgument
}

export function tryInitRewardInfos(txb: TransactionBlock, args: TryInitRewardInfosArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_manager::try_init_reward_infos`,
    arguments: [
      vector(
        txb,
        `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::PositionRewardInfo`,
        args.vecPositionRewardInfo
      ),
      pure(txb, args.u64, `u64`),
    ],
  })
}
