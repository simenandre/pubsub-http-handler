# PubSub HTTP Handler

![PubSub HTTP Handler](.github/header.jpg)

PubSub HTTP Handler is a simple Typescript/Javascript package that solves
serving an HTTP endpoint that can consume PubSub messages. To do this task we
utilize the [Fastify][] framework or Google Cloud Functions.

This package was built so that when creating microservices that subscribe to a
PubSub-topic, we don't have to implement a server or validate the request.

## Quickstart

```shell
▶ yarn add pubsub-http-handler
```

## Example with Fastify Server

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

## Example with Google Cloud Functions

```typescript
import { pubSubCloudFunction, PubSubHandler } from 'pubsub-http-handler';

interface MyHandler {
  hello: string;
  world: string;
}

export const helloWorld = createPubSubCloudFunctions<MyHandler>(
  ({ data, log }) => {
    log.info(`Hello, ${data.name}`);
  },
);
```

Read more about [configuration here][configuration] or check out the [API
documentation][docs]

## Options

- `onError` (function, default is undefined). Use to ensure that the function
  doesn't throw. **Warning:** Using this option will make the function return
  `204` regardless.

- `parseJson` (boolean, default is `true`). When set to true, uses `JSON.parse`
  to parse the data sent through PubSub.

- `parser` (function, optional). This option can be used to parse data coming
  from PubSub. The function must return data (this data is passed to the
  handler, as `data`). You can optionally throw an exception if the data could
  not be parsed, which in turn can be caught by `onError` if you'd like.

We export a function called `makePubSubConfig` to help with type inference. This
is basicly a function that lets you return a function while using `parser`,
which is returned in `handler`. If you know a way for the types to work without
using a function like this, we would love a pull request!

## Contributing

We love contributions! 🙏 Bug reports and pull requests are welcome on [GitHub].

[banner]: ./assets/banner.jpg
[npm]: https://www.npmjs.com/package/pubsub-http-handler
[fastify]: https://www.fastify.io/
[configuration]: ./docs/interfaces/pubsubconfig.md
[docs]: ./docs/
[github]: https://github.com/cobraz/pubsub-http-handler/issues
