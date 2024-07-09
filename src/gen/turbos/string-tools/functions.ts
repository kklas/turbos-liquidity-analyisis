import { PUBLISHED_AT } from '..'
import { pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export interface GetPositionKeyArgs {
  address: string | TransactionArgument
  u321: number | TransactionArgument
  bool1: boolean | TransactionArgument
  u322: number | TransactionArgument
  bool2: boolean | TransactionArgument
}

export function getPositionKey(txb: TransactionBlock, args: GetPositionKeyArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::string_tools::get_position_key`,
    arguments: [
      pure(txb, args.address, `address`),
      pure(txb, args.u321, `u32`),
      pure(txb, args.bool1, `bool`),
      pure(txb, args.u322, `u32`),
      pure(txb, args.bool2, `bool`),
    ],
  })
}

export function addressToHexstring(txb: TransactionBlock, address: string | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::string_tools::address_to_hexstring`,
    arguments: [pure(txb, address, `address`)],
  })
}

export function u64ToHexstring(txb: TransactionBlock, u64: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::string_tools::u64_to_hexstring`,
    arguments: [pure(txb, u64, `u64`)],
  })
}

export function bytesToHexstring(
  txb: TransactionBlock,
  vecU8: Array<number | TransactionArgument> | TransactionArgument
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::string_tools::bytes_to_hexstring`,
    arguments: [pure(txb, vecU8, `vector<u8>`)],
  })
}

export function u64ToString(txb: TransactionBlock, u64: bigint | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::string_tools::u64_to_string`,
    arguments: [pure(txb, u64, `u64`)],
  })
}
