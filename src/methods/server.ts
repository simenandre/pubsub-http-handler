import { ajvTypeBoxPlugin } from '@fastify/type-provider-typebox';
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
  host?: string;

  /**
   * @default 0.0.0.0
   * @deprecated `address` will be removed in next major release. Please use `host` instead.
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
  let { host = '0.0.0.0' } = config;
  const {
    fastifyConfig,
    port = Number(process.env.PORT) || 8000,
    address,
    parseJson = true,
    path = '/',
    onError,
  } = config;

  if (address) {
    host = address;
  }

  const fastify = Fastify({
    ...fastifyConfig,
    ajv: {
      plugins: [ajvTypeBoxPlugin],
    },
  });

  fastify.register(pubSubFastifyPlugin, { handler, parseJson, path, onError });

  return {
    async listen() {
      await fastify.listen({ port, host });
    },
    fastify,
  };
}
