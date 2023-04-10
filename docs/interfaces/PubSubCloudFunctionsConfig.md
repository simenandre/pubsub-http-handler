[pubsub-http-handler](../README.md) / PubSubCloudFunctionsConfig

# Interface: PubSubCloudFunctionsConfig<Data, Context\>

## Type parameters

| Name |
| :------ |
| `Data` |
| `Context` |

## Hierarchy

- `Omit`<[`PubSubConfig`](PubSubConfig.md)<`Data`, `Context`\>, ``"handler"`` \| ``"path"``\>

  ↳ **`PubSubCloudFunctionsConfig`**

## Table of contents

### Properties

- [logger](PubSubCloudFunctionsConfig.md#logger)
- [onError](PubSubCloudFunctionsConfig.md#onerror)
- [parseJson](PubSubCloudFunctionsConfig.md#parsejson)
- [parser](PubSubCloudFunctionsConfig.md#parser)

## Properties

### logger

• `Optional` **logger**: `LoggerOptions`

#### Defined in

[src/methods/cloud-functions.ts:9](https://github.com/simenandre/pubsub-http-handler/blob/a2ca195/src/methods/cloud-functions.ts#L9)

___

### onError

• `Optional` **onError**: [`OnErrorHandler`](../README.md#onerrorhandler)<`Context`\>

OnError Handler

When this is set, errors will not be
thrown.

#### Inherited from

Omit.onError

#### Defined in

[src/types.ts:16](https://github.com/simenandre/pubsub-http-handler/blob/a2ca195/src/types.ts#L16)

___

### parseJson

• `Optional` **parseJson**: `boolean`

This will run JSON.parse on request data

**Tip**: `false` when sending strings

**`Default`**

true

#### Inherited from

Omit.parseJson

#### Defined in

[src/types.ts:25](https://github.com/simenandre/pubsub-http-handler/blob/a2ca195/src/types.ts#L25)

___

### parser

• `Optional` **parser**: (`data`: `unknown`) => `Data` \| `Promise`<`Data`\>

#### Type declaration

▸ (`data`): `Data` \| `Promise`<`Data`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

##### Returns

`Data` \| `Promise`<`Data`\>

#### Inherited from

Omit.parser

#### Defined in

[src/types.ts:18](https://github.com/simenandre/pubsub-http-handler/blob/a2ca195/src/types.ts#L18)
