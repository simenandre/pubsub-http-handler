import { createPubSubCloudFunctions } from '../cloud-functions';
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
      { status: () => ({ send }) } as unknown as express.Response,
    );

    expect(handler).toHaveBeenCalled();
  });

  it('should run onError when thrown', async () => {
    const payload = createPubSubRequest('forward me');
    const handle = () => {
      throw new Error('error');
    };
    const onError = jest.fn();
    const send = jest.fn();
    const fun = createPubSubCloudFunctions(handle, {
      onError,
      context: () => ({ hello: 'world' }),
    });
    await fun(
      { body: payload } as any,
      { status: () => ({ send }) } as unknown as any,
    );

    expect(onError).toHaveBeenCalledWith(new Error('error'), {
      hello: 'world',
    });
  });

  it('should throw when onError is undefined', async () => {
    const payload = createPubSubRequest('forward me');
    const handle = () => {
      throw new Error('error');
    };
    const send = jest.fn();
    const fun = createPubSubCloudFunctions(handle);

    await fun(
      { body: payload } as any,
      { status: () => ({ send }) } as unknown as any,
    ).catch(e => expect(e.message).toBe('error'));
  });

  it('should return 200 by default', async () => {
    const payload = createPubSubRequest('forward me');
    const handle = () => {};
    const send = jest.fn();
    const statusFun = jest.fn(() => ({ send }));
    const fun = createPubSubCloudFunctions(handle);

    await fun({ body: payload } as any, { status: statusFun } as any);

    expect(statusFun).toBeCalledTimes(1);
    expect(statusFun).toHaveBeenCalledWith(200);
  });

  it('should return status code of handler', async () => {
    const payload = createPubSubRequest('forward me');
    const handle = () => ({ statusCode: 123 });
    const send = jest.fn();
    const statusFun = jest.fn(() => ({ send }));
    const fun = createPubSubCloudFunctions(handle);

    await fun({ body: payload } as any, { status: statusFun } as any);

    expect(statusFun).toBeCalledTimes(1);
    expect(statusFun).toHaveBeenCalledWith(123);
  });
});
