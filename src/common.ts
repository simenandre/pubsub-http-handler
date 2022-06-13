import pino from 'pino';
import { gcpLogOptions } from './pino-config';
import {
  PubSubHandler,
  PubSubHandlerResponse,
  PubSubMessageType,
} from './types';

export interface HandlePubSubMessageArgs<Context = unknown> {
  message: PubSubMessageType;
  handler: PubSubHandler;
  parseJson?: boolean;
  context?: Context;
  log?: pino.Logger;
}

export async function handlePubSubMessage<Context = unknown>(
  args: HandlePubSubMessageArgs<Context>,
): Promise<PubSubHandlerResponse | void> {
  const {
    message,
    parseJson = true,
    handler,
    context,
    log = pino(gcpLogOptions()),
  } = args;
  let data = Buffer.from(message.data, 'base64').toString().trim();

  if (parseJson) {
    data = JSON.parse(data);
  }

  return handler({
    message,
    data,
    context,
    log,
  });
}
