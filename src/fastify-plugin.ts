import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { FastifyBaseLogger, FastifyInstance, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import { handlePubSubMessage } from './common';
import { PubSubConfig, PubSubHandler, pubSubRequestSchema } from './types';

export interface PubSubHandlerFastifyConfig<Data, Context>
  extends PubSubConfig<Data, Context> {
  handler: PubSubHandler<Data, Context, FastifyBaseLogger>;

  context?: (req?: FastifyRequest) => Context | Promise<Context>;
}

const pubSubFastifyPluginFn = async <Data, Context>(
  fastify: FastifyInstance,
  options: PubSubHandlerFastifyConfig<Data, Context>,
): Promise<void> => {
  const fastifyTypeBox = fastify.withTypeProvider<TypeBoxTypeProvider>();
  const { path = '/', handler, parseJson, onError, parser } = options;
  fastifyTypeBox.post(
    path,
    {
      schema: {
        body: pubSubRequestSchema,
        response: { 204: {} },
      },
    },
    async (req, reply) => {
      const context = options.context
        ? await options.context(req)
        : ({ req } as Context);

      try {
        const res = await handlePubSubMessage<Data, Context, FastifyBaseLogger>(
          {
            parser,
            message: req.body.message,
            handler,
            parseJson,
            context,
            log: req.log,
          },
        );

        return reply.code(res?.statusCode || 204).send();
      } catch (error) {
        if (onError) {
          await onError(error, context);
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
