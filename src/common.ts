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
}

export async function handlePubSubMessage<Context = unknown>(
  args: HandlePubSubMessageArgs<Context>,
): Promise<PubSubHandlerResponse | void> {
  const { message, parseJson = true, handler, context } = args;
  let data = Buffer.from(message.data, 'base64').toString().trim();

  if (parseJson) {
    data = JSON.parse(data);
  }

  return handler({
    message,
    data,
    context,
  });
}
