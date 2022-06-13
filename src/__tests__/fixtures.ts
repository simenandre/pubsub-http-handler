import { PubSubRequest, PubSubRequestType } from '../types';
import jsf from 'json-schema-faker';

export function createPubSubRequest(
  input: unknown,
  stringify = true,
): PubSubRequestType {
  const data = jsf.generate(PubSubRequest) as PubSubRequestType;
  data.message.data = Buffer.from(
    stringify ? JSON.stringify(input) : (input as string),
  ).toString('base64');
  return data;
}
