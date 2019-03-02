import { createQueryString } from '../api';

describe('api', () => {
  describe('createQueryString', () => {
    it('should create correct query parametars url string', () => {
      const queryParams = {
        firstName: 'Sava',
        lastName: 'Lazic',
      };
      expect(createQueryString(queryParams)).toEqual(
        '?firstName=Sava&lastName=Lazic',
      );
    });
  });
});
