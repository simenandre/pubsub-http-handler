import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import Fastify from 'fastify';
import { z } from 'zod';
import { pubSubFastifyPlugin } from '../src';

const inputData = z.object({
  name: z.string(),
  party: z.object({
    name: z.string(),
  }),
  bookingId: z.string(),
});

const server = () => {
  const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>();

  fastify.register(pubSubFastifyPlugin, {
    parser: d => inputData.parse(d),
    handler: ({ data, log }) => {
      const { name, party, bookingId } = data;
      log.info(`${name} from ${party.name} had a booking with id ${bookingId}`);
    },
  });

  fastify.server.listen(8000);
};

server();
