import { String } from '../../_dependencies/onchain/0x1/string/structs'
import { TypeName } from '../../_dependencies/onchain/0x1/type-name/structs'
import { ID, UID } from '../../_dependencies/onchain/0x2/object/structs'
import { Url } from '../../_dependencies/onchain/0x2/url/structs'
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
} from '../../_framework/reified'
import { FieldsWithTypes, composeSuiType, compressSuiType } from '../../_framework/util'
import { bcs, fromB64, fromHEX, toHEX } from '@mysten/bcs'
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client'

/* ============================== TurbosPositionNFT =============================== */

export function isTurbosPositionNFT(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::TurbosPositionNFT'
  )
}

export interface TurbosPositionNFTFields {
  id: ToField<UID>
  name: ToField<String>
  description: ToField<String>
  imgUrl: ToField<Url>
  poolId: ToField<ID>
  positionId: ToField<ID>
  coinTypeA: ToField<TypeName>
  coinTypeB: ToField<TypeName>
  feeType: ToField<TypeName>
}

export type TurbosPositionNFTReified = Reified<TurbosPositionNFT, TurbosPositionNFTFields>

export class TurbosPositionNFT implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::TurbosPositionNFT'
  static readonly $numTypeParams = 0

  readonly $typeName = TurbosPositionNFT.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::TurbosPositionNFT'

  readonly $typeArgs: []

  readonly id: ToField<UID>
  readonly name: ToField<String>
  readonly description: ToField<String>
  readonly imgUrl: ToField<Url>
  readonly poolId: ToField<ID>
  readonly positionId: ToField<ID>
  readonly coinTypeA: ToField<TypeName>
  readonly coinTypeB: ToField<TypeName>
  readonly feeType: ToField<TypeName>

  private constructor(typeArgs: [], fields: TurbosPositionNFTFields) {
    this.$fullTypeName = composeSuiType(
      TurbosPositionNFT.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::TurbosPositionNFT'
    this.$typeArgs = typeArgs

    this.id = fields.id
    this.name = fields.name
    this.description = fields.description
    this.imgUrl = fields.imgUrl
    this.poolId = fields.poolId
    this.positionId = fields.positionId
    this.coinTypeA = fields.coinTypeA
    this.coinTypeB = fields.coinTypeB
    this.feeType = fields.feeType
  }

  static reified(): TurbosPositionNFTReified {
    return {
      typeName: TurbosPositionNFT.$typeName,
      fullTypeName: composeSuiType(
        TurbosPositionNFT.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::TurbosPositionNFT',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => TurbosPositionNFT.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => TurbosPositionNFT.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => TurbosPositionNFT.fromBcs(data),
      bcs: TurbosPositionNFT.bcs,
      fromJSONField: (field: any) => TurbosPositionNFT.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => TurbosPositionNFT.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => TurbosPositionNFT.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => TurbosPositionNFT.fetch(client, id),
      new: (fields: TurbosPositionNFTFields) => {
        return new TurbosPositionNFT([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return TurbosPositionNFT.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<TurbosPositionNFT>> {
    return phantom(TurbosPositionNFT.reified())
  }
  static get p() {
    return TurbosPositionNFT.phantom()
  }

  static get bcs() {
    return bcs.struct('TurbosPositionNFT', {
      id: UID.bcs,
      name: String.bcs,
      description: String.bcs,
      img_url: Url.bcs,
      pool_id: ID.bcs,
      position_id: ID.bcs,
      coin_type_a: TypeName.bcs,
      coin_type_b: TypeName.bcs,
      fee_type: TypeName.bcs,
    })
  }

  static fromFields(fields: Record<string, any>): TurbosPositionNFT {
    return TurbosPositionNFT.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      name: decodeFromFields(String.reified(), fields.name),
      description: decodeFromFields(String.reified(), fields.description),
      imgUrl: decodeFromFields(Url.reified(), fields.img_url),
      poolId: decodeFromFields(ID.reified(), fields.pool_id),
      positionId: decodeFromFields(ID.reified(), fields.position_id),
      coinTypeA: decodeFromFields(TypeName.reified(), fields.coin_type_a),
      coinTypeB: decodeFromFields(TypeName.reified(), fields.coin_type_b),
      feeType: decodeFromFields(TypeName.reified(), fields.fee_type),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): TurbosPositionNFT {
    if (!isTurbosPositionNFT(item.type)) {
      throw new Error('not a TurbosPositionNFT type')
    }

    return TurbosPositionNFT.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      name: decodeFromFieldsWithTypes(String.reified(), item.fields.name),
      description: decodeFromFieldsWithTypes(String.reified(), item.fields.description),
      imgUrl: decodeFromFieldsWithTypes(Url.reified(), item.fields.img_url),
      poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id),
      positionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.position_id),
      coinTypeA: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type_a),
      coinTypeB: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type_b),
      feeType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.fee_type),
    })
  }

  static fromBcs(data: Uint8Array): TurbosPositionNFT {
    return TurbosPositionNFT.fromFields(TurbosPositionNFT.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      imgUrl: this.imgUrl,
      poolId: this.poolId,
      positionId: this.positionId,
      coinTypeA: this.coinTypeA.toJSONField(),
      coinTypeB: this.coinTypeB.toJSONField(),
      feeType: this.feeType.toJSONField(),
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): TurbosPositionNFT {
    return TurbosPositionNFT.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      name: decodeFromJSONField(String.reified(), field.name),
      description: decodeFromJSONField(String.reified(), field.description),
      imgUrl: decodeFromJSONField(Url.reified(), field.imgUrl),
      poolId: decodeFromJSONField(ID.reified(), field.poolId),
      positionId: decodeFromJSONField(ID.reified(), field.positionId),
      coinTypeA: decodeFromJSONField(TypeName.reified(), field.coinTypeA),
      coinTypeB: decodeFromJSONField(TypeName.reified(), field.coinTypeB),
      feeType: decodeFromJSONField(TypeName.reified(), field.feeType),
    })
  }

  static fromJSON(json: Record<string, any>): TurbosPositionNFT {
    if (json.$typeName !== TurbosPositionNFT.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return TurbosPositionNFT.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): TurbosPositionNFT {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isTurbosPositionNFT(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a TurbosPositionNFT object`)
    }
    return TurbosPositionNFT.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<TurbosPositionNFT> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching TurbosPositionNFT object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isTurbosPositionNFT(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a TurbosPositionNFT object`)
    }
    return TurbosPositionNFT.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== POSITION_NFT =============================== */

export function isPOSITION_NFT(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::POSITION_NFT'
  )
}

export interface POSITION_NFTFields {
  dummyField: ToField<'bool'>
}

export type POSITION_NFTReified = Reified<POSITION_NFT, POSITION_NFTFields>

export class POSITION_NFT implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::POSITION_NFT'
  static readonly $numTypeParams = 0

  readonly $typeName = POSITION_NFT.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::POSITION_NFT'

  readonly $typeArgs: []

  readonly dummyField: ToField<'bool'>

  private constructor(typeArgs: [], fields: POSITION_NFTFields) {
    this.$fullTypeName = composeSuiType(
      POSITION_NFT.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::POSITION_NFT'
    this.$typeArgs = typeArgs

    this.dummyField = fields.dummyField
  }

  static reified(): POSITION_NFTReified {
    return {
      typeName: POSITION_NFT.$typeName,
      fullTypeName: composeSuiType(
        POSITION_NFT.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::POSITION_NFT',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => POSITION_NFT.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => POSITION_NFT.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => POSITION_NFT.fromBcs(data),
      bcs: POSITION_NFT.bcs,
      fromJSONField: (field: any) => POSITION_NFT.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => POSITION_NFT.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => POSITION_NFT.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => POSITION_NFT.fetch(client, id),
      new: (fields: POSITION_NFTFields) => {
        return new POSITION_NFT([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return POSITION_NFT.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<POSITION_NFT>> {
    return phantom(POSITION_NFT.reified())
  }
  static get p() {
    return POSITION_NFT.phantom()
  }

  static get bcs() {
    return bcs.struct('POSITION_NFT', {
      dummy_field: bcs.bool(),
    })
  }

  static fromFields(fields: Record<string, any>): POSITION_NFT {
    return POSITION_NFT.reified().new({ dummyField: decodeFromFields('bool', fields.dummy_field) })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): POSITION_NFT {
    if (!isPOSITION_NFT(item.type)) {
      throw new Error('not a POSITION_NFT type')
    }

    return POSITION_NFT.reified().new({
      dummyField: decodeFromFieldsWithTypes('bool', item.fields.dummy_field),
    })
  }

  static fromBcs(data: Uint8Array): POSITION_NFT {
    return POSITION_NFT.fromFields(POSITION_NFT.bcs.parse(data))
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): POSITION_NFT {
    return POSITION_NFT.reified().new({ dummyField: decodeFromJSONField('bool', field.dummyField) })
  }

  static fromJSON(json: Record<string, any>): POSITION_NFT {
    if (json.$typeName !== POSITION_NFT.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return POSITION_NFT.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): POSITION_NFT {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isPOSITION_NFT(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a POSITION_NFT object`)
    }
    return POSITION_NFT.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<POSITION_NFT> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching POSITION_NFT object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isPOSITION_NFT(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a POSITION_NFT object`)
    }
    return POSITION_NFT.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}

/* ============================== MintNFTEvent =============================== */

export function isMintNFTEvent(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::MintNFTEvent'
  )
}

export interface MintNFTEventFields {
  objectId: ToField<ID>
  creator: ToField<'address'>
  name: ToField<String>
}

export type MintNFTEventReified = Reified<MintNFTEvent, MintNFTEventFields>

export class MintNFTEvent implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::MintNFTEvent'
  static readonly $numTypeParams = 0

  readonly $typeName = MintNFTEvent.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::MintNFTEvent'

  readonly $typeArgs: []

  readonly objectId: ToField<ID>
  readonly creator: ToField<'address'>
  readonly name: ToField<String>

  private constructor(typeArgs: [], fields: MintNFTEventFields) {
    this.$fullTypeName = composeSuiType(
      MintNFTEvent.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::MintNFTEvent'
    this.$typeArgs = typeArgs

    this.objectId = fields.objectId
    this.creator = fields.creator
    this.name = fields.name
  }

  static reified(): MintNFTEventReified {
    return {
      typeName: MintNFTEvent.$typeName,
      fullTypeName: composeSuiType(
        MintNFTEvent.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::position_nft::MintNFTEvent',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => MintNFTEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => MintNFTEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => MintNFTEvent.fromBcs(data),
      bcs: MintNFTEvent.bcs,
      fromJSONField: (field: any) => MintNFTEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => MintNFTEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => MintNFTEvent.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => MintNFTEvent.fetch(client, id),
      new: (fields: MintNFTEventFields) => {
        return new MintNFTEvent([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return MintNFTEvent.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<MintNFTEvent>> {
    return phantom(MintNFTEvent.reified())
  }
  static get p() {
    return MintNFTEvent.phantom()
  }

  static get bcs() {
    return bcs.struct('MintNFTEvent', {
      object_id: ID.bcs,
      creator: bcs.bytes(32).transform({
        input: (val: string) => fromHEX(val),
        output: (val: Uint8Array) => toHEX(val),
      }),
      name: String.bcs,
    })
  }

  static fromFields(fields: Record<string, any>): MintNFTEvent {
    return MintNFTEvent.reified().new({
      objectId: decodeFromFields(ID.reified(), fields.object_id),
      creator: decodeFromFields('address', fields.creator),
      name: decodeFromFields(String.reified(), fields.name),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): MintNFTEvent {
    if (!isMintNFTEvent(item.type)) {
      throw new Error('not a MintNFTEvent type')
    }

    return MintNFTEvent.reified().new({
      objectId: decodeFromFieldsWithTypes(ID.reified(), item.fields.object_id),
      creator: decodeFromFieldsWithTypes('address', item.fields.creator),
      name: decodeFromFieldsWithTypes(String.reified(), item.fields.name),
    })
  }

  static fromBcs(data: Uint8Array): MintNFTEvent {
    return MintNFTEvent.fromFields(MintNFTEvent.bcs.parse(data))
  }

  toJSONField() {
    return {
      objectId: this.objectId,
      creator: this.creator,
      name: this.name,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): MintNFTEvent {
    return MintNFTEvent.reified().new({
      objectId: decodeFromJSONField(ID.reified(), field.objectId),
      creator: decodeFromJSONField('address', field.creator),
      name: decodeFromJSONField(String.reified(), field.name),
    })
  }

  static fromJSON(json: Record<string, any>): MintNFTEvent {
    if (json.$typeName !== MintNFTEvent.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return MintNFTEvent.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): MintNFTEvent {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isMintNFTEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a MintNFTEvent object`)
    }
    return MintNFTEvent.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<MintNFTEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching MintNFTEvent object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isMintNFTEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a MintNFTEvent object`)
    }
    return MintNFTEvent.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}
