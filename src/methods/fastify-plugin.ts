import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import { handlePubSubMessage } from '../common';
import { PubSubConfig, PubSubRequest, PubSubRequestType } from '../types';

const pubSubFastifyPluginAsync: FastifyPluginAsync<PubSubConfig> = async (
  fastify,
  options,
) => {
  const { path = '/', handler, parseJson, onError } = options;
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
      try {
        const res = await handlePubSubMessage<FastifyRequest>({
          message: req.body.message,
          handler,
          parseJson,
          context: req,
        });

        reply.code((res && res.statusCode) || 204);
      } catch (error) {
        if (onError) {
          await onError(error);
          reply.code(204);
        } else throw error;
      }
      reply.send();
    },
  );
};

export const pubSubFastifyPlugin = fp(pubSubFastifyPluginAsync, '3.x');
