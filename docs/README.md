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
- [pubSubFastifyPlugin](README.md#pubsubfastifyplugin)

## Type Aliases

### CloudFunctionFun

Ƭ **CloudFunctionFun**: (`req`: `express.Request`, `res`: `express.Response`) => `Promise`<`void`\>

#### Type declaration

▸ (`req`, `res`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `express.Request` |
| `res` | `express.Response` |

##### Returns

`Promise`<`void`\>

#### Defined in

[methods/cloud-functions.ts:12](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/methods/cloud-functions.ts#L12)

___

### OnErrorHandler

Ƭ **OnErrorHandler**: (`error`: `unknown`) => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (`error`): `void` \| `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[types.ts:56](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L56)

___

### PubSubHandler

Ƭ **PubSubHandler**<`T`\>: (`args`: { `context?`: `unknown` ; `data?`: `T` ; `log`: `FastifyLoggerInstance` ; `message`: [`PubSubMessageType`](README.md#pubsubmessagetype)  }) => `Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`\> \| [`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (`args`): `Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`\> \| [`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.context?` | `unknown` |
| `args.data?` | `T` |
| `args.log` | `FastifyLoggerInstance` |
| `args.message` | [`PubSubMessageType`](README.md#pubsubmessagetype) |

##### Returns

`Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`\> \| [`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`

#### Defined in

[types.ts:49](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L49)

___

### PubSubMessageType

Ƭ **PubSubMessageType**: `Static`<typeof [`PubSubMessage`](README.md#pubsubmessage)\>

#### Defined in

[types.ts:36](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L36)

___

### PubSubRequestType

Ƭ **PubSubRequestType**: `Static`<typeof [`PubSubRequest`](README.md#pubsubrequest)\>

#### Defined in

[types.ts:43](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L43)

## Variables

### PubSubMessage

• `Const` **PubSubMessage**: `TObject`<{ `attributes`: `TOptional`<`TRecord`<`TString`, `TString`\>\> ; `data`: `TString` ; `messageId`: `TOptional`<`TString`\>  }\>

#### Defined in

[types.ts:30](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L30)

___

### PubSubRequest

• `Const` **PubSubRequest**: `TObject`<{ `message`: `TObject`<{ `attributes`: `TOptional`<`TRecord`<`TString`, `TString`\>\> ; `data`: `TString` ; `messageId`: `TOptional`<`TString`\>  }\> = PubSubMessage; `subscription`: `TString`  }\>

#### Defined in

[types.ts:38](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L38)

## Functions

### createPubSubCloudFunctions

▸ **createPubSubCloudFunctions**<`T`\>(`handler`, `options?`): [`CloudFunctionFun`](README.md#cloudfunctionfun)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`PubSubHandler`](README.md#pubsubhandler)<`T`\> |
| `options` | [`PubSubCloudFunctionsConfig`](interfaces/PubSubCloudFunctionsConfig.md) |

#### Returns

[`CloudFunctionFun`](README.md#cloudfunctionfun)

#### Defined in

[methods/cloud-functions.ts:17](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/methods/cloud-functions.ts#L17)

___

### createPubSubServer

▸ **createPubSubServer**<`T`\>(`handler`, `config?`): [`CreatePubSubHandlerResponse`](interfaces/CreatePubSubHandlerResponse.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`PubSubHandler`](README.md#pubsubhandler)<`T`\> |
| `config` | [`PubSubServerConfig`](interfaces/PubSubServerConfig.md) |

#### Returns

[`CreatePubSubHandlerResponse`](interfaces/CreatePubSubHandlerResponse.md)

#### Defined in

[methods/server.ts:35](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/methods/server.ts#L35)

___

### handlePubSubMessage

▸ **handlePubSubMessage**<`Context`\>(`args`): `Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`HandlePubSubMessageArgs`](interfaces/HandlePubSubMessageArgs.md)<`Context`\> |

#### Returns

`Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`\>

#### Defined in

[common.ts:16](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/common.ts#L16)

___

### pubSubFastifyPlugin

▸ **pubSubFastifyPlugin**(`instance`, `opts`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`, `FastifyTypeProviderDefault`\> |
| `opts` | [`PubSubConfig`](interfaces/PubSubConfig.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[methods/fastify-plugin.ts:5](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/methods/fastify-plugin.ts#L5)
