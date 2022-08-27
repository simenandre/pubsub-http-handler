import { PubSubConfig } from './types';

export const makePubSubConfig = <Data, Context>(
  data: PubSubConfig<Data, Context>,
): PubSubConfig<Data, Context> => {
  return data;
};
