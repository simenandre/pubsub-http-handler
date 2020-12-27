**[pubsub-handler](../README.md)**

> [Globals](../README.md) / PubSubConfig

# Interface: PubSubConfig

## Hierarchy

* **PubSubConfig**

## Index

### Properties

* [address](pubsubconfig.md#address)
* [fastifyConfig](pubsubconfig.md#fastifyconfig)
* [parseJson](pubsubconfig.md#parsejson)
* [path](pubsubconfig.md#path)
* [port](pubsubconfig.md#port)

## Properties

### address

• `Optional` **address**: string

**`default`** 0.0.0.0

___

### fastifyConfig

• `Optional` **fastifyConfig**: FastifyServerOptions

Read more here: https://www.fastify.io/docs/latest/Server/

___

### parseJson

• `Optional` **parseJson**: boolean

**Tip**: `false` when sending strings

**`default`** true

___

### path

• `Optional` **path**: string

Use this to set a different path

**`default`** /

___

### port

• `Optional` **port**: number

Will automatically pick up PORT environment variable.

**`default`** 8000
