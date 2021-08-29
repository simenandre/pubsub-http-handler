import { createPubSubCloudFunctions } from '../methods/cloud-functions';
import { createPubSubRequest } from './fixtures';
import type * as express from 'express';

describe('cloud functions', () => {
  it('should forward requests', async () => {
    const handler = jest.fn();
    const send = jest.fn();
    const payload = createPubSubRequest('forward me');

    const fun = createPubSubCloudFunctions(handler);
    await fun(
      { body: payload } as express.Request,
      ({ status: () => ({ send }) } as unknown) as express.Response,
    );

    expect(handler).toHaveBeenCalledWith({
      message: payload.message,
      data: 'forward me',
      context: JSON.parse(JSON.stringify(payload)),
    });
  });
});
