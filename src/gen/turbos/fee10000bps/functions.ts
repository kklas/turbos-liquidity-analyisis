import { PUBLISHED_AT } from '..'
import { ObjectArg, obj } from '../../_framework/util'
import { TransactionBlock } from '@mysten/sui.js/transactions'

export function init(txb: TransactionBlock, fee10000Bps: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::fee10000bps::init`,
    arguments: [obj(txb, fee10000Bps)],
  })
}
