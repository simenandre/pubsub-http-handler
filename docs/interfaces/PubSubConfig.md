[pubsub-http-handler](../README.md) / PubSubConfig

# Interface: PubSubConfig<Data, Context\>

## Type parameters

| Name |
| :------ |
| `Data` |
| `Context` |

## Table of contents

### Properties

- [handler](PubSubConfig.md#handler)
- [onError](PubSubConfig.md#onerror)
- [parseJson](PubSubConfig.md#parsejson)
- [parser](PubSubConfig.md#parser)
- [path](PubSubConfig.md#path)

## Properties

### handler

• **handler**: [`PubSubHandler`](../README.md#pubsubhandler)<`Data`, `Context`\>

Handler

#### Defined in

[src/types.ts:9](https://github.com/simenandre/pubsub-http-handler/blob/a2ca195/src/types.ts#L9)

___

### onError

• `Optional` **onError**: [`OnErrorHandler`](../README.md#onerrorhandler)<`Context`\>

OnError Handler

When this is set, errors will not be
thrown.

#### Defined in

[src/types.ts:16](https://github.com/simenandre/pubsub-http-handler/blob/a2ca195/src/types.ts#L16)

___

### parseJson

• `Optional` **parseJson**: `boolean`

This will run JSON.parse on request data

**Tip**: `false` when sending strings

**`Default`**

true

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

#### Defined in

[src/types.ts:18](https://github.com/simenandre/pubsub-http-handler/blob/a2ca195/src/types.ts#L18)

___

### path

• `Optional` **path**: `string`

Use this to set a different path

**`Default`**

/

#### Defined in

[src/types.ts:31](https://github.com/simenandre/pubsub-http-handler/blob/a2ca195/src/types.ts#L31)
