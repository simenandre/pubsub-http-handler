import { FastifyPluginAsync } from 'fastify';
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
      let hasAcked = false;
      try {
        if (options.alwaysAck) {
          reply.code(204).send();
          hasAcked = true;
        }

        const res = await handlePubSubMessage({
          message: req.body.message,
          handler,
          parseJson,
          context: req.body,
        });

        if (!hasAcked) {
          reply.code((res && res.statusCode) || 204).send();
        }
      } catch (error) {
        if (onError) {
          await onError(error);
          reply.code(204).send();
        } else {
          throw error;
        }
      }
    },
  );
};

export const pubSubFastifyPlugin = fp(pubSubFastifyPluginAsync, '3.x');
