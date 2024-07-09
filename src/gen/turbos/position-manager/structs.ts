import * as reified from '../../_framework/reified'
import { String } from '../../_dependencies/onchain/0x1/string/structs'
import { ID, UID } from '../../_dependencies/onchain/0x2/object/structs'
import { Table } from '../../_dependencies/onchain/0x2/table/structs'
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  Vector,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
  ToTypeStr as ToPhantom,
} from '../../_framework/reified'
import { FieldsWithTypes, composeSuiType, compressSuiType } from '../../_framework/util'
import { I32 } from '../i32/structs'
import { bcs, fromB64, fromHEX, toHEX } from '@mysten/bcs'
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client'

/* ============================== PositionRewardInfo =============================== */

export function isPositionRewardInfo(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::PositionRewardInfo'
  )
}

export interface PositionRewardInfoFields {
  rewardGrowthInside: ToField<'u128'>
  amountOwed: ToField<'u64'>
}

export type PositionRewardInfoReified = Reified<PositionRewardInfo, PositionRewardInfoFields>

export class PositionRewardInfo implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::PositionRewardInfo'
  static readonly $numTypeParams = 0

  readonly $typeName = PositionRewardInfo.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::PositionRewardInfo'

  readonly $typeArgs: []

  readonly rewardGrowthInside: ToField<'u128'>
  readonly amountOwed: ToField<'u64'>

  private constructor(typeArgs: [], fields: PositionRewardInfoFields) {
    this.$fullTypeName = composeSuiType(
      PositionRewardInfo.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::PositionRewardInfo'
    this.$typeArgs = typeArgs

    this.rewardGrowthInside = fields.rewardGrowthInside
    this.amountOwed = fields.amountOwed
  }

  static reified(): PositionRewardInfoReified {
    return {
      typeName: PositionRewardInfo.$typeName,
      fullTypeName: composeSuiType(
        PositionRewardInfo.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::PositionRewardInfo',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PositionRewardInfo.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PositionRewardInfo.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PositionRewardInfo.fromBcs(data),
      bcs: PositionRewardInfo.bcs,
      fromJSONField: (field: any) => PositionRewardInfo.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PositionRewardInfo.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PositionRewardInfo.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => PositionRewardInfo.fetch(client, id),
      new: (fields: PositionRewardInfoFields) => {
        return new PositionRewardInfo([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return PositionRewardInfo.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<PositionRewardInfo>> {
    return phantom(PositionRewardInfo.reified())
  }
  static get p() {
    return PositionRewardInfo.phantom()
  }

  static get bcs() {
    return bcs.struct('PositionRewardInfo', {
      reward_growth_inside: bcs.u128(),
      amount_owed: bcs.u64(),
    })
  }

  static fromFields(fields: Record<string, any>): PositionRewardInfo {
    return PositionRewardInfo.reified().new({
      rewardGrowthInside: decodeFromFields('u128', fields.reward_growth_inside),
      amountOwed: decodeFromFields('u64', fields.amount_owed),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PositionRewardInfo {
    if (!isPositionRewardInfo(item.type)) {
      throw new Error('not a PositionRewardInfo type')
    }

    return PositionRewardInfo.reified().new({
      rewardGrowthInside: decodeFromFieldsWithTypes('u128', item.fields.reward_growth_inside),
      amountOwed: decodeFromFieldsWithTypes('u64', item.fields.amount_owed),
    })
  }

  static fromBcs(data: Uint8Array): PositionRewardInfo {
    return PositionRewardInfo.fromFields(PositionRewardInfo.bcs.parse(data))
  }

  toJSONField() {
    return {
      rewardGrowthInside: this.rewardGrowthInside.toString(),
      amountOwed: this.amountOwed.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): PositionRewardInfo {
    return PositionRewardInfo.reified().new({
      rewardGrowthInside: decodeFromJSONField('u128', field.rewardGrowthInside),
      amountOwed: decodeFromJSONField('u64', field.amountOwed),
    })
  }

  static fromJSON(json: Record<string, any>): PositionRewardInfo {
    if (json.$typeName !== PositionRewardInfo.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return PositionRewardInfo.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): PositionRewardInfo {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPositionRewardInfo(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PositionRewardInfo object`)
    }
    return PositionRewardInfo.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<PositionRewardInfo> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching PositionRewardInfo object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPositionRewardInfo(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PositionRewardInfo object`)
    }
    return PositionRewardInfo.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== Position =============================== */

export function isPosition(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::Position'
  )
}

export interface PositionFields {
  id: ToField<UID>
  tickLowerIndex: ToField<I32>
  tickUpperIndex: ToField<I32>
  liquidity: ToField<'u128'>
  feeGrowthInsideA: ToField<'u128'>
  feeGrowthInsideB: ToField<'u128'>
  tokensOwedA: ToField<'u64'>
  tokensOwedB: ToField<'u64'>
  rewardInfos: ToField<Vector<PositionRewardInfo>>
}

export type PositionReified = Reified<Position, PositionFields>

export class Position implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::Position'
  static readonly $numTypeParams = 0

  readonly $typeName = Position.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::Position'

  readonly $typeArgs: []

  readonly id: ToField<UID>
  readonly tickLowerIndex: ToField<I32>
  readonly tickUpperIndex: ToField<I32>
  readonly liquidity: ToField<'u128'>
  readonly feeGrowthInsideA: ToField<'u128'>
  readonly feeGrowthInsideB: ToField<'u128'>
  readonly tokensOwedA: ToField<'u64'>
  readonly tokensOwedB: ToField<'u64'>
  readonly rewardInfos: ToField<Vector<PositionRewardInfo>>

  private constructor(typeArgs: [], fields: PositionFields) {
    this.$fullTypeName = composeSuiType(
      Position.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::Position'
    this.$typeArgs = typeArgs

    this.id = fields.id
    this.tickLowerIndex = fields.tickLowerIndex
    this.tickUpperIndex = fields.tickUpperIndex
    this.liquidity = fields.liquidity
    this.feeGrowthInsideA = fields.feeGrowthInsideA
    this.feeGrowthInsideB = fields.feeGrowthInsideB
    this.tokensOwedA = fields.tokensOwedA
    this.tokensOwedB = fields.tokensOwedB
    this.rewardInfos = fields.rewardInfos
  }

  static reified(): PositionReified {
    return {
      typeName: Position.$typeName,
      fullTypeName: composeSuiType(
        Position.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::Position',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Position.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Position.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Position.fromBcs(data),
      bcs: Position.bcs,
      fromJSONField: (field: any) => Position.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Position.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Position.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => Position.fetch(client, id),
      new: (fields: PositionFields) => {
        return new Position([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return Position.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<Position>> {
    return phantom(Position.reified())
  }
  static get p() {
    return Position.phantom()
  }

  static get bcs() {
    return bcs.struct('Position', {
      id: UID.bcs,
      tick_lower_index: I32.bcs,
      tick_upper_index: I32.bcs,
      liquidity: bcs.u128(),
      fee_growth_inside_a: bcs.u128(),
      fee_growth_inside_b: bcs.u128(),
      tokens_owed_a: bcs.u64(),
      tokens_owed_b: bcs.u64(),
      reward_infos: bcs.vector(PositionRewardInfo.bcs),
    })
  }

  static fromFields(fields: Record<string, any>): Position {
    return Position.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      tickLowerIndex: decodeFromFields(I32.reified(), fields.tick_lower_index),
      tickUpperIndex: decodeFromFields(I32.reified(), fields.tick_upper_index),
      liquidity: decodeFromFields('u128', fields.liquidity),
      feeGrowthInsideA: decodeFromFields('u128', fields.fee_growth_inside_a),
      feeGrowthInsideB: decodeFromFields('u128', fields.fee_growth_inside_b),
      tokensOwedA: decodeFromFields('u64', fields.tokens_owed_a),
      tokensOwedB: decodeFromFields('u64', fields.tokens_owed_b),
      rewardInfos: decodeFromFields(
        reified.vector(PositionRewardInfo.reified()),
        fields.reward_infos
      ),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Position {
    if (!isPosition(item.type)) {
      throw new Error('not a Position type')
    }

    return Position.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      tickLowerIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_lower_index),
      tickUpperIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_upper_index),
      liquidity: decodeFromFieldsWithTypes('u128', item.fields.liquidity),
      feeGrowthInsideA: decodeFromFieldsWithTypes('u128', item.fields.fee_growth_inside_a),
      feeGrowthInsideB: decodeFromFieldsWithTypes('u128', item.fields.fee_growth_inside_b),
      tokensOwedA: decodeFromFieldsWithTypes('u64', item.fields.tokens_owed_a),
      tokensOwedB: decodeFromFieldsWithTypes('u64', item.fields.tokens_owed_b),
      rewardInfos: decodeFromFieldsWithTypes(
        reified.vector(PositionRewardInfo.reified()),
        item.fields.reward_infos
      ),
    })
  }

  static fromBcs(data: Uint8Array): Position {
    return Position.fromFields(Position.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
      tickLowerIndex: this.tickLowerIndex.toJSONField(),
      tickUpperIndex: this.tickUpperIndex.toJSONField(),
      liquidity: this.liquidity.toString(),
      feeGrowthInsideA: this.feeGrowthInsideA.toString(),
      feeGrowthInsideB: this.feeGrowthInsideB.toString(),
      tokensOwedA: this.tokensOwedA.toString(),
      tokensOwedB: this.tokensOwedB.toString(),
      rewardInfos: fieldToJSON<Vector<PositionRewardInfo>>(
        `vector<0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::PositionRewardInfo>`,
        this.rewardInfos
      ),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): Position {
    return Position.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      tickLowerIndex: decodeFromJSONField(I32.reified(), field.tickLowerIndex),
      tickUpperIndex: decodeFromJSONField(I32.reified(), field.tickUpperIndex),
      liquidity: decodeFromJSONField('u128', field.liquidity),
      feeGrowthInsideA: decodeFromJSONField('u128', field.feeGrowthInsideA),
      feeGrowthInsideB: decodeFromJSONField('u128', field.feeGrowthInsideB),
      tokensOwedA: decodeFromJSONField('u64', field.tokensOwedA),
      tokensOwedB: decodeFromJSONField('u64', field.tokensOwedB),
      rewardInfos: decodeFromJSONField(
        reified.vector(PositionRewardInfo.reified()),
        field.rewardInfos
      ),
    })
  }

  static fromJSON(json: Record<string, any>): Position {
    if (json.$typeName !== Position.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return Position.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): Position {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPosition(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Position object`)
    }
    return Position.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<Position> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching Position object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPosition(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Position object`)
    }
    return Position.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== CollectEvent =============================== */

export function isCollectEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::CollectEvent'
  )
}

export interface CollectEventFields {
  pool: ToField<ID>
  amountA: ToField<'u64'>
  amountB: ToField<'u64'>
  recipient: ToField<'address'>
}

export type CollectEventReified = Reified<CollectEvent, CollectEventFields>

export class CollectEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::CollectEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = CollectEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::CollectEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly amountA: ToField<'u64'>
  readonly amountB: ToField<'u64'>
  readonly recipient: ToField<'address'>

  private constructor(typeArgs: [], fields: CollectEventFields) {
    this.$fullTypeName = composeSuiType(
      CollectEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::CollectEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.amountA = fields.amountA
    this.amountB = fields.amountB
    this.recipient = fields.recipient
  }

  static reified(): CollectEventReified {
    return {
      typeName: CollectEvent.$typeName,
      fullTypeName: composeSuiType(
        CollectEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::CollectEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => CollectEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => CollectEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CollectEvent.fromBcs(data),
      bcs: CollectEvent.bcs,
      fromJSONField: (field: any) => CollectEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => CollectEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => CollectEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => CollectEvent.fetch(client, id),
      new: (fields: CollectEventFields) => {
        return new CollectEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return CollectEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<CollectEvent>> {
    return phantom(CollectEvent.reified())
  }
  static get p() {
    return CollectEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('CollectEvent', {
      pool: ID.bcs,
      amount_a: bcs.u64(),
      amount_b: bcs.u64(),
      recipient: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
    })
  }

  static fromFields(fields: Record<string, any>): CollectEvent {
    return CollectEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      amountA: decodeFromFields('u64', fields.amount_a),
      amountB: decodeFromFields('u64', fields.amount_b),
      recipient: decodeFromFields('address', fields.recipient),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CollectEvent {
    if (!isCollectEvent(item.type)) {
      throw new Error('not a CollectEvent type')
    }

    return CollectEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      amountA: decodeFromFieldsWithTypes('u64', item.fields.amount_a),
      amountB: decodeFromFieldsWithTypes('u64', item.fields.amount_b),
      recipient: decodeFromFieldsWithTypes('address', item.fields.recipient),
    })
  }

  static fromBcs(data: Uint8Array): CollectEvent {
    return CollectEvent.fromFields(CollectEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      amountA: this.amountA.toString(),
      amountB: this.amountB.toString(),
      recipient: this.recipient,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): CollectEvent {
    return CollectEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      amountA: decodeFromJSONField('u64', field.amountA),
      amountB: decodeFromJSONField('u64', field.amountB),
      recipient: decodeFromJSONField('address', field.recipient),
    })
  }

  static fromJSON(json: Record<string, any>): CollectEvent {
    if (json.$typeName !== CollectEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return CollectEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): CollectEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isCollectEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a CollectEvent object`)
    }
    return CollectEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<CollectEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching CollectEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isCollectEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a CollectEvent object`)
    }
    return CollectEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== CollectRewardEvent =============================== */

export function isCollectRewardEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::CollectRewardEvent'
  )
}

export interface CollectRewardEventFields {
  pool: ToField<ID>
  amount: ToField<'u64'>
  vault: ToField<ID>
  rewardIndex: ToField<'u64'>
  recipient: ToField<'address'>
}

export type CollectRewardEventReified = Reified<CollectRewardEvent, CollectRewardEventFields>

export class CollectRewardEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::CollectRewardEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = CollectRewardEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::CollectRewardEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly amount: ToField<'u64'>
  readonly vault: ToField<ID>
  readonly rewardIndex: ToField<'u64'>
  readonly recipient: ToField<'address'>

  private constructor(typeArgs: [], fields: CollectRewardEventFields) {
    this.$fullTypeName = composeSuiType(
      CollectRewardEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::CollectRewardEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.amount = fields.amount
    this.vault = fields.vault
    this.rewardIndex = fields.rewardIndex
    this.recipient = fields.recipient
  }

  static reified(): CollectRewardEventReified {
    return {
      typeName: CollectRewardEvent.$typeName,
      fullTypeName: composeSuiType(
        CollectRewardEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::CollectRewardEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => CollectRewardEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => CollectRewardEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CollectRewardEvent.fromBcs(data),
      bcs: CollectRewardEvent.bcs,
      fromJSONField: (field: any) => CollectRewardEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => CollectRewardEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => CollectRewardEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => CollectRewardEvent.fetch(client, id),
      new: (fields: CollectRewardEventFields) => {
        return new CollectRewardEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return CollectRewardEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<CollectRewardEvent>> {
    return phantom(CollectRewardEvent.reified())
  }
  static get p() {
    return CollectRewardEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('CollectRewardEvent', {
      pool: ID.bcs,
      amount: bcs.u64(),
      vault: ID.bcs,
      reward_index: bcs.u64(),
      recipient: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
    })
  }

  static fromFields(fields: Record<string, any>): CollectRewardEvent {
    return CollectRewardEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      amount: decodeFromFields('u64', fields.amount),
      vault: decodeFromFields(ID.reified(), fields.vault),
      rewardIndex: decodeFromFields('u64', fields.reward_index),
      recipient: decodeFromFields('address', fields.recipient),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CollectRewardEvent {
    if (!isCollectRewardEvent(item.type)) {
      throw new Error('not a CollectRewardEvent type')
    }

    return CollectRewardEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      amount: decodeFromFieldsWithTypes('u64', item.fields.amount),
      vault: decodeFromFieldsWithTypes(ID.reified(), item.fields.vault),
      rewardIndex: decodeFromFieldsWithTypes('u64', item.fields.reward_index),
      recipient: decodeFromFieldsWithTypes('address', item.fields.recipient),
    })
  }

  static fromBcs(data: Uint8Array): CollectRewardEvent {
    return CollectRewardEvent.fromFields(CollectRewardEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      amount: this.amount.toString(),
      vault: this.vault,
      rewardIndex: this.rewardIndex.toString(),
      recipient: this.recipient,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): CollectRewardEvent {
    return CollectRewardEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      amount: decodeFromJSONField('u64', field.amount),
      vault: decodeFromJSONField(ID.reified(), field.vault),
      rewardIndex: decodeFromJSONField('u64', field.rewardIndex),
      recipient: decodeFromJSONField('address', field.recipient),
    })
  }

  static fromJSON(json: Record<string, any>): CollectRewardEvent {
    if (json.$typeName !== CollectRewardEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return CollectRewardEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): CollectRewardEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isCollectRewardEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a CollectRewardEvent object`)
    }
    return CollectRewardEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<CollectRewardEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching CollectRewardEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isCollectRewardEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a CollectRewardEvent object`)
    }
    return CollectRewardEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== Positions =============================== */

export function isPositions(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::Positions'
  )
}

export interface PositionsFields {
  id: ToField<UID>
  nftMinted: ToField<'u64'>
  userPosition: ToField<Table<'address', ToPhantom<ID>>>
  nftName: ToField<String>
  nftDescription: ToField<String>
  nftImgUrl: ToField<String>
}

export type PositionsReified = Reified<Positions, PositionsFields>

export class Positions implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::Positions'
  static readonly $numTypeParams = 0

  readonly $typeName = Positions.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::Positions'

  readonly $typeArgs: []

  readonly id: ToField<UID>
  readonly nftMinted: ToField<'u64'>
  readonly userPosition: ToField<Table<'address', ToPhantom<ID>>>
  readonly nftName: ToField<String>
  readonly nftDescription: ToField<String>
  readonly nftImgUrl: ToField<String>

  private constructor(typeArgs: [], fields: PositionsFields) {
    this.$fullTypeName = composeSuiType(
      Positions.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::Positions'
    this.$typeArgs = typeArgs

    this.id = fields.id
    this.nftMinted = fields.nftMinted
    this.userPosition = fields.userPosition
    this.nftName = fields.nftName
    this.nftDescription = fields.nftDescription
    this.nftImgUrl = fields.nftImgUrl
  }

  static reified(): PositionsReified {
    return {
      typeName: Positions.$typeName,
      fullTypeName: composeSuiType(
        Positions.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::Positions',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Positions.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Positions.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Positions.fromBcs(data),
      bcs: Positions.bcs,
      fromJSONField: (field: any) => Positions.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Positions.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Positions.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => Positions.fetch(client, id),
      new: (fields: PositionsFields) => {
        return new Positions([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return Positions.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<Positions>> {
    return phantom(Positions.reified())
  }
  static get p() {
    return Positions.phantom()
  }

  static get bcs() {
    return bcs.struct('Positions', {
      id: UID.bcs,
      nft_minted: bcs.u64(),
      user_position: Table.bcs,
      nft_name: String.bcs,
      nft_description: String.bcs,
      nft_img_url: String.bcs,
    })
  }

  static fromFields(fields: Record<string, any>): Positions {
    return Positions.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      nftMinted: decodeFromFields('u64', fields.nft_minted),
      userPosition: decodeFromFields(
        Table.reified(reified.phantom('address'), reified.phantom(ID.reified())),
        fields.user_position
      ),
      nftName: decodeFromFields(String.reified(), fields.nft_name),
      nftDescription: decodeFromFields(String.reified(), fields.nft_description),
      nftImgUrl: decodeFromFields(String.reified(), fields.nft_img_url),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Positions {
    if (!isPositions(item.type)) {
      throw new Error('not a Positions type')
    }

    return Positions.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      nftMinted: decodeFromFieldsWithTypes('u64', item.fields.nft_minted),
      userPosition: decodeFromFieldsWithTypes(
        Table.reified(reified.phantom('address'), reified.phantom(ID.reified())),
        item.fields.user_position
      ),
      nftName: decodeFromFieldsWithTypes(String.reified(), item.fields.nft_name),
      nftDescription: decodeFromFieldsWithTypes(String.reified(), item.fields.nft_description),
      nftImgUrl: decodeFromFieldsWithTypes(String.reified(), item.fields.nft_img_url),
    })
  }

  static fromBcs(data: Uint8Array): Positions {
    return Positions.fromFields(Positions.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
      nftMinted: this.nftMinted.toString(),
      userPosition: this.userPosition.toJSONField(),
      nftName: this.nftName,
      nftDescription: this.nftDescription,
      nftImgUrl: this.nftImgUrl,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): Positions {
    return Positions.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      nftMinted: decodeFromJSONField('u64', field.nftMinted),
      userPosition: decodeFromJSONField(
        Table.reified(reified.phantom('address'), reified.phantom(ID.reified())),
        field.userPosition
      ),
      nftName: decodeFromJSONField(String.reified(), field.nftName),
      nftDescription: decodeFromJSONField(String.reified(), field.nftDescription),
      nftImgUrl: decodeFromJSONField(String.reified(), field.nftImgUrl),
    })
  }

  static fromJSON(json: Record<string, any>): Positions {
    if (json.$typeName !== Positions.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return Positions.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): Positions {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPositions(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Positions object`)
    }
    return Positions.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<Positions> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching Positions object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPositions(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Positions object`)
    }
    return Positions.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== IncreaseLiquidityEvent =============================== */

export function isIncreaseLiquidityEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::IncreaseLiquidityEvent'
  )
}

export interface IncreaseLiquidityEventFields {
  pool: ToField<ID>
  amountA: ToField<'u64'>
  amountB: ToField<'u64'>
  liquidity: ToField<'u128'>
}

export type IncreaseLiquidityEventReified = Reified<
  IncreaseLiquidityEvent,
  IncreaseLiquidityEventFields
>

export class IncreaseLiquidityEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::IncreaseLiquidityEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = IncreaseLiquidityEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::IncreaseLiquidityEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly amountA: ToField<'u64'>
  readonly amountB: ToField<'u64'>
  readonly liquidity: ToField<'u128'>

  private constructor(typeArgs: [], fields: IncreaseLiquidityEventFields) {
    this.$fullTypeName = composeSuiType(
      IncreaseLiquidityEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::IncreaseLiquidityEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.amountA = fields.amountA
    this.amountB = fields.amountB
    this.liquidity = fields.liquidity
  }

  static reified(): IncreaseLiquidityEventReified {
    return {
      typeName: IncreaseLiquidityEvent.$typeName,
      fullTypeName: composeSuiType(
        IncreaseLiquidityEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::IncreaseLiquidityEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => IncreaseLiquidityEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        IncreaseLiquidityEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => IncreaseLiquidityEvent.fromBcs(data),
      bcs: IncreaseLiquidityEvent.bcs,
      fromJSONField: (field: any) => IncreaseLiquidityEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => IncreaseLiquidityEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        IncreaseLiquidityEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => IncreaseLiquidityEvent.fetch(client, id),
      new: (fields: IncreaseLiquidityEventFields) => {
        return new IncreaseLiquidityEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return IncreaseLiquidityEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<IncreaseLiquidityEvent>> {
    return phantom(IncreaseLiquidityEvent.reified())
  }
  static get p() {
    return IncreaseLiquidityEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('IncreaseLiquidityEvent', {
      pool: ID.bcs,
      amount_a: bcs.u64(),
      amount_b: bcs.u64(),
      liquidity: bcs.u128(),
    })
  }

  static fromFields(fields: Record<string, any>): IncreaseLiquidityEvent {
    return IncreaseLiquidityEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      amountA: decodeFromFields('u64', fields.amount_a),
      amountB: decodeFromFields('u64', fields.amount_b),
      liquidity: decodeFromFields('u128', fields.liquidity),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): IncreaseLiquidityEvent {
    if (!isIncreaseLiquidityEvent(item.type)) {
      throw new Error('not a IncreaseLiquidityEvent type')
    }

    return IncreaseLiquidityEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      amountA: decodeFromFieldsWithTypes('u64', item.fields.amount_a),
      amountB: decodeFromFieldsWithTypes('u64', item.fields.amount_b),
      liquidity: decodeFromFieldsWithTypes('u128', item.fields.liquidity),
    })
  }

  static fromBcs(data: Uint8Array): IncreaseLiquidityEvent {
    return IncreaseLiquidityEvent.fromFields(IncreaseLiquidityEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      amountA: this.amountA.toString(),
      amountB: this.amountB.toString(),
      liquidity: this.liquidity.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): IncreaseLiquidityEvent {
    return IncreaseLiquidityEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      amountA: decodeFromJSONField('u64', field.amountA),
      amountB: decodeFromJSONField('u64', field.amountB),
      liquidity: decodeFromJSONField('u128', field.liquidity),
    })
  }

  static fromJSON(json: Record<string, any>): IncreaseLiquidityEvent {
    if (json.$typeName !== IncreaseLiquidityEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return IncreaseLiquidityEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): IncreaseLiquidityEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isIncreaseLiquidityEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a IncreaseLiquidityEvent object`
      )
    }
    return IncreaseLiquidityEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<IncreaseLiquidityEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching IncreaseLiquidityEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isIncreaseLiquidityEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a IncreaseLiquidityEvent object`)
    }
    return IncreaseLiquidityEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== DecreaseLiquidityEvent =============================== */

export function isDecreaseLiquidityEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::DecreaseLiquidityEvent'
  )
}

export interface DecreaseLiquidityEventFields {
  pool: ToField<ID>
  amountA: ToField<'u64'>
  amountB: ToField<'u64'>
  liquidity: ToField<'u128'>
}

export type DecreaseLiquidityEventReified = Reified<
  DecreaseLiquidityEvent,
  DecreaseLiquidityEventFields
>

export class DecreaseLiquidityEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::DecreaseLiquidityEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = DecreaseLiquidityEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::DecreaseLiquidityEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly amountA: ToField<'u64'>
  readonly amountB: ToField<'u64'>
  readonly liquidity: ToField<'u128'>

  private constructor(typeArgs: [], fields: DecreaseLiquidityEventFields) {
    this.$fullTypeName = composeSuiType(
      DecreaseLiquidityEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::DecreaseLiquidityEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.amountA = fields.amountA
    this.amountB = fields.amountB
    this.liquidity = fields.liquidity
  }

  static reified(): DecreaseLiquidityEventReified {
    return {
      typeName: DecreaseLiquidityEvent.$typeName,
      fullTypeName: composeSuiType(
        DecreaseLiquidityEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_manager::DecreaseLiquidityEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => DecreaseLiquidityEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        DecreaseLiquidityEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => DecreaseLiquidityEvent.fromBcs(data),
      bcs: DecreaseLiquidityEvent.bcs,
      fromJSONField: (field: any) => DecreaseLiquidityEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => DecreaseLiquidityEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        DecreaseLiquidityEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => DecreaseLiquidityEvent.fetch(client, id),
      new: (fields: DecreaseLiquidityEventFields) => {
        return new DecreaseLiquidityEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return DecreaseLiquidityEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<DecreaseLiquidityEvent>> {
    return phantom(DecreaseLiquidityEvent.reified())
  }
  static get p() {
    return DecreaseLiquidityEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('DecreaseLiquidityEvent', {
      pool: ID.bcs,
      amount_a: bcs.u64(),
      amount_b: bcs.u64(),
      liquidity: bcs.u128(),
    })
  }

  static fromFields(fields: Record<string, any>): DecreaseLiquidityEvent {
    return DecreaseLiquidityEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      amountA: decodeFromFields('u64', fields.amount_a),
      amountB: decodeFromFields('u64', fields.amount_b),
      liquidity: decodeFromFields('u128', fields.liquidity),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): DecreaseLiquidityEvent {
    if (!isDecreaseLiquidityEvent(item.type)) {
      throw new Error('not a DecreaseLiquidityEvent type')
    }

    return DecreaseLiquidityEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      amountA: decodeFromFieldsWithTypes('u64', item.fields.amount_a),
      amountB: decodeFromFieldsWithTypes('u64', item.fields.amount_b),
      liquidity: decodeFromFieldsWithTypes('u128', item.fields.liquidity),
    })
  }

  static fromBcs(data: Uint8Array): DecreaseLiquidityEvent {
    return DecreaseLiquidityEvent.fromFields(DecreaseLiquidityEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      amountA: this.amountA.toString(),
      amountB: this.amountB.toString(),
      liquidity: this.liquidity.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): DecreaseLiquidityEvent {
    return DecreaseLiquidityEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      amountA: decodeFromJSONField('u64', field.amountA),
      amountB: decodeFromJSONField('u64', field.amountB),
      liquidity: decodeFromJSONField('u128', field.liquidity),
    })
  }

  static fromJSON(json: Record<string, any>): DecreaseLiquidityEvent {
    if (json.$typeName !== DecreaseLiquidityEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return DecreaseLiquidityEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): DecreaseLiquidityEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isDecreaseLiquidityEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a DecreaseLiquidityEvent object`
      )
    }
    return DecreaseLiquidityEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<DecreaseLiquidityEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching DecreaseLiquidityEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isDecreaseLiquidityEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a DecreaseLiquidityEvent object`)
    }
    return DecreaseLiquidityEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}
