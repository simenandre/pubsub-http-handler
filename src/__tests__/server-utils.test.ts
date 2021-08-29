import { createPubSubServer } from '../methods/server';

const listen = jest.fn();
jest.mock('fastify', () => ({
  __esModule: true,
  default: jest.fn(() => ({ register: () => {}, listen })),
}));

describe('server', () => {
  it('should listen', async () => {
    jest.doMock('fastify');
    const handler = jest.fn();
    const server = createPubSubServer(handler);
    await server.listen();
    expect(listen).toHaveBeenCalled();
  });
});
