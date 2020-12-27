import { PubSubHandler, createPubSubHandler } from '../src';

interface HandlerArguments {
  name: string;
  party: {
    name: string;
  };
  bookingId: string;
}

const server = async () => {
  const handler: PubSubHandler<HandlerArguments> = ({ data }) => {
    const { name, party, bookingId } = data;
    console.log(
      `${name} from ${party.name} had a booking with id ${bookingId}`,
    );
  };

  await createPubSubHandler(handler);
};

server().then(console.log).catch(console.error);
