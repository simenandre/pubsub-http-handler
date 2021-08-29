import Fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import { PubSubConfig, PubSubHandler } from '../types';
import { pubSubFastifyPlugin } from './fastify-plugin';

export interface PubSubServerConfig extends Omit<PubSubConfig, 'handler'> {
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

export function createPubSubServer<T = unknown>(
  handler: PubSubHandler<T>,
  config: PubSubServerConfig = {},
): CreatePubSubHandlerResponse {
  const {
    fastifyConfig,
    port = process.env.PORT || 8000,
    address = '0.0.0.0',
    parseJson = true,
    path = '/',
  } = config;

  const fastify = Fastify({
    ...fastifyConfig,
  });

  fastify.register(pubSubFastifyPlugin, { handler, parseJson, path });

  return {
    async listen() {
      await fastify.listen(port, address);
    },
    fastify,
  };
}
