[pubsub-http-handler](../README.md) / PubSubCloudFunctionsConfig

# Interface: PubSubCloudFunctionsConfig

## Hierarchy

- `Omit`<[`PubSubConfig`](PubSubConfig.md), ``"handler"`` \| ``"path"``\>

  ↳ **`PubSubCloudFunctionsConfig`**

## Table of contents

### Properties

- [logger](PubSubCloudFunctionsConfig.md#logger)
- [onError](PubSubCloudFunctionsConfig.md#onerror)
- [parseJson](PubSubCloudFunctionsConfig.md#parsejson)

## Properties

### logger

• `Optional` **logger**: `LoggerOptions`

#### Defined in

[methods/cloud-functions.ts:9](https://github.com/cobraz/pubsub-http-handler/blob/d14dfe1/src/methods/cloud-functions.ts#L9)

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
