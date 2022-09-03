import { createPubSubServer } from '../methods/server';
import { makeMockPubSubMessage } from '../utils';

describe('server', () => {
  it('should forward requests', async () => {
    jest.clearAllMocks();
    const handler = jest.fn();
    const payload = makeMockPubSubMessage('forward me');
    const server = createPubSubServer(handler);

    const res = await server.fastify.inject({
      method: 'POST',
      url: '/',
      payload,
    });

    expect(res.statusCode).toBe(204);
    expect(handler).toHaveBeenCalled();
    // TODO: Get context value
    // expect(handler).toHaveBeenCalledWith({
    //   message: payload.message,
    //   data: 'forward me',
    //   context: JSON.parse(JSON.stringify(payload)),
    // });
  });
});
