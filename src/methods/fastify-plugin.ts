import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { handlePubSubMessage } from '../common';
import { PubSubConfig, PubSubRequest, PubSubRequestType } from '../types';

const pubSubFastifyPluginFn = async <Data, Context>(
  fastify: FastifyInstance,
  options: PubSubConfig<Data, Context>,
): Promise<void> => {
  const { path = '/', handler, parseJson, onError, parser } = options;
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
        const res = await handlePubSubMessage<Data, Context>({
          parser,
          message: req.body.message,
          handler,
          parseJson,
          // context: req,
          log: req.log,
        });

        return reply.code(res?.statusCode || 204).send();
      } catch (error) {
        if (onError) {
          await onError(error);
          return reply.code(204).send();
        } else throw error;
      }
    },
  );
};

export const pubSubFastifyPlugin = fp(pubSubFastifyPluginFn, {
  name: 'pubsub-http-handler',
  fastify: '4.x',
});
