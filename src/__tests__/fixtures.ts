import { PubSubRequest, pubSubRequestSchema } from '../types';
import { JSONSchemaFaker } from 'json-schema-faker';

export function createPubSubRequest(
  input: unknown,
  stringify = true,
): PubSubRequest {
  const data = JSONSchemaFaker.generate(pubSubRequestSchema) as PubSubRequest;
  data.message.data = Buffer.from(
    stringify ? JSON.stringify(input) : (input as string),
  ).toString('base64');
  return data;
}
