import * as reified from '../../_framework/reified'
import { String } from '../../_dependencies/onchain/0x1/string/structs'
import { Balance } from '../../_dependencies/onchain/0x2/balance/structs'
import { ID, UID } from '../../_dependencies/onchain/0x2/object/structs'
import { Table } from '../../_dependencies/onchain/0x2/table/structs'
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  Vector,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  ToTypeStr as ToPhantom,
} from '../../_framework/reified'
import { FieldsWithTypes, composeSuiType, compressSuiType } from '../../_framework/util'
import { I128 } from '../i128/structs'
import { I32 } from '../i32/structs'
import { bcs, fromB64, fromHEX, toHEX } from '@mysten/bcs'
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client'

/* ============================== Versioned =============================== */

export function isVersioned(type: string): boolean {
  type = compressSuiType(type)
  return (
    type === '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Versioned'
  )
}

export interface VersionedFields {
  id: ToField<UID>
  version: ToField<'u64'>
}

export type VersionedReified = Reified<Versioned, VersionedFields>

export class Versioned implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Versioned'
  static readonly $numTypeParams = 0

  readonly $typeName = Versioned.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Versioned'

  readonly $typeArgs: []

  readonly id: ToField<UID>
  readonly version: ToField<'u64'>

  private constructor(typeArgs: [], fields: VersionedFields) {
    this.$fullTypeName = composeSuiType(
      Versioned.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Versioned'
    this.$typeArgs = typeArgs

    this.id = fields.id
    this.version = fields.version
  }

  static reified(): VersionedReified {
    return {
      typeName: Versioned.$typeName,
      fullTypeName: composeSuiType(
        Versioned.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Versioned',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Versioned.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Versioned.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Versioned.fromBcs(data),
      bcs: Versioned.bcs,
      fromJSONField: (field: any) => Versioned.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Versioned.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Versioned.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => Versioned.fetch(client, id),
      new: (fields: VersionedFields) => {
        return new Versioned([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return Versioned.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<Versioned>> {
    return phantom(Versioned.reified())
  }
  static get p() {
    return Versioned.phantom()
  }

  static get bcs() {
    return bcs.struct('Versioned', {
      id: UID.bcs,
      version: bcs.u64(),
    })
  }

  static fromFields(fields: Record<string, any>): Versioned {
    return Versioned.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      version: decodeFromFields('u64', fields.version),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Versioned {
    if (!isVersioned(item.type)) {
      throw new Error('not a Versioned type')
    }

    return Versioned.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      version: decodeFromFieldsWithTypes('u64', item.fields.version),
    })
  }

  static fromBcs(data: Uint8Array): Versioned {
    return Versioned.fromFields(Versioned.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
      version: this.version.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): Versioned {
    return Versioned.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      version: decodeFromJSONField('u64', field.version),
    })
  }

  static fromJSON(json: Record<string, any>): Versioned {
    if (json.$typeName !== Versioned.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return Versioned.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): Versioned {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isVersioned(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Versioned object`)
    }
    return Versioned.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<Versioned> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching Versioned object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isVersioned(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Versioned object`)
    }
    return Versioned.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== Tick =============================== */

export function isTick(type: string): boolean {
  type = compressSuiType(type)
  return type === '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick'
}

export interface TickFields {
  id: ToField<UID>
  liquidityGross: ToField<'u128'>
  liquidityNet: ToField<I128>
  feeGrowthOutsideA: ToField<'u128'>
  feeGrowthOutsideB: ToField<'u128'>
  rewardGrowthsOutside: ToField<Vector<'u128'>>
  initialized: ToField<'bool'>
}

export type TickReified = Reified<Tick, TickFields>

export class Tick implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick'
  static readonly $numTypeParams = 0

  readonly $typeName = Tick.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick'

  readonly $typeArgs: []

  readonly id: ToField<UID>
  readonly liquidityGross: ToField<'u128'>
  readonly liquidityNet: ToField<I128>
  readonly feeGrowthOutsideA: ToField<'u128'>
  readonly feeGrowthOutsideB: ToField<'u128'>
  readonly rewardGrowthsOutside: ToField<Vector<'u128'>>
  readonly initialized: ToField<'bool'>

  private constructor(typeArgs: [], fields: TickFields) {
    this.$fullTypeName = composeSuiType(
      Tick.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick'
    this.$typeArgs = typeArgs

    this.id = fields.id
    this.liquidityGross = fields.liquidityGross
    this.liquidityNet = fields.liquidityNet
    this.feeGrowthOutsideA = fields.feeGrowthOutsideA
    this.feeGrowthOutsideB = fields.feeGrowthOutsideB
    this.rewardGrowthsOutside = fields.rewardGrowthsOutside
    this.initialized = fields.initialized
  }

  static reified(): TickReified {
    return {
      typeName: Tick.$typeName,
      fullTypeName: composeSuiType(
        Tick.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Tick.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Tick.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Tick.fromBcs(data),
      bcs: Tick.bcs,
      fromJSONField: (field: any) => Tick.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Tick.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Tick.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => Tick.fetch(client, id),
      new: (fields: TickFields) => {
        return new Tick([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return Tick.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<Tick>> {
    return phantom(Tick.reified())
  }
  static get p() {
    return Tick.phantom()
  }

  static get bcs() {
    return bcs.struct('Tick', {
      id: UID.bcs,
      liquidity_gross: bcs.u128(),
      liquidity_net: I128.bcs,
      fee_growth_outside_a: bcs.u128(),
      fee_growth_outside_b: bcs.u128(),
      reward_growths_outside: bcs.vector(bcs.u128()),
      initialized: bcs.bool(),
    })
  }

  static fromFields(fields: Record<string, any>): Tick {
    return Tick.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      liquidityGross: decodeFromFields('u128', fields.liquidity_gross),
      liquidityNet: decodeFromFields(I128.reified(), fields.liquidity_net),
      feeGrowthOutsideA: decodeFromFields('u128', fields.fee_growth_outside_a),
      feeGrowthOutsideB: decodeFromFields('u128', fields.fee_growth_outside_b),
      rewardGrowthsOutside: decodeFromFields(reified.vector('u128'), fields.reward_growths_outside),
      initialized: decodeFromFields('bool', fields.initialized),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Tick {
    if (!isTick(item.type)) {
      throw new Error('not a Tick type')
    }

    return Tick.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      liquidityGross: decodeFromFieldsWithTypes('u128', item.fields.liquidity_gross),
      liquidityNet: decodeFromFieldsWithTypes(I128.reified(), item.fields.liquidity_net),
      feeGrowthOutsideA: decodeFromFieldsWithTypes('u128', item.fields.fee_growth_outside_a),
      feeGrowthOutsideB: decodeFromFieldsWithTypes('u128', item.fields.fee_growth_outside_b),
      rewardGrowthsOutside: decodeFromFieldsWithTypes(
        reified.vector('u128'),
        item.fields.reward_growths_outside
      ),
      initialized: decodeFromFieldsWithTypes('bool', item.fields.initialized),
    })
  }

  static fromBcs(data: Uint8Array): Tick {
    return Tick.fromFields(Tick.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
      liquidityGross: this.liquidityGross.toString(),
      liquidityNet: this.liquidityNet.toJSONField(),
      feeGrowthOutsideA: this.feeGrowthOutsideA.toString(),
      feeGrowthOutsideB: this.feeGrowthOutsideB.toString(),
      rewardGrowthsOutside: fieldToJSON<Vector<'u128'>>(`vector<u128>`, this.rewardGrowthsOutside),
      initialized: this.initialized,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): Tick {
    return Tick.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      liquidityGross: decodeFromJSONField('u128', field.liquidityGross),
      liquidityNet: decodeFromJSONField(I128.reified(), field.liquidityNet),
      feeGrowthOutsideA: decodeFromJSONField('u128', field.feeGrowthOutsideA),
      feeGrowthOutsideB: decodeFromJSONField('u128', field.feeGrowthOutsideB),
      rewardGrowthsOutside: decodeFromJSONField(reified.vector('u128'), field.rewardGrowthsOutside),
      initialized: decodeFromJSONField('bool', field.initialized),
    })
  }

  static fromJSON(json: Record<string, any>): Tick {
    if (json.$typeName !== Tick.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return Tick.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): Tick {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isTick(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Tick object`)
    }
    return Tick.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<Tick> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching Tick object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isTick(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Tick object`)
    }
    return Tick.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== PositionRewardInfo =============================== */

export function isPositionRewardInfo(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo'
  )
}

export interface PositionRewardInfoFields {
  rewardGrowthInside: ToField<'u128'>
  amountOwed: ToField<'u64'>
}

export type PositionRewardInfoReified = Reified<PositionRewardInfo, PositionRewardInfoFields>

export class PositionRewardInfo implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo'
  static readonly $numTypeParams = 0

  readonly $typeName = PositionRewardInfo.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo'

  readonly $typeArgs: []

  readonly rewardGrowthInside: ToField<'u128'>
  readonly amountOwed: ToField<'u64'>

  private constructor(typeArgs: [], fields: PositionRewardInfoFields) {
    this.$fullTypeName = composeSuiType(
      PositionRewardInfo.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo'
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
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo',
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
    type === '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Position'
  )
}

export interface PositionFields {
  id: ToField<UID>
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
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Position'
  static readonly $numTypeParams = 0

  readonly $typeName = Position.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Position'

  readonly $typeArgs: []

  readonly id: ToField<UID>
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
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Position'
    this.$typeArgs = typeArgs

    this.id = fields.id
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
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Position',
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
      liquidity: this.liquidity.toString(),
      feeGrowthInsideA: this.feeGrowthInsideA.toString(),
      feeGrowthInsideB: this.feeGrowthInsideB.toString(),
      tokensOwedA: this.tokensOwedA.toString(),
      tokensOwedB: this.tokensOwedB.toString(),
      rewardInfos: fieldToJSON<Vector<PositionRewardInfo>>(
        `vector<0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PositionRewardInfo>`,
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

/* ============================== PoolRewardVault =============================== */

export function isPoolRewardVault(type: string): boolean {
  type = compressSuiType(type)
  return type.startsWith(
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardVault<'
  )
}

export interface PoolRewardVaultFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>
  coin: ToField<Balance<T0>>
}

export type PoolRewardVaultReified<T0 extends PhantomTypeArgument> = Reified<
  PoolRewardVault<T0>,
  PoolRewardVaultFields<T0>
>

export class PoolRewardVault<T0 extends PhantomTypeArgument> implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardVault'
  static readonly $numTypeParams = 1

  readonly $typeName = PoolRewardVault.$typeName

  readonly $fullTypeName: `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardVault<${PhantomToTypeStr<T0>}>`

  readonly $typeArgs: [PhantomToTypeStr<T0>]

  readonly id: ToField<UID>
  readonly coin: ToField<Balance<T0>>

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: PoolRewardVaultFields<T0>) {
    this.$fullTypeName = composeSuiType(
      PoolRewardVault.$typeName,
      ...typeArgs
    ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardVault<${PhantomToTypeStr<T0>}>`
    this.$typeArgs = typeArgs

    this.id = fields.id
    this.coin = fields.coin
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0
  ): PoolRewardVaultReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: PoolRewardVault.$typeName,
      fullTypeName: composeSuiType(
        PoolRewardVault.$typeName,
        ...[extractType(T0)]
      ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardVault<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => PoolRewardVault.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PoolRewardVault.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => PoolRewardVault.fromBcs(T0, data),
      bcs: PoolRewardVault.bcs,
      fromJSONField: (field: any) => PoolRewardVault.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => PoolRewardVault.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => PoolRewardVault.fromSuiParsedData(T0, content),
      fetch: async (client: SuiClient, id: string) => PoolRewardVault.fetch(client, T0, id),
      new: (fields: PoolRewardVaultFields<ToPhantomTypeArgument<T0>>) => {
        return new PoolRewardVault([extractType(T0)], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return PoolRewardVault.reified
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0
  ): PhantomReified<ToTypeStr<PoolRewardVault<ToPhantomTypeArgument<T0>>>> {
    return phantom(PoolRewardVault.reified(T0))
  }
  static get p() {
    return PoolRewardVault.phantom
  }

  static get bcs() {
    return bcs.struct('PoolRewardVault', {
      id: UID.bcs,
      coin: Balance.bcs,
    })
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>
  ): PoolRewardVault<ToPhantomTypeArgument<T0>> {
    return PoolRewardVault.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      coin: decodeFromFields(Balance.reified(typeArg), fields.coin),
    })
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes
  ): PoolRewardVault<ToPhantomTypeArgument<T0>> {
    if (!isPoolRewardVault(item.type)) {
      throw new Error('not a PoolRewardVault type')
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg])

    return PoolRewardVault.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      coin: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.coin),
    })
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array
  ): PoolRewardVault<ToPhantomTypeArgument<T0>> {
    return PoolRewardVault.fromFields(typeArg, PoolRewardVault.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
      coin: this.coin.toJSONField(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any
  ): PoolRewardVault<ToPhantomTypeArgument<T0>> {
    return PoolRewardVault.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      coin: decodeFromJSONField(Balance.reified(typeArg), field.coin),
    })
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>
  ): PoolRewardVault<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== PoolRewardVault.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(PoolRewardVault.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg]
    )

    return PoolRewardVault.fromJSONField(typeArg, json)
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData
  ): PoolRewardVault<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPoolRewardVault(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PoolRewardVault object`)
    }
    return PoolRewardVault.fromFieldsWithTypes(typeArg, content)
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string
  ): Promise<PoolRewardVault<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching PoolRewardVault object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPoolRewardVault(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PoolRewardVault object`)
    }
    return PoolRewardVault.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== PoolRewardInfo =============================== */

export function isPoolRewardInfo(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo'
  )
}

export interface PoolRewardInfoFields {
  id: ToField<UID>
  vault: ToField<'address'>
  vaultCoinType: ToField<String>
  emissionsPerSecond: ToField<'u128'>
  growthGlobal: ToField<'u128'>
  manager: ToField<'address'>
}

export type PoolRewardInfoReified = Reified<PoolRewardInfo, PoolRewardInfoFields>

export class PoolRewardInfo implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo'
  static readonly $numTypeParams = 0

  readonly $typeName = PoolRewardInfo.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo'

  readonly $typeArgs: []

  readonly id: ToField<UID>
  readonly vault: ToField<'address'>
  readonly vaultCoinType: ToField<String>
  readonly emissionsPerSecond: ToField<'u128'>
  readonly growthGlobal: ToField<'u128'>
  readonly manager: ToField<'address'>

  private constructor(typeArgs: [], fields: PoolRewardInfoFields) {
    this.$fullTypeName = composeSuiType(
      PoolRewardInfo.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo'
    this.$typeArgs = typeArgs

    this.id = fields.id
    this.vault = fields.vault
    this.vaultCoinType = fields.vaultCoinType
    this.emissionsPerSecond = fields.emissionsPerSecond
    this.growthGlobal = fields.growthGlobal
    this.manager = fields.manager
  }

  static reified(): PoolRewardInfoReified {
    return {
      typeName: PoolRewardInfo.$typeName,
      fullTypeName: composeSuiType(
        PoolRewardInfo.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PoolRewardInfo.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PoolRewardInfo.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolRewardInfo.fromBcs(data),
      bcs: PoolRewardInfo.bcs,
      fromJSONField: (field: any) => PoolRewardInfo.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PoolRewardInfo.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PoolRewardInfo.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => PoolRewardInfo.fetch(client, id),
      new: (fields: PoolRewardInfoFields) => {
        return new PoolRewardInfo([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return PoolRewardInfo.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<PoolRewardInfo>> {
    return phantom(PoolRewardInfo.reified())
  }
  static get p() {
    return PoolRewardInfo.phantom()
  }

  static get bcs() {
    return bcs.struct('PoolRewardInfo', {
      id: UID.bcs,
      vault: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      vault_coin_type: String.bcs,
      emissions_per_second: bcs.u128(),
      growth_global: bcs.u128(),
      manager: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
    })
  }

  static fromFields(fields: Record<string, any>): PoolRewardInfo {
    return PoolRewardInfo.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      vault: decodeFromFields('address', fields.vault),
      vaultCoinType: decodeFromFields(String.reified(), fields.vault_coin_type),
      emissionsPerSecond: decodeFromFields('u128', fields.emissions_per_second),
      growthGlobal: decodeFromFields('u128', fields.growth_global),
      manager: decodeFromFields('address', fields.manager),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolRewardInfo {
    if (!isPoolRewardInfo(item.type)) {
      throw new Error('not a PoolRewardInfo type')
    }

    return PoolRewardInfo.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      vault: decodeFromFieldsWithTypes('address', item.fields.vault),
      vaultCoinType: decodeFromFieldsWithTypes(String.reified(), item.fields.vault_coin_type),
      emissionsPerSecond: decodeFromFieldsWithTypes('u128', item.fields.emissions_per_second),
      growthGlobal: decodeFromFieldsWithTypes('u128', item.fields.growth_global),
      manager: decodeFromFieldsWithTypes('address', item.fields.manager),
    })
  }

  static fromBcs(data: Uint8Array): PoolRewardInfo {
    return PoolRewardInfo.fromFields(PoolRewardInfo.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
      vault: this.vault,
      vaultCoinType: this.vaultCoinType,
      emissionsPerSecond: this.emissionsPerSecond.toString(),
      growthGlobal: this.growthGlobal.toString(),
      manager: this.manager,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): PoolRewardInfo {
    return PoolRewardInfo.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      vault: decodeFromJSONField('address', field.vault),
      vaultCoinType: decodeFromJSONField(String.reified(), field.vaultCoinType),
      emissionsPerSecond: decodeFromJSONField('u128', field.emissionsPerSecond),
      growthGlobal: decodeFromJSONField('u128', field.growthGlobal),
      manager: decodeFromJSONField('address', field.manager),
    })
  }

  static fromJSON(json: Record<string, any>): PoolRewardInfo {
    if (json.$typeName !== PoolRewardInfo.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return PoolRewardInfo.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): PoolRewardInfo {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPoolRewardInfo(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PoolRewardInfo object`)
    }
    return PoolRewardInfo.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<PoolRewardInfo> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching PoolRewardInfo object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPoolRewardInfo(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PoolRewardInfo object`)
    }
    return PoolRewardInfo.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== Pool =============================== */

export function isPool(type: string): boolean {
  type = compressSuiType(type)
  return type.startsWith(
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Pool<'
  )
}

export interface PoolFields<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
  T2 extends PhantomTypeArgument,
> {
  id: ToField<UID>
  coinA: ToField<Balance<T0>>
  coinB: ToField<Balance<T1>>
  protocolFeesA: ToField<'u64'>
  protocolFeesB: ToField<'u64'>
  sqrtPrice: ToField<'u128'>
  tickCurrentIndex: ToField<I32>
  tickSpacing: ToField<'u32'>
  maxLiquidityPerTick: ToField<'u128'>
  fee: ToField<'u32'>
  feeProtocol: ToField<'u32'>
  unlocked: ToField<'bool'>
  feeGrowthGlobalA: ToField<'u128'>
  feeGrowthGlobalB: ToField<'u128'>
  liquidity: ToField<'u128'>
  tickMap: ToField<Table<ToPhantom<I32>, 'u256'>>
  deployTimeMs: ToField<'u64'>
  rewardInfos: ToField<Vector<PoolRewardInfo>>
  rewardLastUpdatedTimeMs: ToField<'u64'>
}

export type PoolReified<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
  T2 extends PhantomTypeArgument,
> = Reified<Pool<T0, T1, T2>, PoolFields<T0, T1, T2>>

export class Pool<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
  T2 extends PhantomTypeArgument,
> implements StructClass
{
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Pool'
  static readonly $numTypeParams = 3

  readonly $typeName = Pool.$typeName

  readonly $fullTypeName: `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Pool<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}, ${PhantomToTypeStr<T2>}>`

  readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>, PhantomToTypeStr<T2>]

  readonly id: ToField<UID>
  readonly coinA: ToField<Balance<T0>>
  readonly coinB: ToField<Balance<T1>>
  readonly protocolFeesA: ToField<'u64'>
  readonly protocolFeesB: ToField<'u64'>
  readonly sqrtPrice: ToField<'u128'>
  readonly tickCurrentIndex: ToField<I32>
  readonly tickSpacing: ToField<'u32'>
  readonly maxLiquidityPerTick: ToField<'u128'>
  readonly fee: ToField<'u32'>
  readonly feeProtocol: ToField<'u32'>
  readonly unlocked: ToField<'bool'>
  readonly feeGrowthGlobalA: ToField<'u128'>
  readonly feeGrowthGlobalB: ToField<'u128'>
  readonly liquidity: ToField<'u128'>
  readonly tickMap: ToField<Table<ToPhantom<I32>, 'u256'>>
  readonly deployTimeMs: ToField<'u64'>
  readonly rewardInfos: ToField<Vector<PoolRewardInfo>>
  readonly rewardLastUpdatedTimeMs: ToField<'u64'>

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>, PhantomToTypeStr<T2>],
    fields: PoolFields<T0, T1, T2>
  ) {
    this.$fullTypeName = composeSuiType(
      Pool.$typeName,
      ...typeArgs
    ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Pool<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}, ${PhantomToTypeStr<T2>}>`
    this.$typeArgs = typeArgs

    this.id = fields.id
    this.coinA = fields.coinA
    this.coinB = fields.coinB
    this.protocolFeesA = fields.protocolFeesA
    this.protocolFeesB = fields.protocolFeesB
    this.sqrtPrice = fields.sqrtPrice
    this.tickCurrentIndex = fields.tickCurrentIndex
    this.tickSpacing = fields.tickSpacing
    this.maxLiquidityPerTick = fields.maxLiquidityPerTick
    this.fee = fields.fee
    this.feeProtocol = fields.feeProtocol
    this.unlocked = fields.unlocked
    this.feeGrowthGlobalA = fields.feeGrowthGlobalA
    this.feeGrowthGlobalB = fields.feeGrowthGlobalB
    this.liquidity = fields.liquidity
    this.tickMap = fields.tickMap
    this.deployTimeMs = fields.deployTimeMs
    this.rewardInfos = fields.rewardInfos
    this.rewardLastUpdatedTimeMs = fields.rewardLastUpdatedTimeMs
  }

  static reified<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
    T2 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
    T2: T2
  ): PoolReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>, ToPhantomTypeArgument<T2>> {
    return {
      typeName: Pool.$typeName,
      fullTypeName: composeSuiType(
        Pool.$typeName,
        ...[extractType(T0), extractType(T1), extractType(T2)]
      ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Pool<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T2>>}>`,
      typeArgs: [extractType(T0), extractType(T1), extractType(T2)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T1>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T2>>,
      ],
      reifiedTypeArgs: [T0, T1, T2],
      fromFields: (fields: Record<string, any>) => Pool.fromFields([T0, T1, T2], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Pool.fromFieldsWithTypes([T0, T1, T2], item),
      fromBcs: (data: Uint8Array) => Pool.fromBcs([T0, T1, T2], data),
      bcs: Pool.bcs,
      fromJSONField: (field: any) => Pool.fromJSONField([T0, T1, T2], field),
      fromJSON: (json: Record<string, any>) => Pool.fromJSON([T0, T1, T2], json),
      fromSuiParsedData: (content: SuiParsedData) => Pool.fromSuiParsedData([T0, T1, T2], content),
      fetch: async (client: SuiClient, id: string) => Pool.fetch(client, [T0, T1, T2], id),
      new: (
        fields: PoolFields<
          ToPhantomTypeArgument<T0>,
          ToPhantomTypeArgument<T1>,
          ToPhantomTypeArgument<T2>
        >
      ) => {
        return new Pool([extractType(T0), extractType(T1), extractType(T2)], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return Pool.reified
  }

  static phantom<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
    T2 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
    T2: T2
  ): PhantomReified<
    ToTypeStr<Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>, ToPhantomTypeArgument<T2>>>
  > {
    return phantom(Pool.reified(T0, T1, T2))
  }
  static get p() {
    return Pool.phantom
  }

  static get bcs() {
    return bcs.struct('Pool', {
      id: UID.bcs,
      coin_a: Balance.bcs,
      coin_b: Balance.bcs,
      protocol_fees_a: bcs.u64(),
      protocol_fees_b: bcs.u64(),
      sqrt_price: bcs.u128(),
      tick_current_index: I32.bcs,
      tick_spacing: bcs.u32(),
      max_liquidity_per_tick: bcs.u128(),
      fee: bcs.u32(),
      fee_protocol: bcs.u32(),
      unlocked: bcs.bool(),
      fee_growth_global_a: bcs.u128(),
      fee_growth_global_b: bcs.u128(),
      liquidity: bcs.u128(),
      tick_map: Table.bcs,
      deploy_time_ms: bcs.u64(),
      reward_infos: bcs.vector(PoolRewardInfo.bcs),
      reward_last_updated_time_ms: bcs.u64(),
    })
  }

  static fromFields<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
    T2 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1, T2],
    fields: Record<string, any>
  ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>, ToPhantomTypeArgument<T2>> {
    return Pool.reified(typeArgs[0], typeArgs[1], typeArgs[2]).new({
      id: decodeFromFields(UID.reified(), fields.id),
      coinA: decodeFromFields(Balance.reified(typeArgs[0]), fields.coin_a),
      coinB: decodeFromFields(Balance.reified(typeArgs[1]), fields.coin_b),
      protocolFeesA: decodeFromFields('u64', fields.protocol_fees_a),
      protocolFeesB: decodeFromFields('u64', fields.protocol_fees_b),
      sqrtPrice: decodeFromFields('u128', fields.sqrt_price),
      tickCurrentIndex: decodeFromFields(I32.reified(), fields.tick_current_index),
      tickSpacing: decodeFromFields('u32', fields.tick_spacing),
      maxLiquidityPerTick: decodeFromFields('u128', fields.max_liquidity_per_tick),
      fee: decodeFromFields('u32', fields.fee),
      feeProtocol: decodeFromFields('u32', fields.fee_protocol),
      unlocked: decodeFromFields('bool', fields.unlocked),
      feeGrowthGlobalA: decodeFromFields('u128', fields.fee_growth_global_a),
      feeGrowthGlobalB: decodeFromFields('u128', fields.fee_growth_global_b),
      liquidity: decodeFromFields('u128', fields.liquidity),
      tickMap: decodeFromFields(
        Table.reified(reified.phantom(I32.reified()), reified.phantom('u256')),
        fields.tick_map
      ),
      deployTimeMs: decodeFromFields('u64', fields.deploy_time_ms),
      rewardInfos: decodeFromFields(reified.vector(PoolRewardInfo.reified()), fields.reward_infos),
      rewardLastUpdatedTimeMs: decodeFromFields('u64', fields.reward_last_updated_time_ms),
    })
  }

  static fromFieldsWithTypes<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
    T2 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1, T2],
    item: FieldsWithTypes
  ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>, ToPhantomTypeArgument<T2>> {
    if (!isPool(item.type)) {
      throw new Error('not a Pool type')
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs)

    return Pool.reified(typeArgs[0], typeArgs[1], typeArgs[2]).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      coinA: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.coin_a),
      coinB: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.coin_b),
      protocolFeesA: decodeFromFieldsWithTypes('u64', item.fields.protocol_fees_a),
      protocolFeesB: decodeFromFieldsWithTypes('u64', item.fields.protocol_fees_b),
      sqrtPrice: decodeFromFieldsWithTypes('u128', item.fields.sqrt_price),
      tickCurrentIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_current_index),
      tickSpacing: decodeFromFieldsWithTypes('u32', item.fields.tick_spacing),
      maxLiquidityPerTick: decodeFromFieldsWithTypes('u128', item.fields.max_liquidity_per_tick),
      fee: decodeFromFieldsWithTypes('u32', item.fields.fee),
      feeProtocol: decodeFromFieldsWithTypes('u32', item.fields.fee_protocol),
      unlocked: decodeFromFieldsWithTypes('bool', item.fields.unlocked),
      feeGrowthGlobalA: decodeFromFieldsWithTypes('u128', item.fields.fee_growth_global_a),
      feeGrowthGlobalB: decodeFromFieldsWithTypes('u128', item.fields.fee_growth_global_b),
      liquidity: decodeFromFieldsWithTypes('u128', item.fields.liquidity),
      tickMap: decodeFromFieldsWithTypes(
        Table.reified(reified.phantom(I32.reified()), reified.phantom('u256')),
        item.fields.tick_map
      ),
      deployTimeMs: decodeFromFieldsWithTypes('u64', item.fields.deploy_time_ms),
      rewardInfos: decodeFromFieldsWithTypes(
        reified.vector(PoolRewardInfo.reified()),
        item.fields.reward_infos
      ),
      rewardLastUpdatedTimeMs: decodeFromFieldsWithTypes(
        'u64',
        item.fields.reward_last_updated_time_ms
      ),
    })
  }

  static fromBcs<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
    T2 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1, T2],
    data: Uint8Array
  ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>, ToPhantomTypeArgument<T2>> {
    return Pool.fromFields(typeArgs, Pool.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
      coinA: this.coinA.toJSONField(),
      coinB: this.coinB.toJSONField(),
      protocolFeesA: this.protocolFeesA.toString(),
      protocolFeesB: this.protocolFeesB.toString(),
      sqrtPrice: this.sqrtPrice.toString(),
      tickCurrentIndex: this.tickCurrentIndex.toJSONField(),
      tickSpacing: this.tickSpacing,
      maxLiquidityPerTick: this.maxLiquidityPerTick.toString(),
      fee: this.fee,
      feeProtocol: this.feeProtocol,
      unlocked: this.unlocked,
      feeGrowthGlobalA: this.feeGrowthGlobalA.toString(),
      feeGrowthGlobalB: this.feeGrowthGlobalB.toString(),
      liquidity: this.liquidity.toString(),
      tickMap: this.tickMap.toJSONField(),
      deployTimeMs: this.deployTimeMs.toString(),
      rewardInfos: fieldToJSON<Vector<PoolRewardInfo>>(
        `vector<0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::PoolRewardInfo>`,
        this.rewardInfos
      ),
      rewardLastUpdatedTimeMs: this.rewardLastUpdatedTimeMs.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
    T2 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1, T2],
    field: any
  ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>, ToPhantomTypeArgument<T2>> {
    return Pool.reified(typeArgs[0], typeArgs[1], typeArgs[2]).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      coinA: decodeFromJSONField(Balance.reified(typeArgs[0]), field.coinA),
      coinB: decodeFromJSONField(Balance.reified(typeArgs[1]), field.coinB),
      protocolFeesA: decodeFromJSONField('u64', field.protocolFeesA),
      protocolFeesB: decodeFromJSONField('u64', field.protocolFeesB),
      sqrtPrice: decodeFromJSONField('u128', field.sqrtPrice),
      tickCurrentIndex: decodeFromJSONField(I32.reified(), field.tickCurrentIndex),
      tickSpacing: decodeFromJSONField('u32', field.tickSpacing),
      maxLiquidityPerTick: decodeFromJSONField('u128', field.maxLiquidityPerTick),
      fee: decodeFromJSONField('u32', field.fee),
      feeProtocol: decodeFromJSONField('u32', field.feeProtocol),
      unlocked: decodeFromJSONField('bool', field.unlocked),
      feeGrowthGlobalA: decodeFromJSONField('u128', field.feeGrowthGlobalA),
      feeGrowthGlobalB: decodeFromJSONField('u128', field.feeGrowthGlobalB),
      liquidity: decodeFromJSONField('u128', field.liquidity),
      tickMap: decodeFromJSONField(
        Table.reified(reified.phantom(I32.reified()), reified.phantom('u256')),
        field.tickMap
      ),
      deployTimeMs: decodeFromJSONField('u64', field.deployTimeMs),
      rewardInfos: decodeFromJSONField(reified.vector(PoolRewardInfo.reified()), field.rewardInfos),
      rewardLastUpdatedTimeMs: decodeFromJSONField('u64', field.rewardLastUpdatedTimeMs),
    })
  }

  static fromJSON<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
    T2 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1, T2],
    json: Record<string, any>
  ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>, ToPhantomTypeArgument<T2>> {
    if (json.$typeName !== Pool.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Pool.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs
    )

    return Pool.fromJSONField(typeArgs, json)
  }

  static fromSuiParsedData<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
    T2 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1, T2],
    content: SuiParsedData
  ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>, ToPhantomTypeArgument<T2>> {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPool(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Pool object`)
    }
    return Pool.fromFieldsWithTypes(typeArgs, content)
  }

  static async fetch<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
    T2 extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T0, T1, T2],
    id: string
  ): Promise<
    Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>, ToPhantomTypeArgument<T2>>
  > {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching Pool object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPool(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Pool object`)
    }
    return Pool.fromBcs(typeArgs, fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== ComputeSwapState =============================== */

export function isComputeSwapState(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::ComputeSwapState'
  )
}

export interface ComputeSwapStateFields {
  amountA: ToField<'u128'>
  amountB: ToField<'u128'>
  amountSpecifiedRemaining: ToField<'u128'>
  amountCalculated: ToField<'u128'>
  sqrtPrice: ToField<'u128'>
  tickCurrentIndex: ToField<I32>
  feeGrowthGlobal: ToField<'u128'>
  protocolFee: ToField<'u128'>
  liquidity: ToField<'u128'>
  feeAmount: ToField<'u128'>
}

export type ComputeSwapStateReified = Reified<ComputeSwapState, ComputeSwapStateFields>

export class ComputeSwapState implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::ComputeSwapState'
  static readonly $numTypeParams = 0

  readonly $typeName = ComputeSwapState.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::ComputeSwapState'

  readonly $typeArgs: []

  readonly amountA: ToField<'u128'>
  readonly amountB: ToField<'u128'>
  readonly amountSpecifiedRemaining: ToField<'u128'>
  readonly amountCalculated: ToField<'u128'>
  readonly sqrtPrice: ToField<'u128'>
  readonly tickCurrentIndex: ToField<I32>
  readonly feeGrowthGlobal: ToField<'u128'>
  readonly protocolFee: ToField<'u128'>
  readonly liquidity: ToField<'u128'>
  readonly feeAmount: ToField<'u128'>

  private constructor(typeArgs: [], fields: ComputeSwapStateFields) {
    this.$fullTypeName = composeSuiType(
      ComputeSwapState.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::ComputeSwapState'
    this.$typeArgs = typeArgs

    this.amountA = fields.amountA
    this.amountB = fields.amountB
    this.amountSpecifiedRemaining = fields.amountSpecifiedRemaining
    this.amountCalculated = fields.amountCalculated
    this.sqrtPrice = fields.sqrtPrice
    this.tickCurrentIndex = fields.tickCurrentIndex
    this.feeGrowthGlobal = fields.feeGrowthGlobal
    this.protocolFee = fields.protocolFee
    this.liquidity = fields.liquidity
    this.feeAmount = fields.feeAmount
  }

  static reified(): ComputeSwapStateReified {
    return {
      typeName: ComputeSwapState.$typeName,
      fullTypeName: composeSuiType(
        ComputeSwapState.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::ComputeSwapState',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ComputeSwapState.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ComputeSwapState.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ComputeSwapState.fromBcs(data),
      bcs: ComputeSwapState.bcs,
      fromJSONField: (field: any) => ComputeSwapState.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ComputeSwapState.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => ComputeSwapState.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => ComputeSwapState.fetch(client, id),
      new: (fields: ComputeSwapStateFields) => {
        return new ComputeSwapState([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return ComputeSwapState.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<ComputeSwapState>> {
    return phantom(ComputeSwapState.reified())
  }
  static get p() {
    return ComputeSwapState.phantom()
  }

  static get bcs() {
    return bcs.struct('ComputeSwapState', {
      amount_a: bcs.u128(),
      amount_b: bcs.u128(),
      amount_specified_remaining: bcs.u128(),
      amount_calculated: bcs.u128(),
      sqrt_price: bcs.u128(),
      tick_current_index: I32.bcs,
      fee_growth_global: bcs.u128(),
      protocol_fee: bcs.u128(),
      liquidity: bcs.u128(),
      fee_amount: bcs.u128(),
    })
  }

  static fromFields(fields: Record<string, any>): ComputeSwapState {
    return ComputeSwapState.reified().new({
      amountA: decodeFromFields('u128', fields.amount_a),
      amountB: decodeFromFields('u128', fields.amount_b),
      amountSpecifiedRemaining: decodeFromFields('u128', fields.amount_specified_remaining),
      amountCalculated: decodeFromFields('u128', fields.amount_calculated),
      sqrtPrice: decodeFromFields('u128', fields.sqrt_price),
      tickCurrentIndex: decodeFromFields(I32.reified(), fields.tick_current_index),
      feeGrowthGlobal: decodeFromFields('u128', fields.fee_growth_global),
      protocolFee: decodeFromFields('u128', fields.protocol_fee),
      liquidity: decodeFromFields('u128', fields.liquidity),
      feeAmount: decodeFromFields('u128', fields.fee_amount),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ComputeSwapState {
    if (!isComputeSwapState(item.type)) {
      throw new Error('not a ComputeSwapState type')
    }

    return ComputeSwapState.reified().new({
      amountA: decodeFromFieldsWithTypes('u128', item.fields.amount_a),
      amountB: decodeFromFieldsWithTypes('u128', item.fields.amount_b),
      amountSpecifiedRemaining: decodeFromFieldsWithTypes(
        'u128',
        item.fields.amount_specified_remaining
      ),
      amountCalculated: decodeFromFieldsWithTypes('u128', item.fields.amount_calculated),
      sqrtPrice: decodeFromFieldsWithTypes('u128', item.fields.sqrt_price),
      tickCurrentIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_current_index),
      feeGrowthGlobal: decodeFromFieldsWithTypes('u128', item.fields.fee_growth_global),
      protocolFee: decodeFromFieldsWithTypes('u128', item.fields.protocol_fee),
      liquidity: decodeFromFieldsWithTypes('u128', item.fields.liquidity),
      feeAmount: decodeFromFieldsWithTypes('u128', item.fields.fee_amount),
    })
  }

  static fromBcs(data: Uint8Array): ComputeSwapState {
    return ComputeSwapState.fromFields(ComputeSwapState.bcs.parse(data))
  }

  toJSONField() {
    return {
      amountA: this.amountA.toString(),
      amountB: this.amountB.toString(),
      amountSpecifiedRemaining: this.amountSpecifiedRemaining.toString(),
      amountCalculated: this.amountCalculated.toString(),
      sqrtPrice: this.sqrtPrice.toString(),
      tickCurrentIndex: this.tickCurrentIndex.toJSONField(),
      feeGrowthGlobal: this.feeGrowthGlobal.toString(),
      protocolFee: this.protocolFee.toString(),
      liquidity: this.liquidity.toString(),
      feeAmount: this.feeAmount.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): ComputeSwapState {
    return ComputeSwapState.reified().new({
      amountA: decodeFromJSONField('u128', field.amountA),
      amountB: decodeFromJSONField('u128', field.amountB),
      amountSpecifiedRemaining: decodeFromJSONField('u128', field.amountSpecifiedRemaining),
      amountCalculated: decodeFromJSONField('u128', field.amountCalculated),
      sqrtPrice: decodeFromJSONField('u128', field.sqrtPrice),
      tickCurrentIndex: decodeFromJSONField(I32.reified(), field.tickCurrentIndex),
      feeGrowthGlobal: decodeFromJSONField('u128', field.feeGrowthGlobal),
      protocolFee: decodeFromJSONField('u128', field.protocolFee),
      liquidity: decodeFromJSONField('u128', field.liquidity),
      feeAmount: decodeFromJSONField('u128', field.feeAmount),
    })
  }

  static fromJSON(json: Record<string, any>): ComputeSwapState {
    if (json.$typeName !== ComputeSwapState.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return ComputeSwapState.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): ComputeSwapState {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isComputeSwapState(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ComputeSwapState object`)
    }
    return ComputeSwapState.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<ComputeSwapState> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching ComputeSwapState object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isComputeSwapState(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ComputeSwapState object`)
    }
    return ComputeSwapState.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== FlashSwapReceipt =============================== */

export function isFlashSwapReceipt(type: string): boolean {
  type = compressSuiType(type)
  return type.startsWith(
    '0x9632f61a796fc54952d9151d80b319e066cba5498a27b495c99e113db09726b1::pool::FlashSwapReceipt<'
  )
}

export interface FlashSwapReceiptFields<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> {
  poolId: ToField<ID>
  aToB: ToField<'bool'>
  payAmount: ToField<'u64'>
}

export type FlashSwapReceiptReified<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> = Reified<FlashSwapReceipt<T0, T1>, FlashSwapReceiptFields<T0, T1>>

export class FlashSwapReceipt<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument>
  implements StructClass
{
  static readonly $typeName =
    '0x9632f61a796fc54952d9151d80b319e066cba5498a27b495c99e113db09726b1::pool::FlashSwapReceipt'
  static readonly $numTypeParams = 2

  readonly $typeName = FlashSwapReceipt.$typeName

  readonly $fullTypeName: `0x9632f61a796fc54952d9151d80b319e066cba5498a27b495c99e113db09726b1::pool::FlashSwapReceipt<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`

  readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]

  readonly poolId: ToField<ID>
  readonly aToB: ToField<'bool'>
  readonly payAmount: ToField<'u64'>

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>],
    fields: FlashSwapReceiptFields<T0, T1>
  ) {
    this.$fullTypeName = composeSuiType(
      FlashSwapReceipt.$typeName,
      ...typeArgs
    ) as `0x9632f61a796fc54952d9151d80b319e066cba5498a27b495c99e113db09726b1::pool::FlashSwapReceipt<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`
    this.$typeArgs = typeArgs

    this.poolId = fields.poolId
    this.aToB = fields.aToB
    this.payAmount = fields.payAmount
  }

  static reified<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(T0: T0, T1: T1): FlashSwapReceiptReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    return {
      typeName: FlashSwapReceipt.$typeName,
      fullTypeName: composeSuiType(
        FlashSwapReceipt.$typeName,
        ...[extractType(T0), extractType(T1)]
      ) as `0x9632f61a796fc54952d9151d80b319e066cba5498a27b495c99e113db09726b1::pool::FlashSwapReceipt<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`,
      typeArgs: [extractType(T0), extractType(T1)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T1>>,
      ],
      reifiedTypeArgs: [T0, T1],
      fromFields: (fields: Record<string, any>) => FlashSwapReceipt.fromFields([T0, T1], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        FlashSwapReceipt.fromFieldsWithTypes([T0, T1], item),
      fromBcs: (data: Uint8Array) => FlashSwapReceipt.fromBcs([T0, T1], data),
      bcs: FlashSwapReceipt.bcs,
      fromJSONField: (field: any) => FlashSwapReceipt.fromJSONField([T0, T1], field),
      fromJSON: (json: Record<string, any>) => FlashSwapReceipt.fromJSON([T0, T1], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        FlashSwapReceipt.fromSuiParsedData([T0, T1], content),
      fetch: async (client: SuiClient, id: string) => FlashSwapReceipt.fetch(client, [T0, T1], id),
      new: (
        fields: FlashSwapReceiptFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>
      ) => {
        return new FlashSwapReceipt([extractType(T0), extractType(T1)], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return FlashSwapReceipt.reified
  }

  static phantom<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1
  ): PhantomReified<
    ToTypeStr<FlashSwapReceipt<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>
  > {
    return phantom(FlashSwapReceipt.reified(T0, T1))
  }
  static get p() {
    return FlashSwapReceipt.phantom
  }

  static get bcs() {
    return bcs.struct('FlashSwapReceipt', {
      pool_id: ID.bcs,
      a_to_b: bcs.bool(),
      pay_amount: bcs.u64(),
    })
  }

  static fromFields<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    fields: Record<string, any>
  ): FlashSwapReceipt<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    return FlashSwapReceipt.reified(typeArgs[0], typeArgs[1]).new({
      poolId: decodeFromFields(ID.reified(), fields.pool_id),
      aToB: decodeFromFields('bool', fields.a_to_b),
      payAmount: decodeFromFields('u64', fields.pay_amount),
    })
  }

  static fromFieldsWithTypes<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    item: FieldsWithTypes
  ): FlashSwapReceipt<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (!isFlashSwapReceipt(item.type)) {
      throw new Error('not a FlashSwapReceipt type')
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs)

    return FlashSwapReceipt.reified(typeArgs[0], typeArgs[1]).new({
      poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id),
      aToB: decodeFromFieldsWithTypes('bool', item.fields.a_to_b),
      payAmount: decodeFromFieldsWithTypes('u64', item.fields.pay_amount),
    })
  }

  static fromBcs<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: Uint8Array
  ): FlashSwapReceipt<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    return FlashSwapReceipt.fromFields(typeArgs, FlashSwapReceipt.bcs.parse(data))
  }

  toJSONField() {
    return {
      poolId: this.poolId,
      aToB: this.aToB,
      payAmount: this.payAmount.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    field: any
  ): FlashSwapReceipt<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    return FlashSwapReceipt.reified(typeArgs[0], typeArgs[1]).new({
      poolId: decodeFromJSONField(ID.reified(), field.poolId),
      aToB: decodeFromJSONField('bool', field.aToB),
      payAmount: decodeFromJSONField('u64', field.payAmount),
    })
  }

  static fromJSON<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    json: Record<string, any>
  ): FlashSwapReceipt<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (json.$typeName !== FlashSwapReceipt.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(FlashSwapReceipt.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs
    )

    return FlashSwapReceipt.fromJSONField(typeArgs, json)
  }

  static fromSuiParsedData<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    content: SuiParsedData
  ): FlashSwapReceipt<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isFlashSwapReceipt(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a FlashSwapReceipt object`)
    }
    return FlashSwapReceipt.fromFieldsWithTypes(typeArgs, content)
  }

  static async fetch<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T0, T1],
    id: string
  ): Promise<FlashSwapReceipt<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching FlashSwapReceipt object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isFlashSwapReceipt(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a FlashSwapReceipt object`)
    }
    return FlashSwapReceipt.fromBcs(typeArgs, fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== SwapEvent =============================== */

export function isSwapEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type === '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::SwapEvent'
  )
}

export interface SwapEventFields {
  pool: ToField<ID>
  recipient: ToField<'address'>
  amountA: ToField<'u64'>
  amountB: ToField<'u64'>
  liquidity: ToField<'u128'>
  tickCurrentIndex: ToField<I32>
  tickPreIndex: ToField<I32>
  sqrtPrice: ToField<'u128'>
  protocolFee: ToField<'u64'>
  feeAmount: ToField<'u64'>
  aToB: ToField<'bool'>
  isExactIn: ToField<'bool'>
}

export type SwapEventReified = Reified<SwapEvent, SwapEventFields>

export class SwapEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::SwapEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = SwapEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::SwapEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly recipient: ToField<'address'>
  readonly amountA: ToField<'u64'>
  readonly amountB: ToField<'u64'>
  readonly liquidity: ToField<'u128'>
  readonly tickCurrentIndex: ToField<I32>
  readonly tickPreIndex: ToField<I32>
  readonly sqrtPrice: ToField<'u128'>
  readonly protocolFee: ToField<'u64'>
  readonly feeAmount: ToField<'u64'>
  readonly aToB: ToField<'bool'>
  readonly isExactIn: ToField<'bool'>

  private constructor(typeArgs: [], fields: SwapEventFields) {
    this.$fullTypeName = composeSuiType(
      SwapEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::SwapEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.recipient = fields.recipient
    this.amountA = fields.amountA
    this.amountB = fields.amountB
    this.liquidity = fields.liquidity
    this.tickCurrentIndex = fields.tickCurrentIndex
    this.tickPreIndex = fields.tickPreIndex
    this.sqrtPrice = fields.sqrtPrice
    this.protocolFee = fields.protocolFee
    this.feeAmount = fields.feeAmount
    this.aToB = fields.aToB
    this.isExactIn = fields.isExactIn
  }

  static reified(): SwapEventReified {
    return {
      typeName: SwapEvent.$typeName,
      fullTypeName: composeSuiType(
        SwapEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::SwapEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => SwapEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => SwapEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => SwapEvent.fromBcs(data),
      bcs: SwapEvent.bcs,
      fromJSONField: (field: any) => SwapEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => SwapEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => SwapEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => SwapEvent.fetch(client, id),
      new: (fields: SwapEventFields) => {
        return new SwapEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return SwapEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<SwapEvent>> {
    return phantom(SwapEvent.reified())
  }
  static get p() {
    return SwapEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('SwapEvent', {
      pool: ID.bcs,
      recipient: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      amount_a: bcs.u64(),
      amount_b: bcs.u64(),
      liquidity: bcs.u128(),
      tick_current_index: I32.bcs,
      tick_pre_index: I32.bcs,
      sqrt_price: bcs.u128(),
      protocol_fee: bcs.u64(),
      fee_amount: bcs.u64(),
      a_to_b: bcs.bool(),
      is_exact_in: bcs.bool(),
    })
  }

  static fromFields(fields: Record<string, any>): SwapEvent {
    return SwapEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      recipient: decodeFromFields('address', fields.recipient),
      amountA: decodeFromFields('u64', fields.amount_a),
      amountB: decodeFromFields('u64', fields.amount_b),
      liquidity: decodeFromFields('u128', fields.liquidity),
      tickCurrentIndex: decodeFromFields(I32.reified(), fields.tick_current_index),
      tickPreIndex: decodeFromFields(I32.reified(), fields.tick_pre_index),
      sqrtPrice: decodeFromFields('u128', fields.sqrt_price),
      protocolFee: decodeFromFields('u64', fields.protocol_fee),
      feeAmount: decodeFromFields('u64', fields.fee_amount),
      aToB: decodeFromFields('bool', fields.a_to_b),
      isExactIn: decodeFromFields('bool', fields.is_exact_in),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): SwapEvent {
    if (!isSwapEvent(item.type)) {
      throw new Error('not a SwapEvent type')
    }

    return SwapEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      recipient: decodeFromFieldsWithTypes('address', item.fields.recipient),
      amountA: decodeFromFieldsWithTypes('u64', item.fields.amount_a),
      amountB: decodeFromFieldsWithTypes('u64', item.fields.amount_b),
      liquidity: decodeFromFieldsWithTypes('u128', item.fields.liquidity),
      tickCurrentIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_current_index),
      tickPreIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_pre_index),
      sqrtPrice: decodeFromFieldsWithTypes('u128', item.fields.sqrt_price),
      protocolFee: decodeFromFieldsWithTypes('u64', item.fields.protocol_fee),
      feeAmount: decodeFromFieldsWithTypes('u64', item.fields.fee_amount),
      aToB: decodeFromFieldsWithTypes('bool', item.fields.a_to_b),
      isExactIn: decodeFromFieldsWithTypes('bool', item.fields.is_exact_in),
    })
  }

  static fromBcs(data: Uint8Array): SwapEvent {
    return SwapEvent.fromFields(SwapEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      recipient: this.recipient,
      amountA: this.amountA.toString(),
      amountB: this.amountB.toString(),
      liquidity: this.liquidity.toString(),
      tickCurrentIndex: this.tickCurrentIndex.toJSONField(),
      tickPreIndex: this.tickPreIndex.toJSONField(),
      sqrtPrice: this.sqrtPrice.toString(),
      protocolFee: this.protocolFee.toString(),
      feeAmount: this.feeAmount.toString(),
      aToB: this.aToB,
      isExactIn: this.isExactIn,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): SwapEvent {
    return SwapEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      recipient: decodeFromJSONField('address', field.recipient),
      amountA: decodeFromJSONField('u64', field.amountA),
      amountB: decodeFromJSONField('u64', field.amountB),
      liquidity: decodeFromJSONField('u128', field.liquidity),
      tickCurrentIndex: decodeFromJSONField(I32.reified(), field.tickCurrentIndex),
      tickPreIndex: decodeFromJSONField(I32.reified(), field.tickPreIndex),
      sqrtPrice: decodeFromJSONField('u128', field.sqrtPrice),
      protocolFee: decodeFromJSONField('u64', field.protocolFee),
      feeAmount: decodeFromJSONField('u64', field.feeAmount),
      aToB: decodeFromJSONField('bool', field.aToB),
      isExactIn: decodeFromJSONField('bool', field.isExactIn),
    })
  }

  static fromJSON(json: Record<string, any>): SwapEvent {
    if (json.$typeName !== SwapEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return SwapEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): SwapEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isSwapEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a SwapEvent object`)
    }
    return SwapEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<SwapEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching SwapEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isSwapEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a SwapEvent object`)
    }
    return SwapEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== MintEvent =============================== */

export function isMintEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type === '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::MintEvent'
  )
}

export interface MintEventFields {
  pool: ToField<ID>
  owner: ToField<'address'>
  tickLowerIndex: ToField<I32>
  tickUpperIndex: ToField<I32>
  amountA: ToField<'u64'>
  amountB: ToField<'u64'>
  liquidityDelta: ToField<'u128'>
}

export type MintEventReified = Reified<MintEvent, MintEventFields>

export class MintEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::MintEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = MintEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::MintEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly owner: ToField<'address'>
  readonly tickLowerIndex: ToField<I32>
  readonly tickUpperIndex: ToField<I32>
  readonly amountA: ToField<'u64'>
  readonly amountB: ToField<'u64'>
  readonly liquidityDelta: ToField<'u128'>

  private constructor(typeArgs: [], fields: MintEventFields) {
    this.$fullTypeName = composeSuiType(
      MintEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::MintEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.owner = fields.owner
    this.tickLowerIndex = fields.tickLowerIndex
    this.tickUpperIndex = fields.tickUpperIndex
    this.amountA = fields.amountA
    this.amountB = fields.amountB
    this.liquidityDelta = fields.liquidityDelta
  }

  static reified(): MintEventReified {
    return {
      typeName: MintEvent.$typeName,
      fullTypeName: composeSuiType(
        MintEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::MintEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => MintEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => MintEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => MintEvent.fromBcs(data),
      bcs: MintEvent.bcs,
      fromJSONField: (field: any) => MintEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => MintEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => MintEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => MintEvent.fetch(client, id),
      new: (fields: MintEventFields) => {
        return new MintEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return MintEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<MintEvent>> {
    return phantom(MintEvent.reified())
  }
  static get p() {
    return MintEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('MintEvent', {
      pool: ID.bcs,
      owner: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      tick_lower_index: I32.bcs,
      tick_upper_index: I32.bcs,
      amount_a: bcs.u64(),
      amount_b: bcs.u64(),
      liquidity_delta: bcs.u128(),
    })
  }

  static fromFields(fields: Record<string, any>): MintEvent {
    return MintEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      owner: decodeFromFields('address', fields.owner),
      tickLowerIndex: decodeFromFields(I32.reified(), fields.tick_lower_index),
      tickUpperIndex: decodeFromFields(I32.reified(), fields.tick_upper_index),
      amountA: decodeFromFields('u64', fields.amount_a),
      amountB: decodeFromFields('u64', fields.amount_b),
      liquidityDelta: decodeFromFields('u128', fields.liquidity_delta),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): MintEvent {
    if (!isMintEvent(item.type)) {
      throw new Error('not a MintEvent type')
    }

    return MintEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      owner: decodeFromFieldsWithTypes('address', item.fields.owner),
      tickLowerIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_lower_index),
      tickUpperIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_upper_index),
      amountA: decodeFromFieldsWithTypes('u64', item.fields.amount_a),
      amountB: decodeFromFieldsWithTypes('u64', item.fields.amount_b),
      liquidityDelta: decodeFromFieldsWithTypes('u128', item.fields.liquidity_delta),
    })
  }

  static fromBcs(data: Uint8Array): MintEvent {
    return MintEvent.fromFields(MintEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      owner: this.owner,
      tickLowerIndex: this.tickLowerIndex.toJSONField(),
      tickUpperIndex: this.tickUpperIndex.toJSONField(),
      amountA: this.amountA.toString(),
      amountB: this.amountB.toString(),
      liquidityDelta: this.liquidityDelta.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): MintEvent {
    return MintEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      owner: decodeFromJSONField('address', field.owner),
      tickLowerIndex: decodeFromJSONField(I32.reified(), field.tickLowerIndex),
      tickUpperIndex: decodeFromJSONField(I32.reified(), field.tickUpperIndex),
      amountA: decodeFromJSONField('u64', field.amountA),
      amountB: decodeFromJSONField('u64', field.amountB),
      liquidityDelta: decodeFromJSONField('u128', field.liquidityDelta),
    })
  }

  static fromJSON(json: Record<string, any>): MintEvent {
    if (json.$typeName !== MintEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return MintEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): MintEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isMintEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a MintEvent object`)
    }
    return MintEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<MintEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching MintEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isMintEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a MintEvent object`)
    }
    return MintEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== BurnEvent =============================== */

export function isBurnEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type === '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::BurnEvent'
  )
}

export interface BurnEventFields {
  pool: ToField<ID>
  owner: ToField<'address'>
  tickLowerIndex: ToField<I32>
  tickUpperIndex: ToField<I32>
  amountA: ToField<'u64'>
  amountB: ToField<'u64'>
  liquidityDelta: ToField<'u128'>
}

export type BurnEventReified = Reified<BurnEvent, BurnEventFields>

export class BurnEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::BurnEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = BurnEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::BurnEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly owner: ToField<'address'>
  readonly tickLowerIndex: ToField<I32>
  readonly tickUpperIndex: ToField<I32>
  readonly amountA: ToField<'u64'>
  readonly amountB: ToField<'u64'>
  readonly liquidityDelta: ToField<'u128'>

  private constructor(typeArgs: [], fields: BurnEventFields) {
    this.$fullTypeName = composeSuiType(
      BurnEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::BurnEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.owner = fields.owner
    this.tickLowerIndex = fields.tickLowerIndex
    this.tickUpperIndex = fields.tickUpperIndex
    this.amountA = fields.amountA
    this.amountB = fields.amountB
    this.liquidityDelta = fields.liquidityDelta
  }

  static reified(): BurnEventReified {
    return {
      typeName: BurnEvent.$typeName,
      fullTypeName: composeSuiType(
        BurnEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::BurnEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => BurnEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => BurnEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BurnEvent.fromBcs(data),
      bcs: BurnEvent.bcs,
      fromJSONField: (field: any) => BurnEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => BurnEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => BurnEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => BurnEvent.fetch(client, id),
      new: (fields: BurnEventFields) => {
        return new BurnEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return BurnEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<BurnEvent>> {
    return phantom(BurnEvent.reified())
  }
  static get p() {
    return BurnEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('BurnEvent', {
      pool: ID.bcs,
      owner: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      tick_lower_index: I32.bcs,
      tick_upper_index: I32.bcs,
      amount_a: bcs.u64(),
      amount_b: bcs.u64(),
      liquidity_delta: bcs.u128(),
    })
  }

  static fromFields(fields: Record<string, any>): BurnEvent {
    return BurnEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      owner: decodeFromFields('address', fields.owner),
      tickLowerIndex: decodeFromFields(I32.reified(), fields.tick_lower_index),
      tickUpperIndex: decodeFromFields(I32.reified(), fields.tick_upper_index),
      amountA: decodeFromFields('u64', fields.amount_a),
      amountB: decodeFromFields('u64', fields.amount_b),
      liquidityDelta: decodeFromFields('u128', fields.liquidity_delta),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BurnEvent {
    if (!isBurnEvent(item.type)) {
      throw new Error('not a BurnEvent type')
    }

    return BurnEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      owner: decodeFromFieldsWithTypes('address', item.fields.owner),
      tickLowerIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_lower_index),
      tickUpperIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_upper_index),
      amountA: decodeFromFieldsWithTypes('u64', item.fields.amount_a),
      amountB: decodeFromFieldsWithTypes('u64', item.fields.amount_b),
      liquidityDelta: decodeFromFieldsWithTypes('u128', item.fields.liquidity_delta),
    })
  }

  static fromBcs(data: Uint8Array): BurnEvent {
    return BurnEvent.fromFields(BurnEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      owner: this.owner,
      tickLowerIndex: this.tickLowerIndex.toJSONField(),
      tickUpperIndex: this.tickUpperIndex.toJSONField(),
      amountA: this.amountA.toString(),
      amountB: this.amountB.toString(),
      liquidityDelta: this.liquidityDelta.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): BurnEvent {
    return BurnEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      owner: decodeFromJSONField('address', field.owner),
      tickLowerIndex: decodeFromJSONField(I32.reified(), field.tickLowerIndex),
      tickUpperIndex: decodeFromJSONField(I32.reified(), field.tickUpperIndex),
      amountA: decodeFromJSONField('u64', field.amountA),
      amountB: decodeFromJSONField('u64', field.amountB),
      liquidityDelta: decodeFromJSONField('u128', field.liquidityDelta),
    })
  }

  static fromJSON(json: Record<string, any>): BurnEvent {
    if (json.$typeName !== BurnEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return BurnEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): BurnEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isBurnEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a BurnEvent object`)
    }
    return BurnEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<BurnEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching BurnEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isBurnEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a BurnEvent object`)
    }
    return BurnEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== TogglePoolStatusEvent =============================== */

export function isTogglePoolStatusEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::TogglePoolStatusEvent'
  )
}

export interface TogglePoolStatusEventFields {
  pool: ToField<ID>
  status: ToField<'bool'>
}

export type TogglePoolStatusEventReified = Reified<
  TogglePoolStatusEvent,
  TogglePoolStatusEventFields
>

export class TogglePoolStatusEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::TogglePoolStatusEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = TogglePoolStatusEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::TogglePoolStatusEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly status: ToField<'bool'>

  private constructor(typeArgs: [], fields: TogglePoolStatusEventFields) {
    this.$fullTypeName = composeSuiType(
      TogglePoolStatusEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::TogglePoolStatusEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.status = fields.status
  }

  static reified(): TogglePoolStatusEventReified {
    return {
      typeName: TogglePoolStatusEvent.$typeName,
      fullTypeName: composeSuiType(
        TogglePoolStatusEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::TogglePoolStatusEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => TogglePoolStatusEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TogglePoolStatusEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => TogglePoolStatusEvent.fromBcs(data),
      bcs: TogglePoolStatusEvent.bcs,
      fromJSONField: (field: any) => TogglePoolStatusEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => TogglePoolStatusEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TogglePoolStatusEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => TogglePoolStatusEvent.fetch(client, id),
      new: (fields: TogglePoolStatusEventFields) => {
        return new TogglePoolStatusEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return TogglePoolStatusEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<TogglePoolStatusEvent>> {
    return phantom(TogglePoolStatusEvent.reified())
  }
  static get p() {
    return TogglePoolStatusEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('TogglePoolStatusEvent', {
      pool: ID.bcs,
      status: bcs.bool(),
    })
  }

  static fromFields(fields: Record<string, any>): TogglePoolStatusEvent {
    return TogglePoolStatusEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      status: decodeFromFields('bool', fields.status),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): TogglePoolStatusEvent {
    if (!isTogglePoolStatusEvent(item.type)) {
      throw new Error('not a TogglePoolStatusEvent type')
    }

    return TogglePoolStatusEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      status: decodeFromFieldsWithTypes('bool', item.fields.status),
    })
  }

  static fromBcs(data: Uint8Array): TogglePoolStatusEvent {
    return TogglePoolStatusEvent.fromFields(TogglePoolStatusEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      status: this.status,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): TogglePoolStatusEvent {
    return TogglePoolStatusEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      status: decodeFromJSONField('bool', field.status),
    })
  }

  static fromJSON(json: Record<string, any>): TogglePoolStatusEvent {
    if (json.$typeName !== TogglePoolStatusEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return TogglePoolStatusEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): TogglePoolStatusEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isTogglePoolStatusEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TogglePoolStatusEvent object`
      )
    }
    return TogglePoolStatusEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<TogglePoolStatusEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching TogglePoolStatusEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isTogglePoolStatusEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a TogglePoolStatusEvent object`)
    }
    return TogglePoolStatusEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== UpdatePoolFeeProtocolEvent =============================== */

export function isUpdatePoolFeeProtocolEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdatePoolFeeProtocolEvent'
  )
}

export interface UpdatePoolFeeProtocolEventFields {
  pool: ToField<ID>
  feeProtocol: ToField<'u32'>
}

export type UpdatePoolFeeProtocolEventReified = Reified<
  UpdatePoolFeeProtocolEvent,
  UpdatePoolFeeProtocolEventFields
>

export class UpdatePoolFeeProtocolEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdatePoolFeeProtocolEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = UpdatePoolFeeProtocolEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdatePoolFeeProtocolEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly feeProtocol: ToField<'u32'>

  private constructor(typeArgs: [], fields: UpdatePoolFeeProtocolEventFields) {
    this.$fullTypeName = composeSuiType(
      UpdatePoolFeeProtocolEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdatePoolFeeProtocolEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.feeProtocol = fields.feeProtocol
  }

  static reified(): UpdatePoolFeeProtocolEventReified {
    return {
      typeName: UpdatePoolFeeProtocolEvent.$typeName,
      fullTypeName: composeSuiType(
        UpdatePoolFeeProtocolEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdatePoolFeeProtocolEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UpdatePoolFeeProtocolEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        UpdatePoolFeeProtocolEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UpdatePoolFeeProtocolEvent.fromBcs(data),
      bcs: UpdatePoolFeeProtocolEvent.bcs,
      fromJSONField: (field: any) => UpdatePoolFeeProtocolEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UpdatePoolFeeProtocolEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        UpdatePoolFeeProtocolEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => UpdatePoolFeeProtocolEvent.fetch(client, id),
      new: (fields: UpdatePoolFeeProtocolEventFields) => {
        return new UpdatePoolFeeProtocolEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return UpdatePoolFeeProtocolEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<UpdatePoolFeeProtocolEvent>> {
    return phantom(UpdatePoolFeeProtocolEvent.reified())
  }
  static get p() {
    return UpdatePoolFeeProtocolEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('UpdatePoolFeeProtocolEvent', {
      pool: ID.bcs,
      fee_protocol: bcs.u32(),
    })
  }

  static fromFields(fields: Record<string, any>): UpdatePoolFeeProtocolEvent {
    return UpdatePoolFeeProtocolEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      feeProtocol: decodeFromFields('u32', fields.fee_protocol),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UpdatePoolFeeProtocolEvent {
    if (!isUpdatePoolFeeProtocolEvent(item.type)) {
      throw new Error('not a UpdatePoolFeeProtocolEvent type')
    }

    return UpdatePoolFeeProtocolEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      feeProtocol: decodeFromFieldsWithTypes('u32', item.fields.fee_protocol),
    })
  }

  static fromBcs(data: Uint8Array): UpdatePoolFeeProtocolEvent {
    return UpdatePoolFeeProtocolEvent.fromFields(UpdatePoolFeeProtocolEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      feeProtocol: this.feeProtocol,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): UpdatePoolFeeProtocolEvent {
    return UpdatePoolFeeProtocolEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      feeProtocol: decodeFromJSONField('u32', field.feeProtocol),
    })
  }

  static fromJSON(json: Record<string, any>): UpdatePoolFeeProtocolEvent {
    if (json.$typeName !== UpdatePoolFeeProtocolEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return UpdatePoolFeeProtocolEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): UpdatePoolFeeProtocolEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isUpdatePoolFeeProtocolEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a UpdatePoolFeeProtocolEvent object`
      )
    }
    return UpdatePoolFeeProtocolEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<UpdatePoolFeeProtocolEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(
        `error fetching UpdatePoolFeeProtocolEvent object at id ${id}: ${res.error.code}`
      )
    }
    if (
      res.data?.bcs?.dataType !== 'moveObject' ||
      !isUpdatePoolFeeProtocolEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a UpdatePoolFeeProtocolEvent object`)
    }
    return UpdatePoolFeeProtocolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== CollectEvent =============================== */

export function isCollectEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectEvent'
  )
}

export interface CollectEventFields {
  pool: ToField<ID>
  recipient: ToField<'address'>
  tickLowerIndex: ToField<I32>
  tickUpperIndex: ToField<I32>
  amountA: ToField<'u64'>
  amountB: ToField<'u64'>
}

export type CollectEventReified = Reified<CollectEvent, CollectEventFields>

export class CollectEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = CollectEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly recipient: ToField<'address'>
  readonly tickLowerIndex: ToField<I32>
  readonly tickUpperIndex: ToField<I32>
  readonly amountA: ToField<'u64'>
  readonly amountB: ToField<'u64'>

  private constructor(typeArgs: [], fields: CollectEventFields) {
    this.$fullTypeName = composeSuiType(
      CollectEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.recipient = fields.recipient
    this.tickLowerIndex = fields.tickLowerIndex
    this.tickUpperIndex = fields.tickUpperIndex
    this.amountA = fields.amountA
    this.amountB = fields.amountB
  }

  static reified(): CollectEventReified {
    return {
      typeName: CollectEvent.$typeName,
      fullTypeName: composeSuiType(
        CollectEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectEvent',
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
      recipient: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      tick_lower_index: I32.bcs,
      tick_upper_index: I32.bcs,
      amount_a: bcs.u64(),
      amount_b: bcs.u64(),
    })
  }

  static fromFields(fields: Record<string, any>): CollectEvent {
    return CollectEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      recipient: decodeFromFields('address', fields.recipient),
      tickLowerIndex: decodeFromFields(I32.reified(), fields.tick_lower_index),
      tickUpperIndex: decodeFromFields(I32.reified(), fields.tick_upper_index),
      amountA: decodeFromFields('u64', fields.amount_a),
      amountB: decodeFromFields('u64', fields.amount_b),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CollectEvent {
    if (!isCollectEvent(item.type)) {
      throw new Error('not a CollectEvent type')
    }

    return CollectEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      recipient: decodeFromFieldsWithTypes('address', item.fields.recipient),
      tickLowerIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_lower_index),
      tickUpperIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_upper_index),
      amountA: decodeFromFieldsWithTypes('u64', item.fields.amount_a),
      amountB: decodeFromFieldsWithTypes('u64', item.fields.amount_b),
    })
  }

  static fromBcs(data: Uint8Array): CollectEvent {
    return CollectEvent.fromFields(CollectEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      recipient: this.recipient,
      tickLowerIndex: this.tickLowerIndex.toJSONField(),
      tickUpperIndex: this.tickUpperIndex.toJSONField(),
      amountA: this.amountA.toString(),
      amountB: this.amountB.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): CollectEvent {
    return CollectEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      recipient: decodeFromJSONField('address', field.recipient),
      tickLowerIndex: decodeFromJSONField(I32.reified(), field.tickLowerIndex),
      tickUpperIndex: decodeFromJSONField(I32.reified(), field.tickUpperIndex),
      amountA: decodeFromJSONField('u64', field.amountA),
      amountB: decodeFromJSONField('u64', field.amountB),
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

/* ============================== CollectProtocolFeeEvent =============================== */

export function isCollectProtocolFeeEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectProtocolFeeEvent'
  )
}

export interface CollectProtocolFeeEventFields {
  pool: ToField<ID>
  recipient: ToField<'address'>
  amountA: ToField<'u64'>
  amountB: ToField<'u64'>
}

export type CollectProtocolFeeEventReified = Reified<
  CollectProtocolFeeEvent,
  CollectProtocolFeeEventFields
>

export class CollectProtocolFeeEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectProtocolFeeEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = CollectProtocolFeeEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectProtocolFeeEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly recipient: ToField<'address'>
  readonly amountA: ToField<'u64'>
  readonly amountB: ToField<'u64'>

  private constructor(typeArgs: [], fields: CollectProtocolFeeEventFields) {
    this.$fullTypeName = composeSuiType(
      CollectProtocolFeeEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectProtocolFeeEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.recipient = fields.recipient
    this.amountA = fields.amountA
    this.amountB = fields.amountB
  }

  static reified(): CollectProtocolFeeEventReified {
    return {
      typeName: CollectProtocolFeeEvent.$typeName,
      fullTypeName: composeSuiType(
        CollectProtocolFeeEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectProtocolFeeEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => CollectProtocolFeeEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CollectProtocolFeeEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CollectProtocolFeeEvent.fromBcs(data),
      bcs: CollectProtocolFeeEvent.bcs,
      fromJSONField: (field: any) => CollectProtocolFeeEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => CollectProtocolFeeEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CollectProtocolFeeEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => CollectProtocolFeeEvent.fetch(client, id),
      new: (fields: CollectProtocolFeeEventFields) => {
        return new CollectProtocolFeeEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return CollectProtocolFeeEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<CollectProtocolFeeEvent>> {
    return phantom(CollectProtocolFeeEvent.reified())
  }
  static get p() {
    return CollectProtocolFeeEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('CollectProtocolFeeEvent', {
      pool: ID.bcs,
      recipient: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      amount_a: bcs.u64(),
      amount_b: bcs.u64(),
    })
  }

  static fromFields(fields: Record<string, any>): CollectProtocolFeeEvent {
    return CollectProtocolFeeEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      recipient: decodeFromFields('address', fields.recipient),
      amountA: decodeFromFields('u64', fields.amount_a),
      amountB: decodeFromFields('u64', fields.amount_b),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CollectProtocolFeeEvent {
    if (!isCollectProtocolFeeEvent(item.type)) {
      throw new Error('not a CollectProtocolFeeEvent type')
    }

    return CollectProtocolFeeEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      recipient: decodeFromFieldsWithTypes('address', item.fields.recipient),
      amountA: decodeFromFieldsWithTypes('u64', item.fields.amount_a),
      amountB: decodeFromFieldsWithTypes('u64', item.fields.amount_b),
    })
  }

  static fromBcs(data: Uint8Array): CollectProtocolFeeEvent {
    return CollectProtocolFeeEvent.fromFields(CollectProtocolFeeEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      recipient: this.recipient,
      amountA: this.amountA.toString(),
      amountB: this.amountB.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): CollectProtocolFeeEvent {
    return CollectProtocolFeeEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      recipient: decodeFromJSONField('address', field.recipient),
      amountA: decodeFromJSONField('u64', field.amountA),
      amountB: decodeFromJSONField('u64', field.amountB),
    })
  }

  static fromJSON(json: Record<string, any>): CollectProtocolFeeEvent {
    if (json.$typeName !== CollectProtocolFeeEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return CollectProtocolFeeEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): CollectProtocolFeeEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isCollectProtocolFeeEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CollectProtocolFeeEvent object`
      )
    }
    return CollectProtocolFeeEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<CollectProtocolFeeEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(
        `error fetching CollectProtocolFeeEvent object at id ${id}: ${res.error.code}`
      )
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isCollectProtocolFeeEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a CollectProtocolFeeEvent object`)
    }
    return CollectProtocolFeeEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== CollectRewardEvent =============================== */

export function isCollectRewardEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectRewardEvent'
  )
}

export interface CollectRewardEventFields {
  pool: ToField<ID>
  recipient: ToField<'address'>
  tickLowerIndex: ToField<I32>
  tickUpperIndex: ToField<I32>
  amount: ToField<'u64'>
  vault: ToField<ID>
  rewardIndex: ToField<'u64'>
}

export type CollectRewardEventReified = Reified<CollectRewardEvent, CollectRewardEventFields>

export class CollectRewardEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectRewardEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = CollectRewardEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectRewardEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly recipient: ToField<'address'>
  readonly tickLowerIndex: ToField<I32>
  readonly tickUpperIndex: ToField<I32>
  readonly amount: ToField<'u64'>
  readonly vault: ToField<ID>
  readonly rewardIndex: ToField<'u64'>

  private constructor(typeArgs: [], fields: CollectRewardEventFields) {
    this.$fullTypeName = composeSuiType(
      CollectRewardEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectRewardEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.recipient = fields.recipient
    this.tickLowerIndex = fields.tickLowerIndex
    this.tickUpperIndex = fields.tickUpperIndex
    this.amount = fields.amount
    this.vault = fields.vault
    this.rewardIndex = fields.rewardIndex
  }

  static reified(): CollectRewardEventReified {
    return {
      typeName: CollectRewardEvent.$typeName,
      fullTypeName: composeSuiType(
        CollectRewardEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::CollectRewardEvent',
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
      recipient: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      tick_lower_index: I32.bcs,
      tick_upper_index: I32.bcs,
      amount: bcs.u64(),
      vault: ID.bcs,
      reward_index: bcs.u64(),
    })
  }

  static fromFields(fields: Record<string, any>): CollectRewardEvent {
    return CollectRewardEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      recipient: decodeFromFields('address', fields.recipient),
      tickLowerIndex: decodeFromFields(I32.reified(), fields.tick_lower_index),
      tickUpperIndex: decodeFromFields(I32.reified(), fields.tick_upper_index),
      amount: decodeFromFields('u64', fields.amount),
      vault: decodeFromFields(ID.reified(), fields.vault),
      rewardIndex: decodeFromFields('u64', fields.reward_index),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CollectRewardEvent {
    if (!isCollectRewardEvent(item.type)) {
      throw new Error('not a CollectRewardEvent type')
    }

    return CollectRewardEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      recipient: decodeFromFieldsWithTypes('address', item.fields.recipient),
      tickLowerIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_lower_index),
      tickUpperIndex: decodeFromFieldsWithTypes(I32.reified(), item.fields.tick_upper_index),
      amount: decodeFromFieldsWithTypes('u64', item.fields.amount),
      vault: decodeFromFieldsWithTypes(ID.reified(), item.fields.vault),
      rewardIndex: decodeFromFieldsWithTypes('u64', item.fields.reward_index),
    })
  }

  static fromBcs(data: Uint8Array): CollectRewardEvent {
    return CollectRewardEvent.fromFields(CollectRewardEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      recipient: this.recipient,
      tickLowerIndex: this.tickLowerIndex.toJSONField(),
      tickUpperIndex: this.tickUpperIndex.toJSONField(),
      amount: this.amount.toString(),
      vault: this.vault,
      rewardIndex: this.rewardIndex.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): CollectRewardEvent {
    return CollectRewardEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      recipient: decodeFromJSONField('address', field.recipient),
      tickLowerIndex: decodeFromJSONField(I32.reified(), field.tickLowerIndex),
      tickUpperIndex: decodeFromJSONField(I32.reified(), field.tickUpperIndex),
      amount: decodeFromJSONField('u64', field.amount),
      vault: decodeFromJSONField(ID.reified(), field.vault),
      rewardIndex: decodeFromJSONField('u64', field.rewardIndex),
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

/* ============================== InitRewardEvent =============================== */

export function isInitRewardEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::InitRewardEvent'
  )
}

export interface InitRewardEventFields {
  pool: ToField<ID>
  rewardIndex: ToField<'u64'>
  rewardVault: ToField<'address'>
  rewardManager: ToField<'address'>
}

export type InitRewardEventReified = Reified<InitRewardEvent, InitRewardEventFields>

export class InitRewardEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::InitRewardEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = InitRewardEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::InitRewardEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly rewardIndex: ToField<'u64'>
  readonly rewardVault: ToField<'address'>
  readonly rewardManager: ToField<'address'>

  private constructor(typeArgs: [], fields: InitRewardEventFields) {
    this.$fullTypeName = composeSuiType(
      InitRewardEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::InitRewardEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.rewardIndex = fields.rewardIndex
    this.rewardVault = fields.rewardVault
    this.rewardManager = fields.rewardManager
  }

  static reified(): InitRewardEventReified {
    return {
      typeName: InitRewardEvent.$typeName,
      fullTypeName: composeSuiType(
        InitRewardEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::InitRewardEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => InitRewardEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => InitRewardEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => InitRewardEvent.fromBcs(data),
      bcs: InitRewardEvent.bcs,
      fromJSONField: (field: any) => InitRewardEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => InitRewardEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => InitRewardEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => InitRewardEvent.fetch(client, id),
      new: (fields: InitRewardEventFields) => {
        return new InitRewardEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return InitRewardEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<InitRewardEvent>> {
    return phantom(InitRewardEvent.reified())
  }
  static get p() {
    return InitRewardEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('InitRewardEvent', {
      pool: ID.bcs,
      reward_index: bcs.u64(),
      reward_vault: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      reward_manager: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
    })
  }

  static fromFields(fields: Record<string, any>): InitRewardEvent {
    return InitRewardEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      rewardIndex: decodeFromFields('u64', fields.reward_index),
      rewardVault: decodeFromFields('address', fields.reward_vault),
      rewardManager: decodeFromFields('address', fields.reward_manager),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): InitRewardEvent {
    if (!isInitRewardEvent(item.type)) {
      throw new Error('not a InitRewardEvent type')
    }

    return InitRewardEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      rewardIndex: decodeFromFieldsWithTypes('u64', item.fields.reward_index),
      rewardVault: decodeFromFieldsWithTypes('address', item.fields.reward_vault),
      rewardManager: decodeFromFieldsWithTypes('address', item.fields.reward_manager),
    })
  }

  static fromBcs(data: Uint8Array): InitRewardEvent {
    return InitRewardEvent.fromFields(InitRewardEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      rewardIndex: this.rewardIndex.toString(),
      rewardVault: this.rewardVault,
      rewardManager: this.rewardManager,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): InitRewardEvent {
    return InitRewardEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      rewardIndex: decodeFromJSONField('u64', field.rewardIndex),
      rewardVault: decodeFromJSONField('address', field.rewardVault),
      rewardManager: decodeFromJSONField('address', field.rewardManager),
    })
  }

  static fromJSON(json: Record<string, any>): InitRewardEvent {
    if (json.$typeName !== InitRewardEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return InitRewardEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): InitRewardEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isInitRewardEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a InitRewardEvent object`)
    }
    return InitRewardEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<InitRewardEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching InitRewardEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isInitRewardEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a InitRewardEvent object`)
    }
    return InitRewardEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== UpdateRewardManagerEvent =============================== */

export function isUpdateRewardManagerEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdateRewardManagerEvent'
  )
}

export interface UpdateRewardManagerEventFields {
  pool: ToField<ID>
  rewardIndex: ToField<'u64'>
  rewardManager: ToField<'address'>
}

export type UpdateRewardManagerEventReified = Reified<
  UpdateRewardManagerEvent,
  UpdateRewardManagerEventFields
>

export class UpdateRewardManagerEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdateRewardManagerEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = UpdateRewardManagerEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdateRewardManagerEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly rewardIndex: ToField<'u64'>
  readonly rewardManager: ToField<'address'>

  private constructor(typeArgs: [], fields: UpdateRewardManagerEventFields) {
    this.$fullTypeName = composeSuiType(
      UpdateRewardManagerEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdateRewardManagerEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.rewardIndex = fields.rewardIndex
    this.rewardManager = fields.rewardManager
  }

  static reified(): UpdateRewardManagerEventReified {
    return {
      typeName: UpdateRewardManagerEvent.$typeName,
      fullTypeName: composeSuiType(
        UpdateRewardManagerEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdateRewardManagerEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UpdateRewardManagerEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        UpdateRewardManagerEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UpdateRewardManagerEvent.fromBcs(data),
      bcs: UpdateRewardManagerEvent.bcs,
      fromJSONField: (field: any) => UpdateRewardManagerEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UpdateRewardManagerEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        UpdateRewardManagerEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => UpdateRewardManagerEvent.fetch(client, id),
      new: (fields: UpdateRewardManagerEventFields) => {
        return new UpdateRewardManagerEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return UpdateRewardManagerEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<UpdateRewardManagerEvent>> {
    return phantom(UpdateRewardManagerEvent.reified())
  }
  static get p() {
    return UpdateRewardManagerEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('UpdateRewardManagerEvent', {
      pool: ID.bcs,
      reward_index: bcs.u64(),
      reward_manager: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
    })
  }

  static fromFields(fields: Record<string, any>): UpdateRewardManagerEvent {
    return UpdateRewardManagerEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      rewardIndex: decodeFromFields('u64', fields.reward_index),
      rewardManager: decodeFromFields('address', fields.reward_manager),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UpdateRewardManagerEvent {
    if (!isUpdateRewardManagerEvent(item.type)) {
      throw new Error('not a UpdateRewardManagerEvent type')
    }

    return UpdateRewardManagerEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      rewardIndex: decodeFromFieldsWithTypes('u64', item.fields.reward_index),
      rewardManager: decodeFromFieldsWithTypes('address', item.fields.reward_manager),
    })
  }

  static fromBcs(data: Uint8Array): UpdateRewardManagerEvent {
    return UpdateRewardManagerEvent.fromFields(UpdateRewardManagerEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      rewardIndex: this.rewardIndex.toString(),
      rewardManager: this.rewardManager,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): UpdateRewardManagerEvent {
    return UpdateRewardManagerEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      rewardIndex: decodeFromJSONField('u64', field.rewardIndex),
      rewardManager: decodeFromJSONField('address', field.rewardManager),
    })
  }

  static fromJSON(json: Record<string, any>): UpdateRewardManagerEvent {
    if (json.$typeName !== UpdateRewardManagerEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return UpdateRewardManagerEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): UpdateRewardManagerEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isUpdateRewardManagerEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a UpdateRewardManagerEvent object`
      )
    }
    return UpdateRewardManagerEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<UpdateRewardManagerEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(
        `error fetching UpdateRewardManagerEvent object at id ${id}: ${res.error.code}`
      )
    }
    if (
      res.data?.bcs?.dataType !== 'moveObject' ||
      !isUpdateRewardManagerEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a UpdateRewardManagerEvent object`)
    }
    return UpdateRewardManagerEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== UpdateRewardEmissionsEvent =============================== */

export function isUpdateRewardEmissionsEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdateRewardEmissionsEvent'
  )
}

export interface UpdateRewardEmissionsEventFields {
  pool: ToField<ID>
  rewardIndex: ToField<'u64'>
  rewardVault: ToField<'address'>
  rewardManager: ToField<'address'>
  rewardEmissionsPerSecond: ToField<'u128'>
}

export type UpdateRewardEmissionsEventReified = Reified<
  UpdateRewardEmissionsEvent,
  UpdateRewardEmissionsEventFields
>

export class UpdateRewardEmissionsEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdateRewardEmissionsEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = UpdateRewardEmissionsEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdateRewardEmissionsEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly rewardIndex: ToField<'u64'>
  readonly rewardVault: ToField<'address'>
  readonly rewardManager: ToField<'address'>
  readonly rewardEmissionsPerSecond: ToField<'u128'>

  private constructor(typeArgs: [], fields: UpdateRewardEmissionsEventFields) {
    this.$fullTypeName = composeSuiType(
      UpdateRewardEmissionsEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdateRewardEmissionsEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.rewardIndex = fields.rewardIndex
    this.rewardVault = fields.rewardVault
    this.rewardManager = fields.rewardManager
    this.rewardEmissionsPerSecond = fields.rewardEmissionsPerSecond
  }

  static reified(): UpdateRewardEmissionsEventReified {
    return {
      typeName: UpdateRewardEmissionsEvent.$typeName,
      fullTypeName: composeSuiType(
        UpdateRewardEmissionsEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpdateRewardEmissionsEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UpdateRewardEmissionsEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        UpdateRewardEmissionsEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UpdateRewardEmissionsEvent.fromBcs(data),
      bcs: UpdateRewardEmissionsEvent.bcs,
      fromJSONField: (field: any) => UpdateRewardEmissionsEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UpdateRewardEmissionsEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        UpdateRewardEmissionsEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => UpdateRewardEmissionsEvent.fetch(client, id),
      new: (fields: UpdateRewardEmissionsEventFields) => {
        return new UpdateRewardEmissionsEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return UpdateRewardEmissionsEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<UpdateRewardEmissionsEvent>> {
    return phantom(UpdateRewardEmissionsEvent.reified())
  }
  static get p() {
    return UpdateRewardEmissionsEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('UpdateRewardEmissionsEvent', {
      pool: ID.bcs,
      reward_index: bcs.u64(),
      reward_vault: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      reward_manager: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      reward_emissions_per_second: bcs.u128(),
    })
  }

  static fromFields(fields: Record<string, any>): UpdateRewardEmissionsEvent {
    return UpdateRewardEmissionsEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      rewardIndex: decodeFromFields('u64', fields.reward_index),
      rewardVault: decodeFromFields('address', fields.reward_vault),
      rewardManager: decodeFromFields('address', fields.reward_manager),
      rewardEmissionsPerSecond: decodeFromFields('u128', fields.reward_emissions_per_second),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UpdateRewardEmissionsEvent {
    if (!isUpdateRewardEmissionsEvent(item.type)) {
      throw new Error('not a UpdateRewardEmissionsEvent type')
    }

    return UpdateRewardEmissionsEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      rewardIndex: decodeFromFieldsWithTypes('u64', item.fields.reward_index),
      rewardVault: decodeFromFieldsWithTypes('address', item.fields.reward_vault),
      rewardManager: decodeFromFieldsWithTypes('address', item.fields.reward_manager),
      rewardEmissionsPerSecond: decodeFromFieldsWithTypes(
        'u128',
        item.fields.reward_emissions_per_second
      ),
    })
  }

  static fromBcs(data: Uint8Array): UpdateRewardEmissionsEvent {
    return UpdateRewardEmissionsEvent.fromFields(UpdateRewardEmissionsEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      rewardIndex: this.rewardIndex.toString(),
      rewardVault: this.rewardVault,
      rewardManager: this.rewardManager,
      rewardEmissionsPerSecond: this.rewardEmissionsPerSecond.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): UpdateRewardEmissionsEvent {
    return UpdateRewardEmissionsEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      rewardIndex: decodeFromJSONField('u64', field.rewardIndex),
      rewardVault: decodeFromJSONField('address', field.rewardVault),
      rewardManager: decodeFromJSONField('address', field.rewardManager),
      rewardEmissionsPerSecond: decodeFromJSONField('u128', field.rewardEmissionsPerSecond),
    })
  }

  static fromJSON(json: Record<string, any>): UpdateRewardEmissionsEvent {
    if (json.$typeName !== UpdateRewardEmissionsEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return UpdateRewardEmissionsEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): UpdateRewardEmissionsEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isUpdateRewardEmissionsEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a UpdateRewardEmissionsEvent object`
      )
    }
    return UpdateRewardEmissionsEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<UpdateRewardEmissionsEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(
        `error fetching UpdateRewardEmissionsEvent object at id ${id}: ${res.error.code}`
      )
    }
    if (
      res.data?.bcs?.dataType !== 'moveObject' ||
      !isUpdateRewardEmissionsEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a UpdateRewardEmissionsEvent object`)
    }
    return UpdateRewardEmissionsEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== AddRewardEvent =============================== */

export function isAddRewardEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::AddRewardEvent'
  )
}

export interface AddRewardEventFields {
  pool: ToField<ID>
  rewardIndex: ToField<'u64'>
  rewardVault: ToField<'address'>
  rewardManager: ToField<'address'>
  amount: ToField<'u64'>
}

export type AddRewardEventReified = Reified<AddRewardEvent, AddRewardEventFields>

export class AddRewardEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::AddRewardEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = AddRewardEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::AddRewardEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly rewardIndex: ToField<'u64'>
  readonly rewardVault: ToField<'address'>
  readonly rewardManager: ToField<'address'>
  readonly amount: ToField<'u64'>

  private constructor(typeArgs: [], fields: AddRewardEventFields) {
    this.$fullTypeName = composeSuiType(
      AddRewardEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::AddRewardEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.rewardIndex = fields.rewardIndex
    this.rewardVault = fields.rewardVault
    this.rewardManager = fields.rewardManager
    this.amount = fields.amount
  }

  static reified(): AddRewardEventReified {
    return {
      typeName: AddRewardEvent.$typeName,
      fullTypeName: composeSuiType(
        AddRewardEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::AddRewardEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => AddRewardEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => AddRewardEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => AddRewardEvent.fromBcs(data),
      bcs: AddRewardEvent.bcs,
      fromJSONField: (field: any) => AddRewardEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => AddRewardEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => AddRewardEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => AddRewardEvent.fetch(client, id),
      new: (fields: AddRewardEventFields) => {
        return new AddRewardEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return AddRewardEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<AddRewardEvent>> {
    return phantom(AddRewardEvent.reified())
  }
  static get p() {
    return AddRewardEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('AddRewardEvent', {
      pool: ID.bcs,
      reward_index: bcs.u64(),
      reward_vault: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      reward_manager: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      amount: bcs.u64(),
    })
  }

  static fromFields(fields: Record<string, any>): AddRewardEvent {
    return AddRewardEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      rewardIndex: decodeFromFields('u64', fields.reward_index),
      rewardVault: decodeFromFields('address', fields.reward_vault),
      rewardManager: decodeFromFields('address', fields.reward_manager),
      amount: decodeFromFields('u64', fields.amount),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): AddRewardEvent {
    if (!isAddRewardEvent(item.type)) {
      throw new Error('not a AddRewardEvent type')
    }

    return AddRewardEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      rewardIndex: decodeFromFieldsWithTypes('u64', item.fields.reward_index),
      rewardVault: decodeFromFieldsWithTypes('address', item.fields.reward_vault),
      rewardManager: decodeFromFieldsWithTypes('address', item.fields.reward_manager),
      amount: decodeFromFieldsWithTypes('u64', item.fields.amount),
    })
  }

  static fromBcs(data: Uint8Array): AddRewardEvent {
    return AddRewardEvent.fromFields(AddRewardEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      rewardIndex: this.rewardIndex.toString(),
      rewardVault: this.rewardVault,
      rewardManager: this.rewardManager,
      amount: this.amount.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): AddRewardEvent {
    return AddRewardEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      rewardIndex: decodeFromJSONField('u64', field.rewardIndex),
      rewardVault: decodeFromJSONField('address', field.rewardVault),
      rewardManager: decodeFromJSONField('address', field.rewardManager),
      amount: decodeFromJSONField('u64', field.amount),
    })
  }

  static fromJSON(json: Record<string, any>): AddRewardEvent {
    if (json.$typeName !== AddRewardEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return AddRewardEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): AddRewardEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isAddRewardEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a AddRewardEvent object`)
    }
    return AddRewardEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<AddRewardEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching AddRewardEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isAddRewardEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a AddRewardEvent object`)
    }
    return AddRewardEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== RemoveRewardEvent =============================== */

export function isRemoveRewardEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::RemoveRewardEvent'
  )
}

export interface RemoveRewardEventFields {
  pool: ToField<ID>
  rewardIndex: ToField<'u64'>
  rewardVault: ToField<'address'>
  rewardManager: ToField<'address'>
  amount: ToField<'u64'>
  recipient: ToField<'address'>
}

export type RemoveRewardEventReified = Reified<RemoveRewardEvent, RemoveRewardEventFields>

export class RemoveRewardEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::RemoveRewardEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = RemoveRewardEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::RemoveRewardEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly rewardIndex: ToField<'u64'>
  readonly rewardVault: ToField<'address'>
  readonly rewardManager: ToField<'address'>
  readonly amount: ToField<'u64'>
  readonly recipient: ToField<'address'>

  private constructor(typeArgs: [], fields: RemoveRewardEventFields) {
    this.$fullTypeName = composeSuiType(
      RemoveRewardEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::RemoveRewardEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.rewardIndex = fields.rewardIndex
    this.rewardVault = fields.rewardVault
    this.rewardManager = fields.rewardManager
    this.amount = fields.amount
    this.recipient = fields.recipient
  }

  static reified(): RemoveRewardEventReified {
    return {
      typeName: RemoveRewardEvent.$typeName,
      fullTypeName: composeSuiType(
        RemoveRewardEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::RemoveRewardEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => RemoveRewardEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveRewardEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => RemoveRewardEvent.fromBcs(data),
      bcs: RemoveRewardEvent.bcs,
      fromJSONField: (field: any) => RemoveRewardEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => RemoveRewardEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => RemoveRewardEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => RemoveRewardEvent.fetch(client, id),
      new: (fields: RemoveRewardEventFields) => {
        return new RemoveRewardEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return RemoveRewardEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<RemoveRewardEvent>> {
    return phantom(RemoveRewardEvent.reified())
  }
  static get p() {
    return RemoveRewardEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('RemoveRewardEvent', {
      pool: ID.bcs,
      reward_index: bcs.u64(),
      reward_vault: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      reward_manager: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      amount: bcs.u64(),
      recipient: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
    })
  }

  static fromFields(fields: Record<string, any>): RemoveRewardEvent {
    return RemoveRewardEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      rewardIndex: decodeFromFields('u64', fields.reward_index),
      rewardVault: decodeFromFields('address', fields.reward_vault),
      rewardManager: decodeFromFields('address', fields.reward_manager),
      amount: decodeFromFields('u64', fields.amount),
      recipient: decodeFromFields('address', fields.recipient),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RemoveRewardEvent {
    if (!isRemoveRewardEvent(item.type)) {
      throw new Error('not a RemoveRewardEvent type')
    }

    return RemoveRewardEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      rewardIndex: decodeFromFieldsWithTypes('u64', item.fields.reward_index),
      rewardVault: decodeFromFieldsWithTypes('address', item.fields.reward_vault),
      rewardManager: decodeFromFieldsWithTypes('address', item.fields.reward_manager),
      amount: decodeFromFieldsWithTypes('u64', item.fields.amount),
      recipient: decodeFromFieldsWithTypes('address', item.fields.recipient),
    })
  }

  static fromBcs(data: Uint8Array): RemoveRewardEvent {
    return RemoveRewardEvent.fromFields(RemoveRewardEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      rewardIndex: this.rewardIndex.toString(),
      rewardVault: this.rewardVault,
      rewardManager: this.rewardManager,
      amount: this.amount.toString(),
      recipient: this.recipient,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): RemoveRewardEvent {
    return RemoveRewardEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      rewardIndex: decodeFromJSONField('u64', field.rewardIndex),
      rewardVault: decodeFromJSONField('address', field.rewardVault),
      rewardManager: decodeFromJSONField('address', field.rewardManager),
      amount: decodeFromJSONField('u64', field.amount),
      recipient: decodeFromJSONField('address', field.recipient),
    })
  }

  static fromJSON(json: Record<string, any>): RemoveRewardEvent {
    if (json.$typeName !== RemoveRewardEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return RemoveRewardEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): RemoveRewardEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isRemoveRewardEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a RemoveRewardEvent object`)
    }
    return RemoveRewardEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<RemoveRewardEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching RemoveRewardEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isRemoveRewardEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a RemoveRewardEvent object`)
    }
    return RemoveRewardEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== UpgradeEvent =============================== */

export function isUpgradeEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpgradeEvent'
  )
}

export interface UpgradeEventFields {
  oldVersion: ToField<'u64'>
  newVersion: ToField<'u64'>
}

export type UpgradeEventReified = Reified<UpgradeEvent, UpgradeEventFields>

export class UpgradeEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpgradeEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = UpgradeEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpgradeEvent'

  readonly $typeArgs: []

  readonly oldVersion: ToField<'u64'>
  readonly newVersion: ToField<'u64'>

  private constructor(typeArgs: [], fields: UpgradeEventFields) {
    this.$fullTypeName = composeSuiType(
      UpgradeEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpgradeEvent'
    this.$typeArgs = typeArgs

    this.oldVersion = fields.oldVersion
    this.newVersion = fields.newVersion
  }

  static reified(): UpgradeEventReified {
    return {
      typeName: UpgradeEvent.$typeName,
      fullTypeName: composeSuiType(
        UpgradeEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::UpgradeEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UpgradeEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UpgradeEvent.fromBcs(data),
      bcs: UpgradeEvent.bcs,
      fromJSONField: (field: any) => UpgradeEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UpgradeEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => UpgradeEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => UpgradeEvent.fetch(client, id),
      new: (fields: UpgradeEventFields) => {
        return new UpgradeEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return UpgradeEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<UpgradeEvent>> {
    return phantom(UpgradeEvent.reified())
  }
  static get p() {
    return UpgradeEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('UpgradeEvent', {
      old_version: bcs.u64(),
      new_version: bcs.u64(),
    })
  }

  static fromFields(fields: Record<string, any>): UpgradeEvent {
    return UpgradeEvent.reified().new({
      oldVersion: decodeFromFields('u64', fields.old_version),
      newVersion: decodeFromFields('u64', fields.new_version),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeEvent {
    if (!isUpgradeEvent(item.type)) {
      throw new Error('not a UpgradeEvent type')
    }

    return UpgradeEvent.reified().new({
      oldVersion: decodeFromFieldsWithTypes('u64', item.fields.old_version),
      newVersion: decodeFromFieldsWithTypes('u64', item.fields.new_version),
    })
  }

  static fromBcs(data: Uint8Array): UpgradeEvent {
    return UpgradeEvent.fromFields(UpgradeEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      oldVersion: this.oldVersion.toString(),
      newVersion: this.newVersion.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): UpgradeEvent {
    return UpgradeEvent.reified().new({
      oldVersion: decodeFromJSONField('u64', field.oldVersion),
      newVersion: decodeFromJSONField('u64', field.newVersion),
    })
  }

  static fromJSON(json: Record<string, any>): UpgradeEvent {
    if (json.$typeName !== UpgradeEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return UpgradeEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): UpgradeEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isUpgradeEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a UpgradeEvent object`)
    }
    return UpgradeEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<UpgradeEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching UpgradeEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isUpgradeEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a UpgradeEvent object`)
    }
    return UpgradeEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== MigratePositionEvent =============================== */

export function isMigratePositionEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0xfd358cfe77bc175d9472c152606109c9be8bdf7fbfdc94e9ba4103a54debe810::pool::MigratePositionEvent'
  )
}

export interface MigratePositionEventFields {
  pool: ToField<ID>
  oldKey: ToField<String>
  newKey: ToField<String>
}

export type MigratePositionEventReified = Reified<MigratePositionEvent, MigratePositionEventFields>

export class MigratePositionEvent implements StructClass {
  static readonly $typeName =
    '0xfd358cfe77bc175d9472c152606109c9be8bdf7fbfdc94e9ba4103a54debe810::pool::MigratePositionEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = MigratePositionEvent.$typeName

  readonly $fullTypeName: '0xfd358cfe77bc175d9472c152606109c9be8bdf7fbfdc94e9ba4103a54debe810::pool::MigratePositionEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly oldKey: ToField<String>
  readonly newKey: ToField<String>

  private constructor(typeArgs: [], fields: MigratePositionEventFields) {
    this.$fullTypeName = composeSuiType(
      MigratePositionEvent.$typeName,
      ...typeArgs
    ) as '0xfd358cfe77bc175d9472c152606109c9be8bdf7fbfdc94e9ba4103a54debe810::pool::MigratePositionEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.oldKey = fields.oldKey
    this.newKey = fields.newKey
  }

  static reified(): MigratePositionEventReified {
    return {
      typeName: MigratePositionEvent.$typeName,
      fullTypeName: composeSuiType(
        MigratePositionEvent.$typeName,
        ...[]
      ) as '0xfd358cfe77bc175d9472c152606109c9be8bdf7fbfdc94e9ba4103a54debe810::pool::MigratePositionEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => MigratePositionEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        MigratePositionEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => MigratePositionEvent.fromBcs(data),
      bcs: MigratePositionEvent.bcs,
      fromJSONField: (field: any) => MigratePositionEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => MigratePositionEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        MigratePositionEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => MigratePositionEvent.fetch(client, id),
      new: (fields: MigratePositionEventFields) => {
        return new MigratePositionEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return MigratePositionEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<MigratePositionEvent>> {
    return phantom(MigratePositionEvent.reified())
  }
  static get p() {
    return MigratePositionEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('MigratePositionEvent', {
      pool: ID.bcs,
      old_key: String.bcs,
      new_key: String.bcs,
    })
  }

  static fromFields(fields: Record<string, any>): MigratePositionEvent {
    return MigratePositionEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      oldKey: decodeFromFields(String.reified(), fields.old_key),
      newKey: decodeFromFields(String.reified(), fields.new_key),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): MigratePositionEvent {
    if (!isMigratePositionEvent(item.type)) {
      throw new Error('not a MigratePositionEvent type')
    }

    return MigratePositionEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      oldKey: decodeFromFieldsWithTypes(String.reified(), item.fields.old_key),
      newKey: decodeFromFieldsWithTypes(String.reified(), item.fields.new_key),
    })
  }

  static fromBcs(data: Uint8Array): MigratePositionEvent {
    return MigratePositionEvent.fromFields(MigratePositionEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      oldKey: this.oldKey,
      newKey: this.newKey,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): MigratePositionEvent {
    return MigratePositionEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      oldKey: decodeFromJSONField(String.reified(), field.oldKey),
      newKey: decodeFromJSONField(String.reified(), field.newKey),
    })
  }

  static fromJSON(json: Record<string, any>): MigratePositionEvent {
    if (json.$typeName !== MigratePositionEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return MigratePositionEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): MigratePositionEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isMigratePositionEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a MigratePositionEvent object`
      )
    }
    return MigratePositionEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<MigratePositionEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching MigratePositionEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isMigratePositionEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a MigratePositionEvent object`)
    }
    return MigratePositionEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== ModifyTickRewardEvent =============================== */

export function isModifyTickRewardEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0xfd358cfe77bc175d9472c152606109c9be8bdf7fbfdc94e9ba4103a54debe810::pool::ModifyTickRewardEvent'
  )
}

export interface ModifyTickRewardEventFields {
  pool: ToField<ID>
  oldReward: ToField<'u128'>
  newReward: ToField<'u128'>
}

export type ModifyTickRewardEventReified = Reified<
  ModifyTickRewardEvent,
  ModifyTickRewardEventFields
>

export class ModifyTickRewardEvent implements StructClass {
  static readonly $typeName =
    '0xfd358cfe77bc175d9472c152606109c9be8bdf7fbfdc94e9ba4103a54debe810::pool::ModifyTickRewardEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = ModifyTickRewardEvent.$typeName

  readonly $fullTypeName: '0xfd358cfe77bc175d9472c152606109c9be8bdf7fbfdc94e9ba4103a54debe810::pool::ModifyTickRewardEvent'

  readonly $typeArgs: []

  readonly pool: ToField<ID>
  readonly oldReward: ToField<'u128'>
  readonly newReward: ToField<'u128'>

  private constructor(typeArgs: [], fields: ModifyTickRewardEventFields) {
    this.$fullTypeName = composeSuiType(
      ModifyTickRewardEvent.$typeName,
      ...typeArgs
    ) as '0xfd358cfe77bc175d9472c152606109c9be8bdf7fbfdc94e9ba4103a54debe810::pool::ModifyTickRewardEvent'
    this.$typeArgs = typeArgs

    this.pool = fields.pool
    this.oldReward = fields.oldReward
    this.newReward = fields.newReward
  }

  static reified(): ModifyTickRewardEventReified {
    return {
      typeName: ModifyTickRewardEvent.$typeName,
      fullTypeName: composeSuiType(
        ModifyTickRewardEvent.$typeName,
        ...[]
      ) as '0xfd358cfe77bc175d9472c152606109c9be8bdf7fbfdc94e9ba4103a54debe810::pool::ModifyTickRewardEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ModifyTickRewardEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ModifyTickRewardEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ModifyTickRewardEvent.fromBcs(data),
      bcs: ModifyTickRewardEvent.bcs,
      fromJSONField: (field: any) => ModifyTickRewardEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ModifyTickRewardEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ModifyTickRewardEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => ModifyTickRewardEvent.fetch(client, id),
      new: (fields: ModifyTickRewardEventFields) => {
        return new ModifyTickRewardEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return ModifyTickRewardEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<ModifyTickRewardEvent>> {
    return phantom(ModifyTickRewardEvent.reified())
  }
  static get p() {
    return ModifyTickRewardEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('ModifyTickRewardEvent', {
      pool: ID.bcs,
      old_reward: bcs.u128(),
      new_reward: bcs.u128(),
    })
  }

  static fromFields(fields: Record<string, any>): ModifyTickRewardEvent {
    return ModifyTickRewardEvent.reified().new({
      pool: decodeFromFields(ID.reified(), fields.pool),
      oldReward: decodeFromFields('u128', fields.old_reward),
      newReward: decodeFromFields('u128', fields.new_reward),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ModifyTickRewardEvent {
    if (!isModifyTickRewardEvent(item.type)) {
      throw new Error('not a ModifyTickRewardEvent type')
    }

    return ModifyTickRewardEvent.reified().new({
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      oldReward: decodeFromFieldsWithTypes('u128', item.fields.old_reward),
      newReward: decodeFromFieldsWithTypes('u128', item.fields.new_reward),
    })
  }

  static fromBcs(data: Uint8Array): ModifyTickRewardEvent {
    return ModifyTickRewardEvent.fromFields(ModifyTickRewardEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      pool: this.pool,
      oldReward: this.oldReward.toString(),
      newReward: this.newReward.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): ModifyTickRewardEvent {
    return ModifyTickRewardEvent.reified().new({
      pool: decodeFromJSONField(ID.reified(), field.pool),
      oldReward: decodeFromJSONField('u128', field.oldReward),
      newReward: decodeFromJSONField('u128', field.newReward),
    })
  }

  static fromJSON(json: Record<string, any>): ModifyTickRewardEvent {
    if (json.$typeName !== ModifyTickRewardEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return ModifyTickRewardEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): ModifyTickRewardEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isModifyTickRewardEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ModifyTickRewardEvent object`
      )
    }
    return ModifyTickRewardEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<ModifyTickRewardEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching ModifyTickRewardEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isModifyTickRewardEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ModifyTickRewardEvent object`)
    }
    return ModifyTickRewardEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}
