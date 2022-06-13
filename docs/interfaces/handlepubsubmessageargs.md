[pubsub-http-handler](../README.md) / HandlePubSubMessageArgs

# Interface: HandlePubSubMessageArgs<Context\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | `unknown` |

## Table of contents

### Properties

- [context](HandlePubSubMessageArgs.md#context)
- [handler](HandlePubSubMessageArgs.md#handler)
- [log](HandlePubSubMessageArgs.md#log)
- [message](HandlePubSubMessageArgs.md#message)
- [parseJson](HandlePubSubMessageArgs.md#parsejson)

## Properties

### context

• `Optional` **context**: `Context`

#### Defined in

[common.ts:12](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/common.ts#L12)

___

### handler

• **handler**: [`PubSubHandler`](../README.md#pubsubhandler)<`any`\>

#### Defined in

[common.ts:10](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/common.ts#L10)

___

### log

• **log**: `Logger`<`LoggerOptions`\>

#### Defined in

[common.ts:13](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/common.ts#L13)

___

### message

• **message**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | `undefined` \| `Record`<`string`, `string`\> |
| `data` | `string` |
| `messageId` | `undefined` \| `string` |

#### Defined in

[common.ts:9](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/common.ts#L9)

___

### parseJson

• `Optional` **parseJson**: `boolean`

#### Defined in

[common.ts:11](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/common.ts#L11)
