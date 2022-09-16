import type * as express from 'express';
import pino from 'pino';
import { gcpLogOptions } from 'pino-cloud-logging';
import { handlePubSubMessage } from '../common';
import { PubSubConfig, PubSubHandler } from '../types';

export interface PubSubCloudFunctionsConfig<Data, Context>
  extends Omit<PubSubConfig<Data, Context>, 'handler' | 'path'> {
  logger?: pino.LoggerOptions;
}

export type CloudFunctionFun = (
  req: express.Request,
  res: express.Response,
) => Promise<void>;

export function createPubSubCloudFunctions<Data = unknown, Context = unknown>(
  handler: PubSubHandler<Data, Context>,
  options: PubSubCloudFunctionsConfig<Data, Context> = {},
): CloudFunctionFun {
  const { parseJson, onError, logger } = options;
  return async (req, res): Promise<void> => {
    const context: Context = req.body;
    try {
      await handlePubSubMessage({
        message: req.body.message,
        handler,
        context,
        parseJson,
        log: pino(gcpLogOptions(logger)),
      });

      res.status(200).send();
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
