[pubsub-http-handler](../README.md) / HandlePubSubMessageArgs

# Interface: HandlePubSubMessageArgs<Data, Context\>

## Type parameters

| Name      |
| :-------- |
| `Data`    |
| `Context` |

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

[src/types.ts:70](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L70)

---

### handler

• **handler**: [`PubSubHandler`](../README.md#pubsubhandler)<`Data`, `Context`\>

#### Defined in

[src/types.ts:67](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L67)

---

### log

• `Optional` **log**: `FastifyBaseLogger` \| `Logger`<`LoggerOptions`\>

#### Defined in

[src/types.ts:71](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L71)

---

### message

• **message**: `Object`

#### Type declaration

| Name         | Type                                         |
| :----------- | :------------------------------------------- |
| `attributes` | `undefined` \| `Record`<`string`, `string`\> |
| `data`       | `string`                                     |
| `messageId`  | `undefined` \| `string`                      |

#### Defined in

[src/types.ts:66](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L66)

---

### parseJson

• `Optional` **parseJson**: `boolean`

#### Defined in

[src/types.ts:68](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L68)

---

### parser

• `Optional` **parser**: (`data`: `unknown`) => `Data` \| `Promise`<`Data`\>

#### Type declaration

▸ (`data`): `Data` \| `Promise`<`Data`\>

##### Parameters

| Name   | Type      |
| :----- | :-------- |
| `data` | `unknown` |

##### Returns

`Data` \| `Promise`<`Data`\>

#### Defined in

[src/types.ts:69](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L69)
