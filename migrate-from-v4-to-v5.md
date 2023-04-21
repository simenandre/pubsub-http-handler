# Migrate from v4 to v5

v5 is mainly a refactor of the codebase, to make it more maintainable and
improve developer experience. The API is the same, but we have officially
removed the `createPubSubServer`.

We also changed from using `@sinclair/typebox` to
`@fastify/type-provider-typebox` which probably will not affect most users, this
bumped `@sinclair/typebox` from `0.24` to `0.27`.

## Replacing `createPubSubServer` with Fastify instance

The reasoning behind removing `createPubSubServer` is that it was not really
needed. It was a function that created a `fastify` instance, and then returned a
`listen` function. The `fastify` instance can be created by the user with almost
the same amount of code.

### Before

```typescript
import { createPubSubServer, PubSubHandler } from 'pubsub-http-handler';

interface MyHandler {
  hello: string;
  world: string;
}

const server = async () => {
  const handler: PubSubHandler<MyHandler> = ({ message, data }) => {
    // `message` contains attributes, data (as string), messageId
    // `data` contains a base64 decoded JSON serialized object (type is MyHandler in the example)
    // ...
  };

  const { listen } = await createPubSubServer(handler);
  await listen();
};
```

### After

```typescript
import Fastify from 'fastify';
import { pubSubFastifyPlugin, PubSubHandler } from 'pubsub-http-handler';

interface MyHandler {
  hello: string;
  world: string;
}

const server = async () => {
  const handler: PubSubHandler<MyHandler> = ({ message, data }) => {
    // `message` contains attributes, data (as string), messageId
    // `data` contains a base64 decoded JSON serialized object (type is MyHandler in the example)
    // ...
  };

  const app = Fastify().withTypeProvider<TypeBoxTypeProvider>();

  app.register(pubSubFastifyPlugin, makePubSubConfig({ handler }));

  await app.listen(8000);
};
```
