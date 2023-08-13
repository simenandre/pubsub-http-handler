import { PubSubHandler, PubSubHandlerResponse, PubSubMessage } from './types';

export interface HandlePubSubMessageArgs<Data, Context, Logger> {
  message: PubSubMessage;
  handler: PubSubHandler<Data, Context, Logger>;
  parseJson?: boolean;
  parser?: (data: unknown) => Data | Promise<Data>;
  context: Context;
  log: Logger;
}

export async function handlePubSubMessage<Data, Context, Logger>(
  args: HandlePubSubMessageArgs<Data, Context, Logger>,
): Promise<PubSubHandlerResponse | void> {
  const { message, parseJson = true, parser, handler, context, log } = args;
  const bufferString = Buffer.from(message.data, 'base64').toString().trim();

  let data = (parseJson ? JSON.parse(bufferString) : bufferString) as Data;

  if (parser) {
    data = await parser(data);
  }

  return handler({
    message,
    data,
    context,
    log,
  });
}
