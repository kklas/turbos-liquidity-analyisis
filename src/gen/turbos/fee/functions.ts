import { PUBLISHED_AT } from '..'
import { GenericArg, ObjectArg, generic, obj, pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export function init(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::fee::init`, arguments: [] })
}

export interface CreateFeeArgs {
  t0: GenericArg
  u321: number | TransactionArgument
  u322: number | TransactionArgument
}

export function createFee(txb: TransactionBlock, typeArg: string, args: CreateFeeArgs) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::fee::create_fee`,
    typeArguments: [typeArg],
    arguments: [
      generic(txb, `${typeArg}`, args.t0),
      pure(txb, args.u321, `u32`),
      pure(txb, args.u322, `u32`),
    ],
  })
}

export function getFee(txb: TransactionBlock, typeArg: string, fee: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::fee::get_fee`,
    typeArguments: [typeArg],
    arguments: [obj(txb, fee)],
  })
}

export function getTickSpacing(txb: TransactionBlock, typeArg: string, fee: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::fee::get_tick_spacing`,
    typeArguments: [typeArg],
    arguments: [obj(txb, fee)],
  })
}
