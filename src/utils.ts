import { PubSubHandlerFastifyConfig } from './fastify-plugin';

export const makePubSubConfig = <Data, Context>(
  data: PubSubHandlerFastifyConfig<Data, Context>,
): PubSubHandlerFastifyConfig<Data, Context> => {
  return data;
};
