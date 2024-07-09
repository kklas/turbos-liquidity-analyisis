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

/* ============================== FEE10000BPS =============================== */

export function isFEE10000BPS(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee10000bps::FEE10000BPS'
  )
}

export interface FEE10000BPSFields {
  dummyField: ToField<'bool'>
}

export type FEE10000BPSReified = Reified<FEE10000BPS, FEE10000BPSFields>

export class FEE10000BPS implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee10000bps::FEE10000BPS'
  static readonly $numTypeParams = 0

  readonly $typeName = FEE10000BPS.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee10000bps::FEE10000BPS'

  readonly $typeArgs: []

  readonly dummyField: ToField<'bool'>

  private constructor(typeArgs: [], fields: FEE10000BPSFields) {
    this.$fullTypeName = composeSuiType(
      FEE10000BPS.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee10000bps::FEE10000BPS'
    this.$typeArgs = typeArgs

    this.dummyField = fields.dummyField
  }

  static reified(): FEE10000BPSReified {
    return {
      typeName: FEE10000BPS.$typeName,
      fullTypeName: composeSuiType(
        FEE10000BPS.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee10000bps::FEE10000BPS',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FEE10000BPS.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => FEE10000BPS.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FEE10000BPS.fromBcs(data),
      bcs: FEE10000BPS.bcs,
      fromJSONField: (field: any) => FEE10000BPS.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FEE10000BPS.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => FEE10000BPS.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => FEE10000BPS.fetch(client, id),
      new: (fields: FEE10000BPSFields) => {
        return new FEE10000BPS([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return FEE10000BPS.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<FEE10000BPS>> {
    return phantom(FEE10000BPS.reified())
  }
  static get p() {
    return FEE10000BPS.phantom()
  }

  static get bcs() {
    return bcs.struct('FEE10000BPS', {
      dummy_field: bcs.bool(),
    })
  }

  static fromFields(fields: Record<string, any>): FEE10000BPS {
    return FEE10000BPS.reified().new({ dummyField: decodeFromFields('bool', fields.dummy_field) })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FEE10000BPS {
    if (!isFEE10000BPS(item.type)) {
      throw new Error('not a FEE10000BPS type')
    }

    return FEE10000BPS.reified().new({
      dummyField: decodeFromFieldsWithTypes('bool', item.fields.dummy_field),
    })
  }

  static fromBcs(data: Uint8Array): FEE10000BPS {
    return FEE10000BPS.fromFields(FEE10000BPS.bcs.parse(data))
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): FEE10000BPS {
    return FEE10000BPS.reified().new({ dummyField: decodeFromJSONField('bool', field.dummyField) })
  }

  static fromJSON(json: Record<string, any>): FEE10000BPS {
    if (json.$typeName !== FEE10000BPS.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return FEE10000BPS.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): FEE10000BPS {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isFEE10000BPS(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a FEE10000BPS object`)
    }
    return FEE10000BPS.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<FEE10000BPS> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching FEE10000BPS object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isFEE10000BPS(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a FEE10000BPS object`)
    }
    return FEE10000BPS.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}
