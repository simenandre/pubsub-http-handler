[pubsub-http-handler](../README.md) / PubSubConfig

# Interface: PubSubConfig

## Table of contents

### Properties

- [handler](PubSubConfig.md#handler)
- [onError](PubSubConfig.md#onerror)
- [parseJson](PubSubConfig.md#parsejson)
- [path](PubSubConfig.md#path)

## Properties

### handler

• **handler**: [`PubSubHandler`](../README.md#pubsubhandler)<`any`\>

Handler

#### Defined in

[types.ts:8](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L8)

___

### onError

• `Optional` **onError**: [`OnErrorHandler`](../README.md#onerrorhandler)

OnError Handler

When this is set, errors will not be
thrown.

#### Defined in

[types.ts:15](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L15)

___

### parseJson

• `Optional` **parseJson**: `boolean`

This will run JSON.parse on request data

**Tip**: `false` when sending strings

**`default`** true

#### Defined in

[types.ts:22](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L22)

___

### path

• `Optional` **path**: `string`

Use this to set a different path

**`default`** /

#### Defined in

[types.ts:27](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/types.ts#L27)
