import { UID } from '../../_dependencies/onchain/0x2/object/structs'
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from '../../_framework/reified'
import { FieldsWithTypes, composeSuiType, compressSuiType } from '../../_framework/util'
import { bcs, fromB64 } from '@mysten/bcs'
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client'

/* ============================== Fee =============================== */

export function isFee(type: string): boolean {
  type = compressSuiType(type)
  return type.startsWith(
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee::Fee<'
  )
}

export interface FeeFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>
  fee: ToField<'u32'>
  tickSpacing: ToField<'u32'>
}

export type FeeReified<T0 extends PhantomTypeArgument> = Reified<Fee<T0>, FeeFields<T0>>

export class Fee<T0 extends PhantomTypeArgument> implements StructClass {
  static readonly $typeName =
    '0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee::Fee'
  static readonly $numTypeParams = 1

  readonly $typeName = Fee.$typeName

  readonly $fullTypeName: `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee::Fee<${PhantomToTypeStr<T0>}>`

  readonly $typeArgs: [PhantomToTypeStr<T0>]

  readonly id: ToField<UID>
  readonly fee: ToField<'u32'>
  readonly tickSpacing: ToField<'u32'>

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: FeeFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Fee.$typeName,
      ...typeArgs
    ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee::Fee<${PhantomToTypeStr<T0>}>`
    this.$typeArgs = typeArgs

    this.id = fields.id
    this.fee = fields.fee
    this.tickSpacing = fields.tickSpacing
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0
  ): FeeReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: Fee.$typeName,
      fullTypeName: composeSuiType(
        Fee.$typeName,
        ...[extractType(T0)]
      ) as `0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::fee::Fee<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => Fee.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Fee.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Fee.fromBcs(T0, data),
      bcs: Fee.bcs,
      fromJSONField: (field: any) => Fee.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Fee.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => Fee.fromSuiParsedData(T0, content),
      fetch: async (client: SuiClient, id: string) => Fee.fetch(client, T0, id),
      new: (fields: FeeFields<ToPhantomTypeArgument<T0>>) => {
        return new Fee([extractType(T0)], fields)
      },
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return Fee.reified
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0
  ): PhantomReified<ToTypeStr<Fee<ToPhantomTypeArgument<T0>>>> {
    return phantom(Fee.reified(T0))
  }
  static get p() {
    return Fee.phantom
  }

  static get bcs() {
    return bcs.struct('Fee', {
      id: UID.bcs,
      fee: bcs.u32(),
      tick_spacing: bcs.u32(),
    })
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>
  ): Fee<ToPhantomTypeArgument<T0>> {
    return Fee.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      fee: decodeFromFields('u32', fields.fee),
      tickSpacing: decodeFromFields('u32', fields.tick_spacing),
    })
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes
  ): Fee<ToPhantomTypeArgument<T0>> {
    if (!isFee(item.type)) {
      throw new Error('not a Fee type')
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg])

    return Fee.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      fee: decodeFromFieldsWithTypes('u32', item.fields.fee),
      tickSpacing: decodeFromFieldsWithTypes('u32', item.fields.tick_spacing),
    })
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array
  ): Fee<ToPhantomTypeArgument<T0>> {
    return Fee.fromFields(typeArg, Fee.bcs.parse(data))
  }

  toJSONField() {
    return {
      id: this.id,
      fee: this.fee,
      tickSpacing: this.tickSpacing,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any
  ): Fee<ToPhantomTypeArgument<T0>> {
    return Fee.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      fee: decodeFromJSONField('u32', field.fee),
      tickSpacing: decodeFromJSONField('u32', field.tickSpacing),
    })
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>
  ): Fee<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== Fee.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Fee.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg]
    )

    return Fee.fromJSONField(typeArg, json)
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData
  ): Fee<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isFee(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Fee object`)
    }
    return Fee.fromFieldsWithTypes(typeArg, content)
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string
  ): Promise<Fee<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } })
    if (res.error) {
      throw new Error(`error fetching Fee object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.bcs?.dataType !== 'moveObject' || !isFee(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Fee object`)
    }
    return Fee.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes))
  }
}
