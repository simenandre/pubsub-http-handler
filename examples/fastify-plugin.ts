import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import Fastify from 'fastify';
import { PubSubHandler, pubSubFastifyPlugin } from '../src';

interface HandlerArguments {
  name: string;
  party: {
    name: string;
  };
  bookingId: string;
}

const server = () => {
  const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>();

  const handler: PubSubHandler<HandlerArguments> = ({ data, log }) => {
    const { name, party, bookingId } = data;
    log.info(`${name} from ${party.name} had a booking with id ${bookingId}`);
  };

  fastify.register(pubSubFastifyPlugin, { handler });

  fastify.server.listen(8000);
};

server();
