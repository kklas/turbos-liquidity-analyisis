import { PUBLISHED_AT } from '..'
import { ObjectArg, obj } from '../../_framework/util'
import { TransactionBlock } from '@mysten/sui.js/transactions'

export function init(txb: TransactionBlock, fee100Bps: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::fee100bps::init`,
    arguments: [obj(txb, fee100Bps)],
  })
}