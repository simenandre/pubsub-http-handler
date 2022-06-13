import { PubSubHandler, createPubSubServer } from '../src';

interface HandlerArguments {
  name: string;
  party: {
    name: string;
  };
  bookingId: string;
}

const server = async () => {
  const handler: PubSubHandler<HandlerArguments> = ({ data, log }) => {
    const { name, party, bookingId } = data;
    log.info(`${name} from ${party.name} had a booking with id ${bookingId}`);
  };

  await createPubSubServer(handler);
};

server();
