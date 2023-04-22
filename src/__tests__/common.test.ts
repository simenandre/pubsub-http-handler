import { handlePubSubMessage } from '../common';
import { JSONSchemaFaker } from 'json-schema-faker';
import { PubSubMessage, pubSubMessageSchema } from '../types';
import pino from 'pino';

function createPubSubdata(input: unknown, stringify = true): PubSubMessage {
  const message = JSONSchemaFaker.generate(
    pubSubMessageSchema,
  ) as PubSubMessage;
  const data = Buffer.from(
    stringify ? JSON.stringify(input) : (input as string),
  ).toString('base64');
  return {
    ...message,
    data,
  };
}

describe('common', () => {
  it('should handle simple PubSub messages', async () => {
    const message = createPubSubdata('hello-world', false);
    const handler = jest.fn();

    await handlePubSubMessage({
      message,
      handler,
      parseJson: false,
      context: {},
      log: {} as pino.Logger,
    });
    expect(handler).toHaveBeenCalledWith({
      message,
      data: 'hello-world',
      context: {},
      log: {},
    });
  });
  it('should handle JSON PubSub messages', async () => {
    const message = createPubSubdata({ name: 'Simen' });
    const handler = jest.fn();

    await handlePubSubMessage({
      message,
      handler,
      parseJson: true,
      context: {},
      log: {} as pino.Logger,
    });
    expect(handler).toHaveBeenCalledWith({
      message,
      data: { name: 'Simen' },
      context: {},
      log: {},
    });
  });

  it('should pass context', async () => {
    const message = createPubSubdata('');
    const handler = jest.fn();

    await handlePubSubMessage({
      message,
      handler,
      context: { hello: 'there' },
      log: {} as pino.Logger,
    });
    expect(handler).toHaveBeenCalledWith({
      message,
      data: '',
      context: { hello: 'there' },
      log: {} as pino.Logger,
    });
  });

  it('should run parser', async () => {
    const message = createPubSubdata({}, true);
    const handler = jest.fn();
    const parser = jest.fn(_ => '');

    await handlePubSubMessage({
      message,
      handler,
      parser: data => parser(data),
      context: {},
      log: {} as pino.Logger,
    });

    expect(handler).toHaveBeenCalledWith({
      message,
      data: '',
      context: {},
      log: {} as pino.Logger,
    });

    expect(parser).toHaveBeenCalledWith({});
  });

  it('should throw when parser fails', async () => {
    const message = createPubSubdata({}, true);
    const handler = jest.fn();
    const parser = jest.fn(_ => {
      throw new Error('error');
    });

    const result = () => {
      return handlePubSubMessage({
        message,
        handler,
        parser: data => parser(data),
        context: {},
        log: {} as pino.Logger,
      });
    };

    await expect(result).rejects.toThrowErrorMatchingInlineSnapshot(`"error"`);
  });
});
