import { PUBLISHED_AT } from '..'
import { ObjectArg, obj, pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export function init(txb: TransactionBlock, positionNft: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_nft::init`,
    arguments: [obj(txb, positionNft)],
  })
}

export interface MintArgs {
  string1: string | TransactionArgument
  string2: string | TransactionArgument
  string3: string | TransactionArgument
  id1: string | TransactionArgument
  id2: string | TransactionArgument
  typeName1: ObjectArg
  typeName2: ObjectArg
  typeName3: ObjectArg
}

export function mint(txb: TransactionBlock, args: MintArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_nft::mint`,
    arguments: [
      pure(txb, args.string1, `0x1::string::String`),
      pure(txb, args.string2, `0x1::string::String`),
      pure(txb, args.string3, `0x1::string::String`),
      pure(txb, args.id1, `0x2::object::ID`),
      pure(txb, args.id2, `0x2::object::ID`),
      obj(txb, args.typeName1),
      obj(txb, args.typeName2),
      obj(txb, args.typeName3),
    ],
  })
}

export function burn(txb: TransactionBlock, turbosPositionNft: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_nft::burn`,
    arguments: [obj(txb, turbosPositionNft)],
  })
}

export function poolId(txb: TransactionBlock, turbosPositionNft: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_nft::pool_id`,
    arguments: [obj(txb, turbosPositionNft)],
  })
}

export function positionId(txb: TransactionBlock, turbosPositionNft: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::position_nft::position_id`,
    arguments: [obj(txb, turbosPositionNft)],
  })
}
