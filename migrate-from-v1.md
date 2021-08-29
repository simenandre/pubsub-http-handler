# Migrate from v1

Version 1 had a function called `createPubSubHandler`, which is removed in
version 2. This function gave a full-working `fastify` instance, which is now
available as the function `createPubSubServer`.

## Before

```typescript
import { createPubSubHandler, PubSubHandler } from 'pubsub-http-handler';

interface MyHandler {
  hello: string;
  world: string;
}

const server = async () => {
  const handler: PubSubHandler<MyHandler> = ({ message, data }) => {
    // `message` contains attributes, data (as string), messageId
    // `data` contains a base64 decoded JSON serialized object (type is MyHandler in the example)

    ...
  };

  const { listen } = createPubSubHandler(handler);
  await listen();
};
```

## After

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

    ...
  };

  const { listen } = createPubSubServer(handler);
  await listen();
};
```

Good luck!
