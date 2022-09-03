import { PubSubConfig, PubSubRequestType } from './types';

export const makePubSubConfig = <Data, Context>(
  data: PubSubConfig<Data, Context>,
): PubSubConfig<Data, Context> => {
  return data;
};

export const makeMockPubSubMessage = (
  payload: unknown,
  jsonStringify = true,
): PubSubRequestType => {
  const data = Buffer.from(
    jsonStringify ? JSON.stringify(payload) : (payload as string),
  ).toString('base64');

  return {
    message: { data, messageId: 'mock' },
    subscription: 'mocked-subscription',
  };
};
