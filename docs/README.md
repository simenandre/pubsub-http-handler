**[pubsub-handler](README.md)**

> Globals

# pubsub-handler

## Index

### Classes

* [PubSubHandlerResponse](classes/pubsubhandlerresponse.md)

### Interfaces

* [CreatePubSubHandlerResponse](interfaces/createpubsubhandlerresponse.md)
* [PubSubConfig](interfaces/pubsubconfig.md)

### Type aliases

* [PubSubHandler](README.md#pubsubhandler)
* [PubSubMessageType](README.md#pubsubmessagetype)

### Variables

* [PubSubMessage](README.md#pubsubmessage)

### Functions

* [createPubSubHandler](README.md#createpubsubhandler)

## Type aliases

### PubSubHandler

Ƭ  **PubSubHandler**<T\>: (args: { data?: T ; message: [PubSubMessageType](README.md#pubsubmessagetype)  }) => Promise<[PubSubHandlerResponse](classes/pubsubhandlerresponse.md) \| void\> \| [PubSubHandlerResponse](classes/pubsubhandlerresponse.md) \| void

#### Type parameters:

Name | Default |
------ | ------ |
`T` | unknown |

___

### PubSubMessageType

Ƭ  **PubSubMessageType**: Static<*typeof* [PubSubMessage](README.md#pubsubmessage)\>

## Variables

### PubSubMessage

• `Const` **PubSubMessage**: TObject<{ message: TObject<{ attributes: TUnknown = Type.Unknown(); data: TString = Type.String(); messageId: TOptional<TString\> = Type.Optional(Type.String()) }\> = Type.Object({
    attributes: Type.Unknown(),
    data: Type.String(),
    messageId: Type.Optional(Type.String()),
  }); subscription: TString = Type.String() }\> = Type.Object({ message: Type.Object({ attributes: Type.Unknown(), data: Type.String(), messageId: Type.Optional(Type.String()), }), subscription: Type.String(),})

## Functions

### createPubSubHandler

▸ **createPubSubHandler**<T\>(`handler`: [PubSubHandler](README.md#pubsubhandler)<T\>, `config?`: [PubSubConfig](interfaces/pubsubconfig.md)): [CreatePubSubHandlerResponse](interfaces/createpubsubhandlerresponse.md)

#### Type parameters:

Name | Default |
------ | ------ |
`T` | unknown |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`handler` | [PubSubHandler](README.md#pubsubhandler)<T\> | - |
`config` | [PubSubConfig](interfaces/pubsubconfig.md) | {} |

**Returns:** [CreatePubSubHandlerResponse](interfaces/createpubsubhandlerresponse.md)
