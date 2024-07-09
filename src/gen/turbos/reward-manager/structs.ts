import { UID } from '../../_dependencies/onchain/0x2/object/structs'
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
import { bcs, fromB64 } from '@mysten/bcs'
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client'

/* ============================== RewardManagerAdminCap =============================== */

export function isRewardManagerAdminCap(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::reward_manager::RewardManagerAdminCap'
  )
}

export interface RewardManagerAdminCapFields {
  id: ToField<UID>
}

export type RewardManagerAdminCapReified = Reified<
  RewardManagerAdminCap,
  RewardManagerAdminCapFields
>

export class RewardManagerAdminCap implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::reward_manager::RewardManagerAdminCap'
  static readonly $numTypeParams = 0

  readonly $typeName = RewardManagerAdminCap.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::reward_manager::RewardManagerAdminCap'

  readonly $typeArgs: []

  readonly id: ToField<UID>

  private constructor(typeArgs: [], fields: RewardManagerAdminCapFields) {
    this.$fullTypeName = composeSuiType(
      RewardManagerAdminCap.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::reward_manager::RewardManagerAdminCap'
    this.$typeArgs = typeArgs

    this.id = fields.id
  }

  static reified(): RewardManagerAdminCapReified {
    return {
      typeName: RewardManagerAdminCap.$typeName,
      fullTypeName: composeSuiType(
        RewardManagerAdminCap.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::reward_manager::RewardManagerAdminCap',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => RewardManagerAdminCap.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        RewardManagerAdminCap.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => RewardManagerAdminCap.fromBcs(data),
      bcs: RewardManagerAdminCap.bcs,
      fromJSONField: (field: any) => RewardManagerAdminCap.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => RewardManagerAdminCap.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        RewardManagerAdminCap.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => RewardManagerAdminCap.fetch(client, id),
      new: (fields: RewardManagerAdminCapFields) => {
        return new RewardManagerAdminCap([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return RewardManagerAdminCap.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<RewardManagerAdminCap>> {
    return phantom(RewardManagerAdminCap.reified())
  }
  static get p() {
    return RewardManagerAdminCap.phantom()
  }

  static get bcs() {
    return bcs.struct('RewardManagerAdminCap', {
      id: UID.bcs,
    })
  }

  static fromFields(fields: Record<string, any>): RewardManagerAdminCap {
    return RewardManagerAdminCap.reified().new({ id: decodeFromFields(UID.reified(), fields.id) })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RewardManagerAdminCap {
    if (!isRewardManagerAdminCap(item.type)) {
      throw new Error('not a RewardManagerAdminCap type')
    }

    return RewardManagerAdminCap.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
    })
  }

  static fromBcs(data: Uint8Array): RewardManagerAdminCap {
    return RewardManagerAdminCap.fromFields(RewardManagerAdminCap.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): RewardManagerAdminCap {
    return RewardManagerAdminCap.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) })
  }

  static fromJSON(json: Record<string, any>): RewardManagerAdminCap {
    if (json.$typeName !== RewardManagerAdminCap.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return RewardManagerAdminCap.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): RewardManagerAdminCap {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isRewardManagerAdminCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a RewardManagerAdminCap object`
      )
    }
    return RewardManagerAdminCap.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<RewardManagerAdminCap> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching RewardManagerAdminCap object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isRewardManagerAdminCap(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a RewardManagerAdminCap object`)
    }
    return RewardManagerAdminCap.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}
