[pubsub-http-handler](../README.md) / HandlePubSubMessageArgs

# Interface: HandlePubSubMessageArgs<Data, Context, Logger\>

## Type parameters

| Name |
| :------ |
| `Data` |
| `Context` |
| `Logger` |

## Table of contents

### Properties

- [context](HandlePubSubMessageArgs.md#context)
- [handler](HandlePubSubMessageArgs.md#handler)
- [log](HandlePubSubMessageArgs.md#log)
- [message](HandlePubSubMessageArgs.md#message)
- [parseJson](HandlePubSubMessageArgs.md#parsejson)
- [parser](HandlePubSubMessageArgs.md#parser)

## Properties

### context

• **context**: `Context`

#### Defined in

[src/common.ts:8](https://github.com/simenandre/pubsub-http-handler/blob/main/src/common.ts#L8)

___

### handler

• **handler**: [`PubSubHandler`](../README.md#pubsubhandler)<`Data`, `Context`, `Logger`\>

#### Defined in

[src/common.ts:5](https://github.com/simenandre/pubsub-http-handler/blob/main/src/common.ts#L5)

___

### log

• **log**: `Logger`

#### Defined in

[src/common.ts:9](https://github.com/simenandre/pubsub-http-handler/blob/main/src/common.ts#L9)

___

### message

• **message**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes?` | `Record`<`string`, `string`\> |
| `data` | `string` |
| `messageId?` | `string` |

#### Defined in

[src/common.ts:4](https://github.com/simenandre/pubsub-http-handler/blob/main/src/common.ts#L4)

___

### parseJson

• `Optional` **parseJson**: `boolean`

#### Defined in

[src/common.ts:6](https://github.com/simenandre/pubsub-http-handler/blob/main/src/common.ts#L6)

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

[src/common.ts:7](https://github.com/simenandre/pubsub-http-handler/blob/main/src/common.ts#L7)
