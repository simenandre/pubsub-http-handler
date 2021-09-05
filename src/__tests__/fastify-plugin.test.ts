import fastify, { FastifyInstance } from 'fastify';
import { pubSubFastifyPlugin } from '../methods/fastify-plugin';
import { createPubSubRequest } from './fixtures';

describe('fastify-plugin', () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    app = fastify();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should forward requests', async () => {
    const handler = jest.fn();
    const payload = createPubSubRequest('forward me');

    app.register(pubSubFastifyPlugin, { handler });

    const res = await app.inject({
      method: 'POST',
      url: '/',
      payload,
    });

    expect(res.statusCode).toBe(204);
    expect(handler).toHaveBeenCalledWith({
      message: payload.message,
      data: 'forward me',
      context: JSON.parse(JSON.stringify(payload)),
    });
  });

  it('should forward statusCode', async () => {
    const handler = jest.fn(() => ({ statusCode: 404 }));
    const payload = createPubSubRequest('forward me');

    app.register(pubSubFastifyPlugin, { handler });

    const res = await app.inject({
      method: 'POST',
      url: '/',
      payload,
    });

    expect(res.statusCode).toBe(404);
    expect(handler).toHaveBeenCalledWith({
      message: payload.message,
      data: 'forward me',
      context: JSON.parse(JSON.stringify(payload)),
    });
  });

  it('should return onError on throw', async () => {
    const handler = () => {
      throw new Error('error');
    };
    const onError = jest.fn();
    const payload = createPubSubRequest('forward me');

    app.register(pubSubFastifyPlugin, { handler, onError });

    await app.inject({
      method: 'POST',
      url: '/',
      payload,
    });

    expect(onError).toHaveBeenCalledWith(new Error('error'));
  });

  it('should not return onError on throw', async () => {
    const handler = () => {
      throw new Error('error');
    };
    const payload = createPubSubRequest('forward me');

    app.register(pubSubFastifyPlugin, { handler });

    const res = await app.inject({
      method: 'POST',
      url: '/',
      payload,
    });

    expect(res.payload).toMatchInlineSnapshot(
      `"{\\"statusCode\\":500,\\"error\\":\\"Internal Server Error\\",\\"message\\":\\"error\\"}"`,
    );
  });
});
