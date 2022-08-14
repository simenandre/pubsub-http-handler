import pino from 'pino';
import { gcpLogOptions } from 'pino-cloud-logging';
import { HandlePubSubMessageArgs, PubSubHandlerResponse } from './types';

export async function handlePubSubMessage<Data, Context>(
  args: HandlePubSubMessageArgs<Data, Context>,
): Promise<PubSubHandlerResponse | void> {
  const {
    message,
    parseJson = true,
    parser,
    handler,
    context,
    log = pino(gcpLogOptions()),
  } = args;
  const bufferString = Buffer.from(message.data, 'base64').toString().trim();

  let data = parseJson ? JSON.parse(bufferString) : bufferString;

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
