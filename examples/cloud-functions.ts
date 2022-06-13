import { createPubSubCloudFunctions } from '../src';

export interface HelloWorld {
  name: string;
}

export const helloHttp = createPubSubCloudFunctions<HelloWorld>(
  ({ data, log }) => {
    log.info(`Hello, ${data.name}`);
  },
);
