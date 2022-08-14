import fp from 'fastify-plugin';
import { handlePubSubMessage } from '../common';
import { PubSubConfig, PubSubRequest, PubSubRequestType } from '../types';

export const pubSubFastifyPlugin = fp<PubSubConfig<any, any>>(
  (fastify, options) => {
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
          const res = await handlePubSubMessage({
            message: req.body.message,
            handler,
            parseJson,
            // context: req,
            log: req.log,
          });

          reply.code(res?.statusCode || 204);
        } catch (error) {
          if (onError) {
            await onError(error);
            reply.code(204);
          } else throw error;
        }
        reply.send();
      },
    );
  },
  {
    fastify: '4.x',
    name: 'pubsub-http-handler',
  },
);
