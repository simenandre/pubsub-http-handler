import {
  PubSubHandler,
  PubSubHandlerResponse,
  PubSubMessageType,
} from './types';

export interface HandlePubSubMessageArgs {
  message: PubSubMessageType;
  handler: PubSubHandler;
  parseJson?: boolean;
  context?: unknown;
}

export async function handlePubSubMessage(
  args: HandlePubSubMessageArgs,
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
