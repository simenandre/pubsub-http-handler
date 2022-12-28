[pubsub-http-handler](../README.md) / PubSubServerConfig

# Interface: PubSubServerConfig<Data, Context\>

## Type parameters

| Name      |
| :-------- |
| `Data`    |
| `Context` |

## Hierarchy

- `Omit`<[`PubSubConfig`](PubSubConfig.md)<`Data`, `Context`\>, `"handler"`\>

  ↳ **`PubSubServerConfig`**

## Table of contents

### Properties

- [address](PubSubServerConfig.md#address)
- [fastifyConfig](PubSubServerConfig.md#fastifyconfig)
- [host](PubSubServerConfig.md#host)
- [onError](PubSubServerConfig.md#onerror)
- [parseJson](PubSubServerConfig.md#parsejson)
- [parser](PubSubServerConfig.md#parser)
- [path](PubSubServerConfig.md#path)
- [port](PubSubServerConfig.md#port)

## Properties

### address

• `Optional` **address**: `string`

**`Default`**

0.0.0.0

**`Deprecated`**

`address` will be removed in next major release. Please use `host` instead.

#### Defined in

[src/methods/server.ts:26](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/methods/server.ts#L26)

---

### fastifyConfig

• `Optional` **fastifyConfig**: `FastifyServerOptions`<`Server`,
`FastifyBaseLogger`\>

Read more here: https://www.fastify.io/docs/latest/Server/

#### Defined in

[src/methods/server.ts:31](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/methods/server.ts#L31)

---

### host

• `Optional` **host**: `string`

**`Default`**

0.0.0.0

#### Defined in

[src/methods/server.ts:20](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/methods/server.ts#L20)

---

### onError

• `Optional` **onError**:
[`OnErrorHandler`](../README.md#onerrorhandler)<`Context`\>

OnError Handler

When this is set, errors will not be thrown.

#### Inherited from

Omit.onError

#### Defined in

[src/types.ts:16](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L16)

---

### parseJson

• `Optional` **parseJson**: `boolean`

This will run JSON.parse on request data

**Tip**: `false` when sending strings

**`Default`**

true

#### Inherited from

Omit.parseJson

#### Defined in

[src/types.ts:25](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L25)

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

#### Inherited from

Omit.parser

#### Defined in

[src/types.ts:18](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L18)

---

### path

• `Optional` **path**: `string`

Use this to set a different path

**`Default`**

/

#### Inherited from

Omit.path

#### Defined in

[src/types.ts:31](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L31)

---

### port

• `Optional` **port**: `number`

Will automatically pick up PORT environment variable.

**`Default`**

8000

#### Defined in

[src/methods/server.ts:15](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/methods/server.ts#L15)
