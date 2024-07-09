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

/* ============================== FEE500BPS =============================== */

export function isFEE500BPS(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee500bps::FEE500BPS'
  )
}

export interface FEE500BPSFields {
  dummyField: ToField<'bool'>
}

export type FEE500BPSReified = Reified<FEE500BPS, FEE500BPSFields>

export class FEE500BPS implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee500bps::FEE500BPS'
  static readonly $numTypeParams = 0

  readonly $typeName = FEE500BPS.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee500bps::FEE500BPS'

  readonly $typeArgs: []

  readonly dummyField: ToField<'bool'>

  private constructor(typeArgs: [], fields: FEE500BPSFields) {
    this.$fullTypeName = composeSuiType(
      FEE500BPS.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee500bps::FEE500BPS'
    this.$typeArgs = typeArgs

    this.dummyField = fields.dummyField
  }

  static reified(): FEE500BPSReified {
    return {
      typeName: FEE500BPS.$typeName,
      fullTypeName: composeSuiType(
        FEE500BPS.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee500bps::FEE500BPS',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FEE500BPS.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => FEE500BPS.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FEE500BPS.fromBcs(data),
      bcs: FEE500BPS.bcs,
      fromJSONField: (field: any) => FEE500BPS.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FEE500BPS.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => FEE500BPS.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => FEE500BPS.fetch(client, id),
      new: (fields: FEE500BPSFields) => {
        return new FEE500BPS([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return FEE500BPS.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<FEE500BPS>> {
    return phantom(FEE500BPS.reified())
  }
  static get p() {
    return FEE500BPS.phantom()
  }

  static get bcs() {
    return bcs.struct('FEE500BPS', {
      dummy_field: bcs.bool(),
    })
  }

  static fromFields(fields: Record<string, any>): FEE500BPS {
    return FEE500BPS.reified().new({ dummyField: decodeFromFields('bool', fields.dummy_field) })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FEE500BPS {
    if (!isFEE500BPS(item.type)) {
      throw new Error('not a FEE500BPS type')
    }

    return FEE500BPS.reified().new({
      dummyField: decodeFromFieldsWithTypes('bool', item.fields.dummy_field),
    })
  }

  static fromBcs(data: Uint8Array): FEE500BPS {
    return FEE500BPS.fromFields(FEE500BPS.bcs.parse(data))
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): FEE500BPS {
    return FEE500BPS.reified().new({ dummyField: decodeFromJSONField('bool', field.dummyField) })
  }

  static fromJSON(json: Record<string, any>): FEE500BPS {
    if (json.$typeName !== FEE500BPS.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return FEE500BPS.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): FEE500BPS {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isFEE500BPS(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a FEE500BPS object`)
    }
    return FEE500BPS.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<FEE500BPS> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching FEE500BPS object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isFEE500BPS(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a FEE500BPS object`)
    }
    return FEE500BPS.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}
