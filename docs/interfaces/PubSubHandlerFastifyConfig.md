[pubsub-http-handler](../README.md) / PubSubHandlerFastifyConfig

# Interface: PubSubHandlerFastifyConfig<Data, Context\>

## Type parameters

| Name |
| :------ |
| `Data` |
| `Context` |

## Hierarchy

- [`PubSubConfig`](PubSubConfig.md)<`Data`, `Context`\>

  ↳ **`PubSubHandlerFastifyConfig`**

## Table of contents

### Properties

- [context](PubSubHandlerFastifyConfig.md#context)
- [handler](PubSubHandlerFastifyConfig.md#handler)
- [onError](PubSubHandlerFastifyConfig.md#onerror)
- [parseJson](PubSubHandlerFastifyConfig.md#parsejson)
- [parser](PubSubHandlerFastifyConfig.md#parser)
- [path](PubSubHandlerFastifyConfig.md#path)

## Properties

### context

• `Optional` **context**: (`req?`: `FastifyRequest`<`RouteGenericInterface`, `RawServerDefault`, `IncomingMessage`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`, `FastifyBaseLogger`, `ResolveFastifyRequestType`<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>) => `Context` \| `Promise`<`Context`\>

#### Type declaration

▸ (`req?`): `Context` \| `Promise`<`Context`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `req?` | `FastifyRequest`<`RouteGenericInterface`, `RawServerDefault`, `IncomingMessage`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`, `FastifyBaseLogger`, `ResolveFastifyRequestType`<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\> |

##### Returns

`Context` \| `Promise`<`Context`\>

#### Overrides

[PubSubConfig](PubSubConfig.md).[context](PubSubConfig.md#context)

#### Defined in

[src/fastify-plugin.ts:11](https://github.com/simenandre/pubsub-http-handler/blob/main/src/fastify-plugin.ts#L11)

___

### handler

• **handler**: [`PubSubHandler`](../README.md#pubsubhandler)<`Data`, `Context`, `FastifyBaseLogger`\>

#### Defined in

[src/fastify-plugin.ts:9](https://github.com/simenandre/pubsub-http-handler/blob/main/src/fastify-plugin.ts#L9)

___

### onError

• `Optional` **onError**: [`OnErrorHandler`](../README.md#onerrorhandler)<`Context`\>

OnError Handler

When this is set, errors will not be
thrown.

#### Inherited from

[PubSubConfig](PubSubConfig.md).[onError](PubSubConfig.md#onerror)

#### Defined in

[src/types.ts:53](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L53)

___

### parseJson

• `Optional` **parseJson**: `boolean`

This will run JSON.parse on request data

**Tip**: `false` when sending strings

**`Default`**

```ts
true
```

#### Inherited from

[PubSubConfig](PubSubConfig.md).[parseJson](PubSubConfig.md#parsejson)

#### Defined in

[src/types.ts:65](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L65)

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

[PubSubConfig](PubSubConfig.md).[parser](PubSubConfig.md#parser)

#### Defined in

[src/types.ts:55](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L55)

___

### path

• `Optional` **path**: `string`

Use this to set a different path

**`Default`**

```ts
/
```

#### Inherited from

[PubSubConfig](PubSubConfig.md).[path](PubSubConfig.md#path)

#### Defined in

[src/types.ts:71](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L71)
