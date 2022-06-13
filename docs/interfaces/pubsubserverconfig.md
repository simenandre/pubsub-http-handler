[pubsub-http-handler](../README.md) / PubSubServerConfig

# Interface: PubSubServerConfig

## Hierarchy

- `Omit`<[`PubSubConfig`](PubSubConfig.md), ``"handler"``\>

  ↳ **`PubSubServerConfig`**

## Table of contents

### Properties

- [address](PubSubServerConfig.md#address)
- [fastifyConfig](PubSubServerConfig.md#fastifyconfig)
- [host](PubSubServerConfig.md#host)
- [onError](PubSubServerConfig.md#onerror)
- [parseJson](PubSubServerConfig.md#parsejson)
- [path](PubSubServerConfig.md#path)
- [port](PubSubServerConfig.md#port)

## Properties

### address

• `Optional` **address**: `string`

**`default`** 0.0.0.0

**`deprecated`** `address` will be removed in next major release. Please use `host` instead.

#### Defined in

[methods/server.ts:22](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/methods/server.ts#L22)

___

### fastifyConfig

• `Optional` **fastifyConfig**: `FastifyServerOptions`<`Server`, `FastifyLoggerInstance`\>

Read more here: https://www.fastify.io/docs/latest/Server/

#### Defined in

[methods/server.ts:27](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/methods/server.ts#L27)

___

### host

• `Optional` **host**: `string`

**`default`** 0.0.0.0

#### Defined in

[methods/server.ts:16](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/methods/server.ts#L16)

___

### onError

• `Optional` **onError**: [`OnErrorHandler`](../README.md#onerrorhandler)

OnError Handler

When this is set, errors will not be
thrown.

#### Inherited from

Omit.onError

#### Defined in

[types.ts:15](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L15)

___

### parseJson

• `Optional` **parseJson**: `boolean`

This will run JSON.parse on request data

**Tip**: `false` when sending strings

**`default`** true

#### Inherited from

Omit.parseJson

#### Defined in

[types.ts:22](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L22)

___

### path

• `Optional` **path**: `string`

Use this to set a different path

**`default`** /

#### Inherited from

Omit.path

#### Defined in

[types.ts:27](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L27)

___

### port

• `Optional` **port**: `number`

Will automatically pick up PORT environment variable.

**`default`** 8000

#### Defined in

[methods/server.ts:11](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/methods/server.ts#L11)
