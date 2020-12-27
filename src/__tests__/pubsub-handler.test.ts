import Fastify, { FastifyInstance } from 'fastify';
import * as jsf from 'json-schema-faker';
import {
  createPubSubHandler,
  CreatePubSubHandlerResponse,
  PubSubMessage,
} from '..';

describe('pubsub-handler', () => {
  const handler = jest.fn();

  let server: CreatePubSubHandlerResponse;

  afterAll(async () => {
    await server.fastify.close();
  });

  it('should construct', () => {
    server = createPubSubHandler(handler);
    expect(server).toBeTruthy();
  });

  it('should forward requests', async () => {
    server = createPubSubHandler(handler, { parseJson: true });
    const payload = jsf.generate(PubSubMessage);
    payload.message.data = Buffer.from(JSON.stringify({})).toString('base64');

    await server.fastify.inject({
      method: 'POST',
      url: '/',
      payload,
    });

    expect(handler).toHaveBeenCalled();
  });

  it('should start listening', async () => {
    server = createPubSubHandler(handler, { port: 8123 });
    server.fastify.listen = jest.fn();
    server.fastify.ready(() => server.fastify.close());
    await server.listen();
    expect(server.fastify.listen).toHaveBeenCalled();
  });

  it('should parse simple text', async () => {
    server = createPubSubHandler(handler, { parseJson: false });
    const payload = jsf.generate(PubSubMessage);
    payload.message.data = Buffer.from(JSON.stringify('hello-world')).toString(
      'base64',
    );

    await server.fastify.inject({
      method: 'POST',
      url: '/',
      payload,
    });

    expect(handler).toHaveBeenCalled();
  });

  it('should return status code', async () => {
    const successHandler = jest.fn(() => ({ statusCode: 200 }));
    server = createPubSubHandler(successHandler, { parseJson: false });

    const payload = jsf.generate(PubSubMessage);
    payload.message.data = Buffer.from(JSON.stringify('hello-world')).toString(
      'base64',
    );

    const { statusCode } = await server.fastify.inject({
      method: 'POST',
      url: '/',
      payload,
    });

    expect(successHandler).toHaveBeenCalled();
    expect(statusCode).toBe(200);
  });

  it('should handle env vars', async () => {
    process.env.PORT = '8124';
    server = createPubSubHandler(handler);
    server.fastify.listen = jest.fn();
    server.fastify.ready(() => server.fastify.close());
    await server.listen();
    expect(server.fastify.listen).toHaveBeenCalledWith('8124', '0.0.0.0');
  });

  it('should be possible to configure port', async () => {
    server = createPubSubHandler(handler, { port: 8120 });
    server.fastify.listen = jest.fn();
    server.fastify.ready(() => server.fastify.close());
    await server.listen();
    expect(server.fastify.listen).toHaveBeenCalledWith(8120, '0.0.0.0');
  });

  it('should be possible to configure address', async () => {
    server = createPubSubHandler(handler, { port: 8120, address: '127.0.0.1' });
    server.fastify.listen = jest.fn();
    server.fastify.ready(() => server.fastify.close());
    await server.listen();
    expect(server.fastify.listen).toHaveBeenCalledWith(8120, '127.0.0.1');
  });

  it('should be possible to configure logger', async () => {
    const fSpy = jest.spyOn<any, any>(Fastify, 'default');
    fSpy.mockImplementationOnce(() => ({ post: jest.fn() }));
    createPubSubHandler(handler, { fastifyConfig: { logger: true } });
    expect(fSpy).toHaveBeenCalledWith({
      logger: true,
    });
  });
});
