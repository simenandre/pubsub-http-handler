import { Static, Type } from '@sinclair/typebox';
import Fastify, {
  FastifyInstance,
  FastifyLoggerOptions,
  FastifyServerOptions,
} from 'fastify';

export const PubSubMessage = Type.Object({
  message: Type.Object({
    attributes: Type.Unknown(),
    data: Type.String(),
    messageId: Type.Optional(Type.String()),
  }),
  subscription: Type.String(),
});

export type PubSubMessageType = Static<typeof PubSubMessage>;

export class PubSubHandlerResponse {
  statusCode?: number;
}

export type PubSubHandler<T = unknown> = (args: {
  message: PubSubMessageType;
  data?: T;
}) => Promise<PubSubHandlerResponse | void> | PubSubHandlerResponse | void;

export interface PubSubConfig {
  /**
   * Use this to set a different path
   * @default /
   */
  path?: string;
  /**
   * **Tip**: `false` when sending strings
   * @default true
   */
  parseJson?: boolean; // Defaults to true
  /**
   * Will automatically pick up PORT environment variable.
   * @default 8000
   */
  port?: number;
  /**
   * @default 0.0.0.0
   */
  address?: string;
  /**
   * Read more here: https://www.fastify.io/docs/latest/Server/
   */
  fastifyConfig?: FastifyServerOptions;
}

export interface CreatePubSubHandlerResponse {
  listen: () => Promise<void>;
  fastify: FastifyInstance;
}

export function createPubSubHandler<T = unknown>(
  handler: PubSubHandler<T>,
  config: PubSubConfig = {},
): CreatePubSubHandlerResponse {
  const {
    fastifyConfig,
    port = process.env.PORT || 8000,
    address = '0.0.0.0',
    parseJson = true,
  } = config;

  const fastify = Fastify({
    ...fastifyConfig,
  });

  fastify.post<{
    Body: PubSubMessageType;
  }>(
    '/',
    {
      schema: {
        body: PubSubMessage,
        response: { 204: {} },
      },
    },
    async (req, reply) => {
      const decodedMessage = Buffer.from(req.body.message.data, 'base64')
        .toString()
        .trim();
      let data: T;

      if (parseJson) {
        data = JSON.parse(decodedMessage) as T;
      }

      const res = await handler({
        message: req.body,
        data: data,
      });

      reply.code((res && res.statusCode) || 204);
      reply.send();
    },
  );

  return {
    async listen() {
      await fastify.listen(port, address);
    },
    fastify,
  };
}
