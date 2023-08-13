[pubsub-http-handler](../README.md) / PubSubConfig

# Interface: PubSubConfig<Data, Context\>

## Type parameters

| Name |
| :------ |
| `Data` |
| `Context` |

## Hierarchy

- **`PubSubConfig`**

  ↳ [`PubSubCloudFunctionsConfig`](PubSubCloudFunctionsConfig.md)

  ↳ [`PubSubHandlerFastifyConfig`](PubSubHandlerFastifyConfig.md)

## Table of contents

### Properties

- [context](PubSubConfig.md#context)
- [onError](PubSubConfig.md#onerror)
- [parseJson](PubSubConfig.md#parsejson)
- [parser](PubSubConfig.md#parser)
- [path](PubSubConfig.md#path)

## Properties

### context

• `Optional` **context**: () => `Context` \| `Promise`<`Context`\>

#### Type declaration

▸ (): `Context` \| `Promise`<`Context`\>

##### Returns

`Context` \| `Promise`<`Context`\>

#### Defined in

[src/types.ts:57](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L57)

___

### onError

• `Optional` **onError**: [`OnErrorHandler`](../README.md#onerrorhandler)<`Context`\>

OnError Handler

When this is set, errors will not be
thrown.

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

#### Defined in

[src/types.ts:71](https://github.com/simenandre/pubsub-http-handler/blob/main/src/types.ts#L71)
