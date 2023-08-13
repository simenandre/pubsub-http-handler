pubsub-http-handler

# pubsub-http-handler

## Table of contents

### Classes

- [PubSubHandlerResponse](classes/PubSubHandlerResponse.md)

### Interfaces

- [HandlePubSubMessageArgs](interfaces/HandlePubSubMessageArgs.md)
- [PubSubCloudFunctionsConfig](interfaces/PubSubCloudFunctionsConfig.md)
- [PubSubConfig](interfaces/PubSubConfig.md)
- [PubSubHandlerFastifyConfig](interfaces/PubSubHandlerFastifyConfig.md)

### Type Aliases

- [CloudFunctionFun](README.md#cloudfunctionfun)
- [OnErrorHandler](README.md#onerrorhandler)
- [PubSubHandler](README.md#pubsubhandler)
- [PubSubMessage](README.md#pubsubmessage)
- [PubSubRequest](README.md#pubsubrequest)

### Variables

- [pubSubMessageSchema](README.md#pubsubmessageschema)
- [pubSubRequestSchema](README.md#pubsubrequestschema)

### Functions

- [createPubSubCloudFunctions](README.md#createpubsubcloudfunctions)
- [handlePubSubMessage](README.md#handlepubsubmessage)
- [makePubSubConfig](README.md#makepubsubconfig)
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

[src/cloud-functions.ts:14](https://github.com/simenandre/pubsub-http-handler/blob/main/src/cloud-functions.ts#L14)

___

### OnErrorHandler

Ƭ **OnErrorHandler**<`Context`\>: (`error`: `unknown`, `context`: `Context`) => `void` \| `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `Context` |

#### Type declaration

▸ (`error`, `context`): `void` \| `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |
| `context` | `Context` |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[src/types.ts:30](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L30)

___

### PubSubHandler

Ƭ **PubSubHandler**<`Data`, `Context`, `Logger`\>: (`args`: { `context`: `Context` ; `data`: `Data` ; `log`: `Logger` ; `message`: [`PubSubMessage`](README.md#pubsubmessage)  }) => `Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`\> \| [`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`

#### Type parameters

| Name |
| :------ |
| `Data` |
| `Context` |
| `Logger` |

#### Type declaration

▸ (`args`): `Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`\> \| [`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.context` | `Context` |
| `args.data` | `Data` |
| `args.log` | `Logger` |
| `args.message` | [`PubSubMessage`](README.md#pubsubmessage) |

##### Returns

`Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`\> \| [`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`

#### Defined in

[src/types.ts:39](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L39)

___

### PubSubMessage

Ƭ **PubSubMessage**: `Static`<typeof [`pubSubMessageSchema`](README.md#pubsubmessageschema)\>

#### Defined in

[src/types.ts:15](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L15)

___

### PubSubRequest

Ƭ **PubSubRequest**: `Static`<typeof [`pubSubRequestSchema`](README.md#pubsubrequestschema)\>

#### Defined in

[src/types.ts:28](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L28)

## Variables

### pubSubMessageSchema

• `Const` **pubSubMessageSchema**: `TObject`<{ `attributes`: `TOptional`<`TRecord`<`TString`, `TString`\>\> ; `data`: `TString` ; `messageId`: `TOptional`<`TString`\>  }\>

PubSub Message Type

This describes the message object that is sent to the handler
from Google PubSub.

#### Defined in

[src/types.ts:9](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L9)

___

### pubSubRequestSchema

• `Const` **pubSubRequestSchema**: `TObject`<{ `message`: `TObject`<{ `attributes`: `TOptional`<`TRecord`<`TString`, `TString`\>\> ; `data`: `TString` ; `messageId`: `TOptional`<`TString`\>  }\> = pubSubMessageSchema; `subscription`: `TString`  }\>

PubSub Request Type

This describes the request object that is sent to the handler
from Google PubSub.

#### Defined in

[src/types.ts:23](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L23)

## Functions

### createPubSubCloudFunctions

▸ **createPubSubCloudFunctions**<`Data`, `Context`\>(`handler`, `options?`): [`CloudFunctionFun`](README.md#cloudfunctionfun)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `unknown` |
| `Context` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`PubSubHandler`](README.md#pubsubhandler)<`Data`, `Context`, `Logger`<`LoggerOptions`\>\> |
| `options` | [`PubSubCloudFunctionsConfig`](interfaces/PubSubCloudFunctionsConfig.md)<`Data`, `Context`\> |

#### Returns

[`CloudFunctionFun`](README.md#cloudfunctionfun)

#### Defined in

[src/cloud-functions.ts:19](https://github.com/simenandre/pubsub-http-handler/blob/main/src/cloud-functions.ts#L19)

___

### handlePubSubMessage

▸ **handlePubSubMessage**<`Data`, `Context`, `Logger`\>(`args`): `Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`\>

#### Type parameters

| Name |
| :------ |
| `Data` |
| `Context` |
| `Logger` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`HandlePubSubMessageArgs`](interfaces/HandlePubSubMessageArgs.md)<`Data`, `Context`, `Logger`\> |

#### Returns

`Promise`<[`PubSubHandlerResponse`](classes/PubSubHandlerResponse.md) \| `void`\>

#### Defined in

[src/common.ts:12](https://github.com/simenandre/pubsub-http-handler/blob/main/src/common.ts#L12)

___

### makePubSubConfig

▸ **makePubSubConfig**<`Data`, `Context`\>(`data`): [`PubSubHandlerFastifyConfig`](interfaces/PubSubHandlerFastifyConfig.md)<`Data`, `Context`\>

#### Type parameters

| Name |
| :------ |
| `Data` |
| `Context` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`PubSubHandlerFastifyConfig`](interfaces/PubSubHandlerFastifyConfig.md)<`Data`, `Context`\> |

#### Returns

[`PubSubHandlerFastifyConfig`](interfaces/PubSubHandlerFastifyConfig.md)<`Data`, `Context`\>

#### Defined in

[src/utils.ts:3](https://github.com/simenandre/pubsub-http-handler/blob/main/src/utils.ts#L3)

___

### pubSubFastifyPlugin

▸ **pubSubFastifyPlugin**<`Data`, `Context`\>(`fastify`, `options`): `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `Data` |
| `Context` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fastify` | `FastifyInstance`<`RawServerDefault`, `IncomingMessage`, `ServerResponse`<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> |
| `options` | [`PubSubHandlerFastifyConfig`](interfaces/PubSubHandlerFastifyConfig.md)<`Data`, `Context`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fastify-plugin.ts:14](https://github.com/simenandre/pubsub-http-handler/blob/main/src/fastify-plugin.ts#L14)
