import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { handlePubSubMessage } from '../common';
import { PubSubConfig, PubSubRequest, PubSubRequestType } from '../types';

const pubSubFastifyPluginAsync: FastifyPluginAsync<PubSubConfig> = async (
  fastify,
  options,
) => {
  const { path = '/', handler, parseJson } = options;
  fastify.post<{
    Body: PubSubRequestType;
  }>(
    path,
    {
      schema: {
        body: PubSubRequest,
        response: { 204: {} },
      },
    },
    async (req, reply) => {
      const res = await handlePubSubMessage({
        message: req.body.message,
        handler,
        parseJson,
        context: req.body,
      });

      reply.code((res && res.statusCode) || 204);
      reply.send();
    },
  );
};

export const pubSubFastifyPlugin = fp(pubSubFastifyPluginAsync, '3.x');
