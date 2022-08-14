import { any, z } from 'zod';

const inputData = z.object({
  name: z.string(),
  party: z.object({
    name: z.string(),
  }),
  bookingId: z.string(),
});

type UndefinedToUnknown<T> = [T] extends [undefined] ? unknown : T;

interface Hello<T> {
  handler: (data: T) => void;
  parser: (data: unknown) => T;
}

const makeHello = <T>(config: Hello<T>) => {};

export const hello = makeHello({
  parser: d => inputData.parse(d),
  handler: data => {
    const { name, party, bookingId } = data;
  },
});
