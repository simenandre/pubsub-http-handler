import Fastify from 'fastify';
import { pubSubFastifyPlugin, PubSubHandler } from '../src';

interface HandlerArguments {
  name: string;
  party: {
    name: string;
  };
  bookingId: string;
}

const server = () => {
  const fastify = Fastify();

  const handler: PubSubHandler<HandlerArguments> = ({ data }) => {
    const { name, party, bookingId } = data;
    console.log(
      `${name} from ${party.name} had a booking with id ${bookingId}`,
    );
  };

  fastify.register(pubSubFastifyPlugin, { handler });

  fastify.server.listen(8000);
};

server();
