import type * as express from 'express';
import pino from 'pino';
import { gcpLogOptions } from 'pino-cloud-logging';
import { handlePubSubMessage } from './common';
import { PubSubConfig, PubSubHandler } from './types';

export interface PubSubCloudFunctionsConfig<Data, Context>
  extends PubSubConfig<Data, Context> {
  logger?: pino.LoggerOptions;

  context?: (req?: express.Request) => Context | Promise<Context>;
}

export type CloudFunctionFun = (
  req: express.Request,
  res: express.Response,
) => Promise<void>;

export function createPubSubCloudFunctions<Data = unknown, Context = unknown>(
  handler: PubSubHandler<Data, Context, pino.Logger>,
  options: PubSubCloudFunctionsConfig<Data, Context> = {},
): CloudFunctionFun {
  const { parseJson, onError, logger } = options;
  return async (req, res): Promise<void> => {
    const context = options.context
      ? await options.context(req)
      : ({ req } as Context);
    try {
      const result = await handlePubSubMessage({
        message: req.body.message,
        handler,
        context,
        parseJson,
        log: pino(gcpLogOptions(logger)),
      });

      res.status(result?.statusCode ?? 200).send();
    } catch (error) {
      if (onError) {
        await onError(error, context);
        res.status(200).send();
      } else {
        throw error;
      }
    }
  };
}
