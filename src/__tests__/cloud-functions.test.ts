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

  it('should run onError when thrown', async () => {
    const payload = createPubSubRequest('forward me');
    const handle = () => {
      throw new Error('error');
    };
    const onError = jest.fn();
    const send = jest.fn();
    const fun = await createPubSubCloudFunctions(handle, { onError });
    await fun(
      { body: payload } as any,
      ({ status: () => ({ send }) } as unknown) as any,
    );

    expect(onError).toHaveBeenCalledWith(new Error('error'));
  });

  it('should throw when onError is undefined', async () => {
    const payload = createPubSubRequest('forward me');
    const handle = () => {
      throw new Error('error');
    };
    const send = jest.fn();
    const fun = await createPubSubCloudFunctions(handle);

    await fun(
      { body: payload } as any,
      ({ status: () => ({ send }) } as unknown) as any,
    ).catch(e => expect(e.message).toBe('error'));
  });
});
