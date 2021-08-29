**[pubsub-http-handler](README.md)**

> Globals

# pubsub-http-handler

## Index

### Classes

* [PubSubHandlerResponse](classes/pubsubhandlerresponse.md)

### Interfaces

* [CreatePubSubHandlerResponse](interfaces/createpubsubhandlerresponse.md)
* [HandlePubSubMessageArgs](interfaces/handlepubsubmessageargs.md)
* [PubSubConfig](interfaces/pubsubconfig.md)
* [PubSubServerConfig](interfaces/pubsubserverconfig.md)

### Type aliases

* [CloudFunctionFun](README.md#cloudfunctionfun)
* [PubSubCloudFunctionsConfig](README.md#pubsubcloudfunctionsconfig)
* [PubSubHandler](README.md#pubsubhandler)
* [PubSubMessageType](README.md#pubsubmessagetype)
* [PubSubRequestType](README.md#pubsubrequesttype)

### Variables

* [PubSubMessage](README.md#pubsubmessage)
* [PubSubRequest](README.md#pubsubrequest)
* [listen](README.md#listen)
* [pubSubFastifyPlugin](README.md#pubsubfastifyplugin)

### Functions

* [createPubSubCloudFunctions](README.md#createpubsubcloudfunctions)
* [createPubSubRequest](README.md#createpubsubrequest)
* [createPubSubServer](README.md#createpubsubserver)
* [createPubSubdata](README.md#createpubsubdata)
* [handlePubSubMessage](README.md#handlepubsubmessage)
* [pubSubFastifyPluginAsync](README.md#pubsubfastifypluginasync)

## Type aliases

### CloudFunctionFun

Ƭ  **CloudFunctionFun**: (req: express.Request, res: express.Response) => Promise<void\>

___

### PubSubCloudFunctionsConfig

Ƭ  **PubSubCloudFunctionsConfig**: Omit<[PubSubConfig](interfaces/pubsubconfig.md), \"handler\" \| \"path\"\>

___

### PubSubHandler

Ƭ  **PubSubHandler**<T\>: (args: { context?: unknown ; data?: T ; message: [PubSubMessageType](README.md#pubsubmessagetype)  }) => Promise<[PubSubHandlerResponse](classes/pubsubhandlerresponse.md) \| void\> \| [PubSubHandlerResponse](classes/pubsubhandlerresponse.md) \| void

#### Type parameters:

Name | Default |
------ | ------ |
`T` | any |

___

### PubSubMessageType

Ƭ  **PubSubMessageType**: Static<*typeof* [PubSubMessage](README.md#pubsubmessage)\>

___

### PubSubRequestType

Ƭ  **PubSubRequestType**: Static<*typeof* [PubSubRequest](README.md#pubsubrequest)\>

## Variables

### PubSubMessage

• `Const` **PubSubMessage**: TObject<{ attributes: TDict<TString\> = Type.Dict(Type.String()); data: TString = Type.String(); messageId: TOptional<TString\> = Type.Optional(Type.String()) }\> = Type.Object({ attributes: Type.Dict(Type.String()), data: Type.String(), messageId: Type.Optional(Type.String()),})

___

### PubSubRequest

• `Const` **PubSubRequest**: TObject<{ message: TObject<{ attributes: TDict<TString\> = Type.Dict(Type.String()); data: TString = Type.String(); messageId: TOptional<TString\> = Type.Optional(Type.String()) }\> = PubSubMessage; subscription: TString = Type.String() }\> = Type.Object({ message: PubSubMessage, subscription: Type.String(),})

___

### listen

• `Const` **listen**: Mock<any, any\> = jest.fn()

___

### pubSubFastifyPlugin

• `Const` **pubSubFastifyPlugin**: FastifyPluginAsync<[PubSubConfig](interfaces/pubsubconfig.md), Server\> = fp(pubSubFastifyPluginAsync, '3.x')

## Functions

### createPubSubCloudFunctions

▸ **createPubSubCloudFunctions**<T\>(`handler`: [PubSubHandler](README.md#pubsubhandler)<T\>, `options?`: [PubSubCloudFunctionsConfig](README.md#pubsubcloudfunctionsconfig)): [CloudFunctionFun](README.md#cloudfunctionfun)

#### Type parameters:

Name | Default |
------ | ------ |
`T` | unknown |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`handler` | [PubSubHandler](README.md#pubsubhandler)<T\> | - |
`options` | [PubSubCloudFunctionsConfig](README.md#pubsubcloudfunctionsconfig) | {} |

**Returns:** [CloudFunctionFun](README.md#cloudfunctionfun)

___

### createPubSubRequest

▸ **createPubSubRequest**(`input`: unknown, `stringify?`: boolean): [PubSubRequestType](README.md#pubsubrequesttype)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | unknown | - |
`stringify` | boolean | true |

**Returns:** [PubSubRequestType](README.md#pubsubrequesttype)

___

### createPubSubServer

▸ **createPubSubServer**<T\>(`handler`: [PubSubHandler](README.md#pubsubhandler)<T\>, `config?`: [PubSubServerConfig](interfaces/pubsubserverconfig.md)): [CreatePubSubHandlerResponse](interfaces/createpubsubhandlerresponse.md)

#### Type parameters:

Name | Default |
------ | ------ |
`T` | unknown |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`handler` | [PubSubHandler](README.md#pubsubhandler)<T\> | - |
`config` | [PubSubServerConfig](interfaces/pubsubserverconfig.md) | {} |

**Returns:** [CreatePubSubHandlerResponse](interfaces/createpubsubhandlerresponse.md)

___

### createPubSubdata

▸ **createPubSubdata**(`input`: unknown, `stringify?`: boolean): [PubSubMessageType](README.md#pubsubmessagetype)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`input` | unknown | - |
`stringify` | boolean | true |

**Returns:** [PubSubMessageType](README.md#pubsubmessagetype)

___

### handlePubSubMessage

▸ **handlePubSubMessage**(`args`: [HandlePubSubMessageArgs](interfaces/handlepubsubmessageargs.md)): Promise<[PubSubHandlerResponse](classes/pubsubhandlerresponse.md) \| void\>

#### Parameters:

Name | Type |
------ | ------ |
`args` | [HandlePubSubMessageArgs](interfaces/handlepubsubmessageargs.md) |

**Returns:** Promise<[PubSubHandlerResponse](classes/pubsubhandlerresponse.md) \| void\>

___

### pubSubFastifyPluginAsync

▸ `Const`**pubSubFastifyPluginAsync**(`fastify`: FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance\>, `options`: [PubSubConfig](interfaces/pubsubconfig.md)): Promise<void\>

#### Parameters:

Name | Type |
------ | ------ |
`fastify` | FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance\> |
`options` | [PubSubConfig](interfaces/pubsubconfig.md) |

**Returns:** Promise<void\>
