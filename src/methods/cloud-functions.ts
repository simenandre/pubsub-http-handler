import { handlePubSubMessage } from '../common';
import { PubSubConfig, PubSubHandler } from '../types';
import type * as express from 'express';

export type PubSubCloudFunctionsConfig = Omit<PubSubConfig, 'handler' | 'path'>;

export type CloudFunctionFun = (
  req: express.Request,
  res: express.Response,
) => Promise<void>;

export function createPubSubCloudFunctions<T = unknown>(
  handler: PubSubHandler<T>,
  options: PubSubCloudFunctionsConfig = {},
): CloudFunctionFun {
  const { parseJson } = options;
  return async (req, res): Promise<void> => {
    await handlePubSubMessage({
      message: req.body.message,
      handler,
      context: req.body,
      parseJson,
    });
    res.status(200).send();
  };
}
