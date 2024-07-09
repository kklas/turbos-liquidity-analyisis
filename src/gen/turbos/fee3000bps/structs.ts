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

/* ============================== FEE3000BPS =============================== */

export function isFEE3000BPS(type: string): boolean {
  type = compressSuiType(type)
  return (
    type ===
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee3000bps::FEE3000BPS'
  )
}

export interface FEE3000BPSFields {
  dummyField: ToField<'bool'>
}

export type FEE3000BPSReified = Reified<FEE3000BPS, FEE3000BPSFields>

export class FEE3000BPS implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee3000bps::FEE3000BPS'
  static readonly $numTypeParams = 0

  readonly $typeName = FEE3000BPS.$typeName

  readonly $fullTypeName: '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee3000bps::FEE3000BPS'

  readonly $typeArgs: []

  readonly dummyField: ToField<'bool'>

  private constructor(typeArgs: [], fields: FEE3000BPSFields) {
    this.$fullTypeName = composeSuiType(
      FEE3000BPS.$typeName,
      ...typeArgs
    ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee3000bps::FEE3000BPS'
    this.$typeArgs = typeArgs

    this.dummyField = fields.dummyField
  }

  static reified(): FEE3000BPSReified {
    return {
      typeName: FEE3000BPS.$typeName,
      fullTypeName: composeSuiType(
        FEE3000BPS.$typeName,
        ...[]
      ) as '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee3000bps::FEE3000BPS',
      typeArgs: [] as [],
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FEE3000BPS.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => FEE3000BPS.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FEE3000BPS.fromBcs(data),
      bcs: FEE3000BPS.bcs,
      fromJSONField: (field: any) => FEE3000BPS.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FEE3000BPS.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => FEE3000BPS.fromSuiParsedData(content),
      fetch: async (client: SuiClient, id: string) => FEE3000BPS.fetch(client, id),
      new: (fields: FEE3000BPSFields) => {
        return new FEE3000BPS([], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return FEE3000BPS.reified()
  }

  static phantom(): PhantomReified<ToTypeStr<FEE3000BPS>> {
    return phantom(FEE3000BPS.reified())
  }
  static get p() {
    return FEE3000BPS.phantom()
  }

  static get bcs() {
    return bcs.struct('FEE3000BPS', {
      dummy_field: bcs.bool(),
    })
  }

  static fromFields(fields: Record<string, any>): FEE3000BPS {
    return FEE3000BPS.reified().new({ dummyField: decodeFromFields('bool', fields.dummy_field) })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FEE3000BPS {
    if (!isFEE3000BPS(item.type)) {
      throw new Error('not a FEE3000BPS type')
    }

    return FEE3000BPS.reified().new({
      dummyField: decodeFromFieldsWithTypes('bool', item.fields.dummy_field),
    })
  }

  static fromBcs(data: Uint8Array): FEE3000BPS {
    return FEE3000BPS.fromFields(FEE3000BPS.bcs.parse(data))
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField(field: any): FEE3000BPS {
    return FEE3000BPS.reified().new({ dummyField: decodeFromJSONField('bool', field.dummyField) })
  }

  static fromJSON(json: Record<string, any>): FEE3000BPS {
    if (json.$typeName !== FEE3000BPS.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return FEE3000BPS.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): FEE3000BPS {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isFEE3000BPS(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a FEE3000BPS object`)
    }
    return FEE3000BPS.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<FEE3000BPS> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching FEE3000BPS object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isFEE3000BPS(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a FEE3000BPS object`)
    }
    return FEE3000BPS.fromBcs(fromB64(res.data.bcs.bcsBytes))
  }
}
