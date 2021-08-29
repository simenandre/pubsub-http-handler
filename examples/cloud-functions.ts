import { createPubSubCloudFunctions } from '../src';

export interface HelloWorld {
  name: string;
}

export const helloHttp = createPubSubCloudFunctions<HelloWorld>(({ data }) => {
  console.log(`Hello, ${data.name}`);
});
