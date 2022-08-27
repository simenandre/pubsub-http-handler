import { makePubSubConfig } from '../utils';

describe('utils', () => {
  describe('makePubSubConfig', () => {
    it('should return input', () => {
      const input = {
        handler: () => {},
      };
      const out = makePubSubConfig(input);
      expect(out).toEqual(input);
    });
  });
});
