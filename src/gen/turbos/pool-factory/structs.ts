import * as reified from '../../_framework/reified'
import { String } from '../../_dependencies/onchain/0x1/string/structs'
import { TypeName } from '../../_dependencies/onchain/0x1/type-name/structs'
import { ID, UID } from '../../_dependencies/onchain/0x2/object/structs'
import { Table } from '../../_dependencies/onchain/0x2/table/structs'
import { VecMap } from '../../_dependencies/onchain/0x2/vec-map/structs'
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
  ToTypeStr as ToPhantom,
} from '../../_framework/reified'
import { FieldsWithTypes, composeSuiType, compressSuiType } from '../../_framework/util'
import { bcs, fromB64, fromHEX, toHEX } from '@mysten/bcs'
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client'

/* ============================== PoolFactoryAdminCap =============================== */

export function isPoolFactoryAdminCap(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolFactoryAdminCap'
  )
}

export interface PoolFactoryAdminCapFields {
  id: ToField<UID>
}

export type PoolFactoryAdminCapReified = Reified<PoolFactoryAdminCap, PoolFactoryAdminCapFields>

export class PoolFactoryAdminCap implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolFactoryAdminCap'
  static readonly $numTypeParams = 0

  readonly $typeName = PoolFactoryAdminCap.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolFactoryAdminCap'

  readonly $typeArgs: []

  readonly id: ToField<UID>

  private constructor(typeArgs: [], fields: PoolFactoryAdminCapFields) {
    this.$fullTypeName = composeSuiType(
      PoolFactoryAdminCap.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolFactoryAdminCap'
    this.$typeArgs = typeArgs

    this.id = fields.id
  }

  static reified(): PoolFactoryAdminCapReified {
    return {
      typeName: PoolFactoryAdminCap.$typeName,
      fullTypeName: composeSuiType(
        PoolFactoryAdminCap.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolFactoryAdminCap',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PoolFactoryAdminCap.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PoolFactoryAdminCap.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolFactoryAdminCap.fromBcs(data),
      bcs: PoolFactoryAdminCap.bcs,
      fromJSONField: (field: any) => PoolFactoryAdminCap.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PoolFactoryAdminCap.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PoolFactoryAdminCap.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => PoolFactoryAdminCap.fetch(client, id),
      new: (fields: PoolFactoryAdminCapFields) => {
        return new PoolFactoryAdminCap([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return PoolFactoryAdminCap.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<PoolFactoryAdminCap>> {
    return phantom(PoolFactoryAdminCap.reified())
  }
  static get p() {
    return PoolFactoryAdminCap.phantom()
  }

  static get bcs() {
    return bcs.struct('PoolFactoryAdminCap', {
      id: UID.bcs,
    })
  }

  static fromFields(fields: Record<string, any>): PoolFactoryAdminCap {
    return PoolFactoryAdminCap.reified().new({ id: decodeFromFields(UID.reified(), fields.id) })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolFactoryAdminCap {
    if (!isPoolFactoryAdminCap(item.type)) {
      throw new Error('not a PoolFactoryAdminCap type')
    }

    return PoolFactoryAdminCap.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
    })
  }

  static fromBcs(data: Uint8Array): PoolFactoryAdminCap {
    return PoolFactoryAdminCap.fromFields(PoolFactoryAdminCap.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): PoolFactoryAdminCap {
    return PoolFactoryAdminCap.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) })
  }

  static fromJSON(json: Record<string, any>): PoolFactoryAdminCap {
    if (json.$typeName !== PoolFactoryAdminCap.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return PoolFactoryAdminCap.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): PoolFactoryAdminCap {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPoolFactoryAdminCap(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PoolFactoryAdminCap object`)
    }
    return PoolFactoryAdminCap.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<PoolFactoryAdminCap> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching PoolFactoryAdminCap object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPoolFactoryAdminCap(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PoolFactoryAdminCap object`)
    }
    return PoolFactoryAdminCap.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== PoolSimpleInfo =============================== */

export function isPoolSimpleInfo(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolSimpleInfo'
  )
}

export interface PoolSimpleInfoFields {
  poolId: ToField<ID>
  poolKey: ToField<ID>
  coinTypeA: ToField<TypeName>
  coinTypeB: ToField<TypeName>
  feeType: ToField<TypeName>
  fee: ToField<'u32'>
  tickSpacing: ToField<'u32'>
}

export type PoolSimpleInfoReified = Reified<PoolSimpleInfo, PoolSimpleInfoFields>

export class PoolSimpleInfo implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolSimpleInfo'
  static readonly $numTypeParams = 0

  readonly $typeName = PoolSimpleInfo.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolSimpleInfo'

  readonly $typeArgs: []

  readonly poolId: ToField<ID>
  readonly poolKey: ToField<ID>
  readonly coinTypeA: ToField<TypeName>
  readonly coinTypeB: ToField<TypeName>
  readonly feeType: ToField<TypeName>
  readonly fee: ToField<'u32'>
  readonly tickSpacing: ToField<'u32'>

  private constructor(typeArgs: [], fields: PoolSimpleInfoFields) {
    this.$fullTypeName = composeSuiType(
      PoolSimpleInfo.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolSimpleInfo'
    this.$typeArgs = typeArgs

    this.poolId = fields.poolId
    this.poolKey = fields.poolKey
    this.coinTypeA = fields.coinTypeA
    this.coinTypeB = fields.coinTypeB
    this.feeType = fields.feeType
    this.fee = fields.fee
    this.tickSpacing = fields.tickSpacing
  }

  static reified(): PoolSimpleInfoReified {
    return {
      typeName: PoolSimpleInfo.$typeName,
      fullTypeName: composeSuiType(
        PoolSimpleInfo.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolSimpleInfo',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PoolSimpleInfo.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PoolSimpleInfo.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolSimpleInfo.fromBcs(data),
      bcs: PoolSimpleInfo.bcs,
      fromJSONField: (field: any) => PoolSimpleInfo.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PoolSimpleInfo.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PoolSimpleInfo.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => PoolSimpleInfo.fetch(client, id),
      new: (fields: PoolSimpleInfoFields) => {
        return new PoolSimpleInfo([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return PoolSimpleInfo.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<PoolSimpleInfo>> {
    return phantom(PoolSimpleInfo.reified())
  }
  static get p() {
    return PoolSimpleInfo.phantom()
  }

  static get bcs() {
    return bcs.struct('PoolSimpleInfo', {
      pool_id: ID.bcs,
      pool_key: ID.bcs,
      coin_type_a: TypeName.bcs,
      coin_type_b: TypeName.bcs,
      fee_type: TypeName.bcs,
      fee: bcs.u32(),
      tick_spacing: bcs.u32(),
    })
  }

  static fromFields(fields: Record<string, any>): PoolSimpleInfo {
    return PoolSimpleInfo.reified().new({
      poolId: decodeFromFields(ID.reified(), fields.pool_id),
      poolKey: decodeFromFields(ID.reified(), fields.pool_key),
      coinTypeA: decodeFromFields(TypeName.reified(), fields.coin_type_a),
      coinTypeB: decodeFromFields(TypeName.reified(), fields.coin_type_b),
      feeType: decodeFromFields(TypeName.reified(), fields.fee_type),
      fee: decodeFromFields('u32', fields.fee),
      tickSpacing: decodeFromFields('u32', fields.tick_spacing),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolSimpleInfo {
    if (!isPoolSimpleInfo(item.type)) {
      throw new Error('not a PoolSimpleInfo type')
    }

    return PoolSimpleInfo.reified().new({
      poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id),
      poolKey: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_key),
      coinTypeA: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type_a),
      coinTypeB: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type_b),
      feeType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.fee_type),
      fee: decodeFromFieldsWithTypes('u32', item.fields.fee),
      tickSpacing: decodeFromFieldsWithTypes('u32', item.fields.tick_spacing),
    })
  }

  static fromBcs(data: Uint8Array): PoolSimpleInfo {
    return PoolSimpleInfo.fromFields(PoolSimpleInfo.bcs.parse(data))
  }

  toJSONField() {
    return {
      poolId: this.poolId,
      poolKey: this.poolKey,
      coinTypeA: this.coinTypeA.toJSONField(),
      coinTypeB: this.coinTypeB.toJSONField(),
      feeType: this.feeType.toJSONField(),
      fee: this.fee,
      tickSpacing: this.tickSpacing,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): PoolSimpleInfo {
    return PoolSimpleInfo.reified().new({
      poolId: decodeFromJSONField(ID.reified(), field.poolId),
      poolKey: decodeFromJSONField(ID.reified(), field.poolKey),
      coinTypeA: decodeFromJSONField(TypeName.reified(), field.coinTypeA),
      coinTypeB: decodeFromJSONField(TypeName.reified(), field.coinTypeB),
      feeType: decodeFromJSONField(TypeName.reified(), field.feeType),
      fee: decodeFromJSONField('u32', field.fee),
      tickSpacing: decodeFromJSONField('u32', field.tickSpacing),
    })
  }

  static fromJSON(json: Record<string, any>): PoolSimpleInfo {
    if (json.$typeName !== PoolSimpleInfo.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return PoolSimpleInfo.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): PoolSimpleInfo {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPoolSimpleInfo(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PoolSimpleInfo object`)
    }
    return PoolSimpleInfo.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<PoolSimpleInfo> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching PoolSimpleInfo object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPoolSimpleInfo(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PoolSimpleInfo object`)
    }
    return PoolSimpleInfo.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== PoolConfig =============================== */

export function isPoolConfig(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolConfig'
  )
}

export interface PoolConfigFields {
  id: ToField<UID>
  feeMap: ToField<VecMap<String, ID>>
  feeProtocol: ToField<'u32'>
  pools: ToField<Table<ToPhantom<ID>, ToPhantom<PoolSimpleInfo>>>
}

export type PoolConfigReified = Reified<PoolConfig, PoolConfigFields>

export class PoolConfig implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolConfig'
  static readonly $numTypeParams = 0

  readonly $typeName = PoolConfig.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolConfig'

  readonly $typeArgs: []

  readonly id: ToField<UID>
  readonly feeMap: ToField<VecMap<String, ID>>
  readonly feeProtocol: ToField<'u32'>
  readonly pools: ToField<Table<ToPhantom<ID>, ToPhantom<PoolSimpleInfo>>>

  private constructor(typeArgs: [], fields: PoolConfigFields) {
    this.$fullTypeName = composeSuiType(
      PoolConfig.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolConfig'
    this.$typeArgs = typeArgs

    this.id = fields.id
    this.feeMap = fields.feeMap
    this.feeProtocol = fields.feeProtocol
    this.pools = fields.pools
  }

  static reified(): PoolConfigReified {
    return {
      typeName: PoolConfig.$typeName,
      fullTypeName: composeSuiType(
        PoolConfig.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolConfig',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PoolConfig.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PoolConfig.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolConfig.fromBcs(data),
      bcs: PoolConfig.bcs,
      fromJSONField: (field: any) => PoolConfig.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PoolConfig.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PoolConfig.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => PoolConfig.fetch(client, id),
      new: (fields: PoolConfigFields) => {
        return new PoolConfig([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return PoolConfig.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<PoolConfig>> {
    return phantom(PoolConfig.reified())
  }
  static get p() {
    return PoolConfig.phantom()
  }

  static get bcs() {
    return bcs.struct('PoolConfig', {
      id: UID.bcs,
      fee_map: VecMap.bcs(String.bcs, ID.bcs),
      fee_protocol: bcs.u32(),
      pools: Table.bcs,
    })
  }

  static fromFields(fields: Record<string, any>): PoolConfig {
    return PoolConfig.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      feeMap: decodeFromFields(VecMap.reified(String.reified(), ID.reified()), fields.fee_map),
      feeProtocol: decodeFromFields('u32', fields.fee_protocol),
      pools: decodeFromFields(
        Table.reified(reified.phantom(ID.reified()), reified.phantom(PoolSimpleInfo.reified())),
        fields.pools
      ),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolConfig {
    if (!isPoolConfig(item.type)) {
      throw new Error('not a PoolConfig type')
    }

    return PoolConfig.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      feeMap: decodeFromFieldsWithTypes(
        VecMap.reified(String.reified(), ID.reified()),
        item.fields.fee_map
      ),
      feeProtocol: decodeFromFieldsWithTypes('u32', item.fields.fee_protocol),
      pools: decodeFromFieldsWithTypes(
        Table.reified(reified.phantom(ID.reified()), reified.phantom(PoolSimpleInfo.reified())),
        item.fields.pools
      ),
    })
  }

  static fromBcs(data: Uint8Array): PoolConfig {
    return PoolConfig.fromFields(PoolConfig.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
      feeMap: this.feeMap.toJSONField(),
      feeProtocol: this.feeProtocol,
      pools: this.pools.toJSONField(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): PoolConfig {
    return PoolConfig.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      feeMap: decodeFromJSONField(VecMap.reified(String.reified(), ID.reified()), field.feeMap),
      feeProtocol: decodeFromJSONField('u32', field.feeProtocol),
      pools: decodeFromJSONField(
        Table.reified(reified.phantom(ID.reified()), reified.phantom(PoolSimpleInfo.reified())),
        field.pools
      ),
    })
  }

  static fromJSON(json: Record<string, any>): PoolConfig {
    if (json.$typeName !== PoolConfig.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return PoolConfig.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): PoolConfig {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPoolConfig(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PoolConfig object`)
    }
    return PoolConfig.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<PoolConfig> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching PoolConfig object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPoolConfig(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PoolConfig object`)
    }
    return PoolConfig.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== PoolCreatedEvent =============================== */

export function isPoolCreatedEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolCreatedEvent'
  )
}

export interface PoolCreatedEventFields {
  account: ToField<'address'>
  pool: ToField<ID>
  fee: ToField<'u32'>
  tickSpacing: ToField<'u32'>
  feeProtocol: ToField<'u32'>
  sqrtPrice: ToField<'u128'>
}

export type PoolCreatedEventReified = Reified<PoolCreatedEvent, PoolCreatedEventFields>

export class PoolCreatedEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolCreatedEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = PoolCreatedEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolCreatedEvent'

  readonly $typeArgs: []

  readonly account: ToField<'address'>
  readonly pool: ToField<ID>
  readonly fee: ToField<'u32'>
  readonly tickSpacing: ToField<'u32'>
  readonly feeProtocol: ToField<'u32'>
  readonly sqrtPrice: ToField<'u128'>

  private constructor(typeArgs: [], fields: PoolCreatedEventFields) {
    this.$fullTypeName = composeSuiType(
      PoolCreatedEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolCreatedEvent'
    this.$typeArgs = typeArgs

    this.account = fields.account
    this.pool = fields.pool
    this.fee = fields.fee
    this.tickSpacing = fields.tickSpacing
    this.feeProtocol = fields.feeProtocol
    this.sqrtPrice = fields.sqrtPrice
  }

  static reified(): PoolCreatedEventReified {
    return {
      typeName: PoolCreatedEvent.$typeName,
      fullTypeName: composeSuiType(
        PoolCreatedEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::PoolCreatedEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PoolCreatedEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PoolCreatedEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolCreatedEvent.fromBcs(data),
      bcs: PoolCreatedEvent.bcs,
      fromJSONField: (field: any) => PoolCreatedEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PoolCreatedEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PoolCreatedEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => PoolCreatedEvent.fetch(client, id),
      new: (fields: PoolCreatedEventFields) => {
        return new PoolCreatedEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return PoolCreatedEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<PoolCreatedEvent>> {
    return phantom(PoolCreatedEvent.reified())
  }
  static get p() {
    return PoolCreatedEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('PoolCreatedEvent', {
      account: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      pool: ID.bcs,
      fee: bcs.u32(),
      tick_spacing: bcs.u32(),
      fee_protocol: bcs.u32(),
      sqrt_price: bcs.u128(),
    })
  }

  static fromFields(fields: Record<string, any>): PoolCreatedEvent {
    return PoolCreatedEvent.reified().new({
      account: decodeFromFields('address', fields.account),
      pool: decodeFromFields(ID.reified(), fields.pool),
      fee: decodeFromFields('u32', fields.fee),
      tickSpacing: decodeFromFields('u32', fields.tick_spacing),
      feeProtocol: decodeFromFields('u32', fields.fee_protocol),
      sqrtPrice: decodeFromFields('u128', fields.sqrt_price),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolCreatedEvent {
    if (!isPoolCreatedEvent(item.type)) {
      throw new Error('not a PoolCreatedEvent type')
    }

    return PoolCreatedEvent.reified().new({
      account: decodeFromFieldsWithTypes('address', item.fields.account),
      pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool),
      fee: decodeFromFieldsWithTypes('u32', item.fields.fee),
      tickSpacing: decodeFromFieldsWithTypes('u32', item.fields.tick_spacing),
      feeProtocol: decodeFromFieldsWithTypes('u32', item.fields.fee_protocol),
      sqrtPrice: decodeFromFieldsWithTypes('u128', item.fields.sqrt_price),
    })
  }

  static fromBcs(data: Uint8Array): PoolCreatedEvent {
    return PoolCreatedEvent.fromFields(PoolCreatedEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      account: this.account,
      pool: this.pool,
      fee: this.fee,
      tickSpacing: this.tickSpacing,
      feeProtocol: this.feeProtocol,
      sqrtPrice: this.sqrtPrice.toString(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): PoolCreatedEvent {
    return PoolCreatedEvent.reified().new({
      account: decodeFromJSONField('address', field.account),
      pool: decodeFromJSONField(ID.reified(), field.pool),
      fee: decodeFromJSONField('u32', field.fee),
      tickSpacing: decodeFromJSONField('u32', field.tickSpacing),
      feeProtocol: decodeFromJSONField('u32', field.feeProtocol),
      sqrtPrice: decodeFromJSONField('u128', field.sqrtPrice),
    })
  }

  static fromJSON(json: Record<string, any>): PoolCreatedEvent {
    if (json.$typeName !== PoolCreatedEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return PoolCreatedEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): PoolCreatedEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPoolCreatedEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PoolCreatedEvent object`)
    }
    return PoolCreatedEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<PoolCreatedEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching PoolCreatedEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPoolCreatedEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PoolCreatedEvent object`)
    }
    return PoolCreatedEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== FeeAmountEnabledEvent =============================== */

export function isFeeAmountEnabledEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::FeeAmountEnabledEvent'
  )
}

export interface FeeAmountEnabledEventFields {
  fee: ToField<'u32'>
  tickSpacing: ToField<'u32'>
}

export type FeeAmountEnabledEventReified = Reified<
  FeeAmountEnabledEvent,
  FeeAmountEnabledEventFields
>

export class FeeAmountEnabledEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::FeeAmountEnabledEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = FeeAmountEnabledEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::FeeAmountEnabledEvent'

  readonly $typeArgs: []

  readonly fee: ToField<'u32'>
  readonly tickSpacing: ToField<'u32'>

  private constructor(typeArgs: [], fields: FeeAmountEnabledEventFields) {
    this.$fullTypeName = composeSuiType(
      FeeAmountEnabledEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::FeeAmountEnabledEvent'
    this.$typeArgs = typeArgs

    this.fee = fields.fee
    this.tickSpacing = fields.tickSpacing
  }

  static reified(): FeeAmountEnabledEventReified {
    return {
      typeName: FeeAmountEnabledEvent.$typeName,
      fullTypeName: composeSuiType(
        FeeAmountEnabledEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::FeeAmountEnabledEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FeeAmountEnabledEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        FeeAmountEnabledEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FeeAmountEnabledEvent.fromBcs(data),
      bcs: FeeAmountEnabledEvent.bcs,
      fromJSONField: (field: any) => FeeAmountEnabledEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FeeAmountEnabledEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        FeeAmountEnabledEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => FeeAmountEnabledEvent.fetch(client, id),
      new: (fields: FeeAmountEnabledEventFields) => {
        return new FeeAmountEnabledEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return FeeAmountEnabledEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<FeeAmountEnabledEvent>> {
    return phantom(FeeAmountEnabledEvent.reified())
  }
  static get p() {
    return FeeAmountEnabledEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('FeeAmountEnabledEvent', {
      fee: bcs.u32(),
      tick_spacing: bcs.u32(),
    })
  }

  static fromFields(fields: Record<string, any>): FeeAmountEnabledEvent {
    return FeeAmountEnabledEvent.reified().new({
      fee: decodeFromFields('u32', fields.fee),
      tickSpacing: decodeFromFields('u32', fields.tick_spacing),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FeeAmountEnabledEvent {
    if (!isFeeAmountEnabledEvent(item.type)) {
      throw new Error('not a FeeAmountEnabledEvent type')
    }

    return FeeAmountEnabledEvent.reified().new({
      fee: decodeFromFieldsWithTypes('u32', item.fields.fee),
      tickSpacing: decodeFromFieldsWithTypes('u32', item.fields.tick_spacing),
    })
  }

  static fromBcs(data: Uint8Array): FeeAmountEnabledEvent {
    return FeeAmountEnabledEvent.fromFields(FeeAmountEnabledEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      fee: this.fee,
      tickSpacing: this.tickSpacing,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): FeeAmountEnabledEvent {
    return FeeAmountEnabledEvent.reified().new({
      fee: decodeFromJSONField('u32', field.fee),
      tickSpacing: decodeFromJSONField('u32', field.tickSpacing),
    })
  }

  static fromJSON(json: Record<string, any>): FeeAmountEnabledEvent {
    if (json.$typeName !== FeeAmountEnabledEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return FeeAmountEnabledEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): FeeAmountEnabledEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isFeeAmountEnabledEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a FeeAmountEnabledEvent object`
      )
    }
    return FeeAmountEnabledEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<FeeAmountEnabledEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching FeeAmountEnabledEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isFeeAmountEnabledEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a FeeAmountEnabledEvent object`)
    }
    return FeeAmountEnabledEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== SetFeeProtocolEvent =============================== */

export function isSetFeeProtocolEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::SetFeeProtocolEvent'
  )
}

export interface SetFeeProtocolEventFields {
  feeProtocol: ToField<'u32'>
}

export type SetFeeProtocolEventReified = Reified<SetFeeProtocolEvent, SetFeeProtocolEventFields>

export class SetFeeProtocolEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::SetFeeProtocolEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = SetFeeProtocolEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::SetFeeProtocolEvent'

  readonly $typeArgs: []

  readonly feeProtocol: ToField<'u32'>

  private constructor(typeArgs: [], fields: SetFeeProtocolEventFields) {
    this.$fullTypeName = composeSuiType(
      SetFeeProtocolEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::SetFeeProtocolEvent'
    this.$typeArgs = typeArgs

    this.feeProtocol = fields.feeProtocol
  }

  static reified(): SetFeeProtocolEventReified {
    return {
      typeName: SetFeeProtocolEvent.$typeName,
      fullTypeName: composeSuiType(
        SetFeeProtocolEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool_factory::SetFeeProtocolEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => SetFeeProtocolEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => SetFeeProtocolEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => SetFeeProtocolEvent.fromBcs(data),
      bcs: SetFeeProtocolEvent.bcs,
      fromJSONField: (field: any) => SetFeeProtocolEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => SetFeeProtocolEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => SetFeeProtocolEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => SetFeeProtocolEvent.fetch(client, id),
      new: (fields: SetFeeProtocolEventFields) => {
        return new SetFeeProtocolEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return SetFeeProtocolEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<SetFeeProtocolEvent>> {
    return phantom(SetFeeProtocolEvent.reified())
  }
  static get p() {
    return SetFeeProtocolEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('SetFeeProtocolEvent', {
      fee_protocol: bcs.u32(),
    })
  }

  static fromFields(fields: Record<string, any>): SetFeeProtocolEvent {
    return SetFeeProtocolEvent.reified().new({
      feeProtocol: decodeFromFields('u32', fields.fee_protocol),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): SetFeeProtocolEvent {
    if (!isSetFeeProtocolEvent(item.type)) {
      throw new Error('not a SetFeeProtocolEvent type')
    }

    return SetFeeProtocolEvent.reified().new({
      feeProtocol: decodeFromFieldsWithTypes('u32', item.fields.fee_protocol),
    })
  }

  static fromBcs(data: Uint8Array): SetFeeProtocolEvent {
    return SetFeeProtocolEvent.fromFields(SetFeeProtocolEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      feeProtocol: this.feeProtocol,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): SetFeeProtocolEvent {
    return SetFeeProtocolEvent.reified().new({
      feeProtocol: decodeFromJSONField('u32', field.feeProtocol),
    })
  }

  static fromJSON(json: Record<string, any>): SetFeeProtocolEvent {
    if (json.$typeName !== SetFeeProtocolEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return SetFeeProtocolEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): SetFeeProtocolEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isSetFeeProtocolEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a SetFeeProtocolEvent object`)
    }
    return SetFeeProtocolEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<SetFeeProtocolEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching SetFeeProtocolEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isSetFeeProtocolEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a SetFeeProtocolEvent object`)
    }
    return SetFeeProtocolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}
