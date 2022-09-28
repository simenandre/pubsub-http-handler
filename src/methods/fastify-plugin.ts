import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { FastifyInstance, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import { handlePubSubMessage } from '../common';
import { PubSubConfig, PubSubRequest } from '../types';

const pubSubFastifyPluginFn = async <Data = unknown>(
  fastify: FastifyInstance,
  options: PubSubConfig<Data, FastifyRequest>,
): Promise<void> => {
  const fastifyTypeBox = fastify.withTypeProvider<TypeBoxTypeProvider>();
  const { path = '/', handler, parseJson, onError, parser } = options;
  fastifyTypeBox.post(
    path,
    {
      schema: {
        body: PubSubRequest,
        response: { 204: {} },
      },
    },
    async (req, reply) => {
      try {
        const res = await handlePubSubMessage<Data, FastifyRequest>({
          parser,
          message: req.body.message,
          handler,
          parseJson,
          context: req,
          log: req.log,
        });

        return reply.code(res?.statusCode || 204).send();
      } catch (error) {
        if (onError) {
          await onError(error, req);
          return reply.code(204).send();
        } else {
          throw error;
        }
      }
    },
  );
};

export const pubSubFastifyPlugin = fp(pubSubFastifyPluginFn, {
  name: 'pubsub-http-handler',
  fastify: '4.x',
});
