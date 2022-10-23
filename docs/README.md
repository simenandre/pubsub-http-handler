pubsub-http-handler

# pubsub-http-handler

## Table of contents

### Classes

- [PubSubHandlerResponse](classes/PubSubHandlerResponse.md)

### Interfaces

- [CreatePubSubHandlerResponse](interfaces/CreatePubSubHandlerResponse.md)
- [HandlePubSubMessageArgs](interfaces/HandlePubSubMessageArgs.md)
- [PubSubCloudFunctionsConfig](interfaces/PubSubCloudFunctionsConfig.md)
- [PubSubConfig](interfaces/PubSubConfig.md)
- [PubSubServerConfig](interfaces/PubSubServerConfig.md)

### Type Aliases

- [CloudFunctionFun](README.md#cloudfunctionfun)
- [OnErrorHandler](README.md#onerrorhandler)
- [PubSubHandler](README.md#pubsubhandler)
- [PubSubMessageType](README.md#pubsubmessagetype)
- [PubSubRequestType](README.md#pubsubrequesttype)

### Variables

- [PubSubMessage](README.md#pubsubmessage)
- [PubSubRequest](README.md#pubsubrequest)

### Functions

- [createPubSubCloudFunctions](README.md#createpubsubcloudfunctions)
- [createPubSubServer](README.md#createpubsubserver)
- [handlePubSubMessage](README.md#handlepubsubmessage)
- [makePubSubConfig](README.md#makepubsubconfig)
- [pubSubFastifyPlugin](README.md#pubsubfastifyplugin)

## Type Aliases

### CloudFunctionFun

Ƭ **CloudFunctionFun**: (`req`: `express.Request`, `res`: `express.Response`) =>
`Promise`<`void`\>

#### Type declaration

▸ (`req`, `res`): `Promise`<`void`\>

##### Parameters

| Name  | Type               |
| :---- | :----------------- |
| `req` | `express.Request`  |
| `res` | `express.Response` |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/methods/cloud-functions.ts:12](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/methods/cloud-functions.ts#L12)

---

### OnErrorHandler

Ƭ **OnErrorHandler**<`Context`\>: (`error`: `unknown`, `context`: `Context`) =>
`void` \| `Promise`<`void`\>

#### Type parameters

| Name      |
| :-------- |
| `Context` |

#### Type declaration

▸ (`error`, `context`): `void` \| `Promise`<`void`\>

##### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `error`   | `unknown` |
| `context` | `Context` |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[src/types.ts:60](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L60)

---

### PubSubHandler

Ƭ **PubSubHandler**<`Data`, `Context`\>: (`args`: { `context?`: `Context` ;
`data`: `Data` ; `log`: `FastifyBaseLogger` ; `message`:
[`PubSubMessageType`](README.md#pubsubmessagetype) }) =>
`Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \|
`void`\> \| [`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \|
`void`

#### Type parameters

| Name      |
| :-------- |
| `Data`    |
| `Context` |

#### Type declaration

▸ (`args`):
`Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \|
`void`\> \| [`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \|
`void`

##### Parameters

| Name            | Type                                               |
| :-------------- | :------------------------------------------------- |
| `args`          | `Object`                                           |
| `args.context?` | `Context`                                          |
| `args.data`     | `Data`                                             |
| `args.log`      | `FastifyBaseLogger`                                |
| `args.message`  | [`PubSubMessageType`](README.md#pubsubmessagetype) |

##### Returns

`Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \|
`void`\> \| [`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \|
`void`

#### Defined in

[src/types.ts:53](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L53)

---

### PubSubMessageType

Ƭ **PubSubMessageType**: `Static`<typeof
[`PubSubMessage`](README.md#pubsubmessage)\>

#### Defined in

[src/types.ts:40](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L40)

---

### PubSubRequestType

Ƭ **PubSubRequestType**: `Static`<typeof
[`PubSubRequest`](README.md#pubsubrequest)\>

#### Defined in

[src/types.ts:47](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L47)

## Variables

### PubSubMessage

• `Const` **PubSubMessage**: `TObject`<{ `attributes`:
`TOptional`<`TRecord`<`TString`, `TString`\>\> ; `data`: `TString` ;
`messageId`: `TOptional`<`TString`\> }\>

#### Defined in

[src/types.ts:34](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L34)

---

### PubSubRequest

• `Const` **PubSubRequest**: `TObject`<{ `message`: `TObject`<{ `attributes`:
`TOptional`<`TRecord`<`TString`, `TString`\>\> ; `data`: `TString` ;
`messageId`: `TOptional`<`TString`\> }\> = PubSubMessage; `subscription`:
`TString` }\>

#### Defined in

[src/types.ts:42](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/types.ts#L42)

## Functions

### createPubSubCloudFunctions

▸ **createPubSubCloudFunctions**<`Data`, `Context`\>(`handler`, `options?`):
[`CloudFunctionFun`](README.md#cloudfunctionfun)

#### Type parameters

| Name      | Type      |
| :-------- | :-------- |
| `Data`    | `unknown` |
| `Context` | `unknown` |

#### Parameters

| Name      | Type                                                                                         |
| :-------- | :------------------------------------------------------------------------------------------- |
| `handler` | [`PubSubHandler`](README.md#pubsubhandler)<`Data`, `Context`\>                               |
| `options` | [`PubSubCloudFunctionsConfig`](interfaces/PubSubCloudFunctionsConfig.md)<`Data`, `Context`\> |

#### Returns

[`CloudFunctionFun`](README.md#cloudfunctionfun)

#### Defined in

[src/methods/cloud-functions.ts:17](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/methods/cloud-functions.ts#L17)

---

### createPubSubServer

▸ **createPubSubServer**<`Data`\>(`handler`, `config?`):
[`CreatePubSubHandlerResponse`](interfaces/CreatePubSubHandlerResponse.md)

#### Type parameters

| Name   |
| :----- |
| `Data` |

#### Parameters

| Name      | Type                                                                                                                                                                                                                                                                                                                            |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `handler` | [`PubSubHandler`](README.md#pubsubhandler)<`Data`, `FastifyRequest`<`RouteGenericInterface`, `Server`, `IncomingMessage`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`, `FastifyBaseLogger`, `ResolveFastifyRequestType`<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>\>               |
| `config`  | [`PubSubServerConfig`](interfaces/PubSubServerConfig.md)<`Data`, `FastifyRequest`<`RouteGenericInterface`, `Server`, `IncomingMessage`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`, `FastifyBaseLogger`, `ResolveFastifyRequestType`<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>\> |

#### Returns

[`CreatePubSubHandlerResponse`](interfaces/CreatePubSubHandlerResponse.md)

#### Defined in

[src/methods/server.ts:39](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/methods/server.ts#L39)

---

### handlePubSubMessage

▸ **handlePubSubMessage**<`Data`, `Context`\>(`args`):
`Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \|
`void`\>

#### Type parameters

| Name      |
| :-------- |
| `Data`    |
| `Context` |

#### Parameters

| Name   | Type                                                                                   |
| :----- | :------------------------------------------------------------------------------------- |
| `args` | [`HandlePubSubMessageArgs`](interfaces/HandlePubSubMessageArgs.md)<`Data`, `Context`\> |

#### Returns

`Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \|
`void`\>

#### Defined in

[src/common.ts:5](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/common.ts#L5)

---

### makePubSubConfig

▸ **makePubSubConfig**<`Data`, `Context`\>(`data`):
[`PubSubConfig`](interfaces/PubSubConfig.md)<`Data`, `Context`\>

#### Type parameters

| Name      |
| :-------- |
| `Data`    |
| `Context` |

#### Parameters

| Name   | Type                                                             |
| :----- | :--------------------------------------------------------------- |
| `data` | [`PubSubConfig`](interfaces/PubSubConfig.md)<`Data`, `Context`\> |

#### Returns

[`PubSubConfig`](interfaces/PubSubConfig.md)<`Data`, `Context`\>

#### Defined in

[src/utils.ts:3](https://github.com/cobraz/pubsub-http-handler/blob/f2a1dfc/src/utils.ts#L3)

---

### pubSubFastifyPlugin

▸ **pubSubFastifyPlugin**<`Data`\>(`instance`, `opts`): `Promise`<`void`\>

FastifyPluginAsync

Fastify allows the user to extend its functionalities with plugins. A plugin can
be a set of routes, a server decorator or whatever. To activate plugins, use the
`fastify.register()` method.

#### Type parameters

| Name   | Type      |
| :----- | :-------- |
| `Data` | `unknown` |

#### Parameters

| Name       | Type                                                                                                                                                                                                                                                                                                                |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `instance` | `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>                                                                                                                                                                                                |
| `opts`     | [`PubSubConfig`](interfaces/PubSubConfig.md)<`Data`, `FastifyRequest`<`RouteGenericInterface`, `Server`, `IncomingMessage`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`, `FastifyBaseLogger`, `ResolveFastifyRequestType`<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/fastify/types/plugin.d.ts:28
