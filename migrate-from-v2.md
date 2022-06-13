# Migrate from v2

With Fastify v4, we've changed some of the API for the PubSubHandler and bumped
node to v16. Most of the changes aren't an issue for most users.

- Bumped node to v16
- Bumped fastify to v4
- The `address` attribute is changed to `host` to align with Fastify
- With `ajv` version 7 and above, `ajvTypeBoxPlugin` is required. (only required
  when using the Fastify plugin)
- Added `pino` logger to Cloud Functions
- Added `log` to handler (see example down below)

# Using `pubSubFastifyPlugin` in v3

```typescript
import Fastify from 'fastify';
import { ajvTypeBoxPlugin, TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { pubSubFastifyPlugin } from 'pubsub-http-handler';

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

  const fastify = Fastify({
    ajv: {
      plugins: [ajvTypeBoxPlugin],
    },
  }).withTypeProvider<TypeBoxTypeProvider>()

  fastify.register(pubSubFastifyPlugin)
  fastify.listen();
};
```

# Improved logging

The `handler` now comes with a `log` attribute which contains a `pino` instance.

```typescript
import {
  TypeBoxTypeProvider,
  ajvTypeBoxPlugin,
} from '@fastify/type-provider-typebox';
import Fastify from 'fastify';
import { PubSubHandler, pubSubFastifyPlugin } from '../src';

interface HandlerArguments {
  name: string;
  party: {
    name: string;
  };
  bookingId: string;
}

const server = () => {
  const fastify = Fastify({
    ajv: {
      plugins: [ajvTypeBoxPlugin],
    },
  }).withTypeProvider<TypeBoxTypeProvider>();

  const handler: PubSubHandler<HandlerArguments> = ({ data, log }) => {
    const { name, party, bookingId } = data;
    log.info(`${name} from ${party.name} had a booking with id ${bookingId}`);
  };

  fastify.register(pubSubFastifyPlugin, { handler });

  fastify.server.listen(8000);
};

server();
```
