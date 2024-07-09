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

/* ============================== FEE100BPS =============================== */

export function isFEE100BPS(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee100bps::FEE100BPS'
  )
}

export interface FEE100BPSFields {
  dummyField: ToField<'bool'>
}

export type FEE100BPSReified = Reified<FEE100BPS, FEE100BPSFields>

export class FEE100BPS implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee100bps::FEE100BPS'
  static readonly $numTypeParams = 0

  readonly $typeName = FEE100BPS.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee100bps::FEE100BPS'

  readonly $typeArgs: []

  readonly dummyField: ToField<'bool'>

  private constructor(typeArgs: [], fields: FEE100BPSFields) {
    this.$fullTypeName = composeSuiType(
      FEE100BPS.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee100bps::FEE100BPS'
    this.$typeArgs = typeArgs

    this.dummyField = fields.dummyField
  }

  static reified(): FEE100BPSReified {
    return {
      typeName: FEE100BPS.$typeName,
      fullTypeName: composeSuiType(
        FEE100BPS.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee100bps::FEE100BPS',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FEE100BPS.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => FEE100BPS.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FEE100BPS.fromBcs(data),
      bcs: FEE100BPS.bcs,
      fromJSONField: (field: any) => FEE100BPS.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FEE100BPS.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => FEE100BPS.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => FEE100BPS.fetch(client, id),
      new: (fields: FEE100BPSFields) => {
        return new FEE100BPS([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return FEE100BPS.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<FEE100BPS>> {
    return phantom(FEE100BPS.reified())
  }
  static get p() {
    return FEE100BPS.phantom()
  }

  static get bcs() {
    return bcs.struct('FEE100BPS', {
      dummy_field: bcs.bool(),
    })
  }

  static fromFields(fields: Record<string, any>): FEE100BPS {
    return FEE100BPS.reified().new({ dummyField: decodeFromFields('bool', fields.dummy_field) })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FEE100BPS {
    if (!isFEE100BPS(item.type)) {
      throw new Error('not a FEE100BPS type')
    }

    return FEE100BPS.reified().new({
      dummyField: decodeFromFieldsWithTypes('bool', item.fields.dummy_field),
    })
  }

  static fromBcs(data: Uint8Array): FEE100BPS {
    return FEE100BPS.fromFields(FEE100BPS.bcs.parse(data))
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): FEE100BPS {
    return FEE100BPS.reified().new({ dummyField: decodeFromJSONField('bool', field.dummyField) })
  }

  static fromJSON(json: Record<string, any>): FEE100BPS {
    if (json.$typeName !== FEE100BPS.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return FEE100BPS.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): FEE100BPS {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isFEE100BPS(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a FEE100BPS object`)
    }
    return FEE100BPS.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<FEE100BPS> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching FEE100BPS object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isFEE100BPS(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a FEE100BPS object`)
    }
    return FEE100BPS.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}
