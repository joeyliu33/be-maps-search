import { getAuResults, validateRequest, validateResults } from '../validation';

describe('validation', () => {
  describe('validateRequest', () => {
    it('should return original reuqest when address exists', () => {
      const mockRequest = {
        address: 'Test Street',
      };

      const result = validateRequest(mockRequest);

      expect(result).toStrictEqual(mockRequest);
    });
    it('should throw error when address is empty string', () => {
      const mockRequest = {
        address: '',
      };

      expect(() => validateRequest(mockRequest)).toThrow(
        'Missing address in autoComplete request'
      );
    });
  });

  describe('getAuResults', () => {
    it('should true when address countryCode is AU', () => {
      const mockResult = {
        type: 'mockType',
        id: 'mockId',
        score: 1,
        dist: 1,
        info: 'mockInfo',
        address: {
          streetNumber: '123',
          streetName: 'Test Street',
          municipality: 'Test Municipality',
          neighbourhood: 'Test Neighbour',
          postalCode: '1234',
          countryCode: 'AU',
          country: 'Australia',
          freeformAddress: 'Test FreeFormAddress',
          localName: 'Test LocalName',
        },
      };

      const result = getAuResults(mockResult);

      expect(result).toBeTruthy();
    });
    it('should false when address countryCode is US', () => {
      const mockResult = {
        type: 'mockType',
        id: 'mockId',
        score: 1,
        dist: 1,
        info: 'mockInfo',
        address: {
          streetNumber: '123',
          streetName: 'Test Street',
          municipality: 'Test Municipality',
          neighbourhood: 'Test Neighbour',
          postalCode: '1234',
          countryCode: 'US',
          country: 'United States',
          freeformAddress: 'Test FreeFormAddress',
          localName: 'Test LocalName',
        },
      };

      const result = getAuResults(mockResult);

      expect(result).toBeFalsy();
    });
  });

  describe('validateResults', () => {
    it('should return valid results with address countryCode AU', () => {
      const mockResults = [
        {
          type: 'mockType',
          id: 'mockId',
          score: 1,
          dist: 1,
          info: 'mockInfo',
          address: {
            streetNumber: '123',
            streetName: 'Test Street',
            municipality: 'Test Municipality',
            neighbourhood: 'Test Neighbour',
            postalCode: '1234',
            countryCode: 'AU',
            country: 'Australia',
            freeformAddress: 'Test FreeFormAddress',
            localName: 'Test LocalName',
          },
        },
        {
          type: 'mockType',
          id: 'mockId',
          score: 1,
          dist: 1,
          info: 'mockInfo',
          address: {
            streetNumber: '123',
            streetName: 'Test Street',
            municipality: 'Test Municipality',
            neighbourhood: 'Test Neighbour',
            postalCode: '1234',
            countryCode: 'US',
            country: 'United States',
            freeformAddress: 'Test FreeFormAddress',
            localName: 'Test LocalName',
          },
        },
      ];

      const result = validateResults(mockResults);

      expect(result).toStrictEqual([
        {
          type: 'mockType',
          id: 'mockId',
          score: 1,
          dist: 1,
          info: 'mockInfo',
          address: {
            streetNumber: '123',
            streetName: 'Test Street',
            municipality: 'Test Municipality',
            neighbourhood: 'Test Neighbour',
            postalCode: '1234',
            countryCode: 'AU',
            country: 'Australia',
            freeformAddress: 'Test FreeFormAddress',
            localName: 'Test LocalName',
          },
        },
      ]);
    });
  });
});
