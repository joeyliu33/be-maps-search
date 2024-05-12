import { config } from 'dotenv';
import { describe } from '@jest/globals';
import { TomtomClientService } from '../src/clients/tomtom-client';
import { getAutoCompleteDetails } from '../src/endpoints/autoCompleteDetails/getAutoCompleteDetails';

config();

// These are end-to-end tests and need an api key
describe('Tomtom Places E2E Tests', () => {
  describe('getAutoCompleteDetails', () => {
    it('returns a promise', () => {
      const res = getAutoCompleteDetails({ address: 'Charlotte Street' });
      expect(res).toBeInstanceOf(Promise);
    });

    it('can fetch from the autocomplete api', async () => {
      const res = await getAutoCompleteDetails({ address: 'Charlotte Street' });
      const firstRes = res[0];
      expect(firstRes).toHaveProperty('placeId');
      expect(firstRes).toHaveProperty('streetNumber');
      expect(firstRes).toHaveProperty('countryCode');
      expect(firstRes).toHaveProperty('country');
      expect(firstRes).toHaveProperty('freeformAddress');
      expect(firstRes).toHaveProperty('municipality');
    });
  });

  describe('getPlaceAutocomplete', () => {
    const tomtomClient = new TomtomClientService();

    it('handles no results', async () => {
      const res = await tomtomClient.getPlaceAutoComplete({
        address: 'asfasffasfasafsafs',
      });
      expect(res).toStrictEqual([]);
    });

    it('handles error', async () => {
      expect(
        tomtomClient.getPlaceAutoComplete({ address: '' })
      ).rejects.toThrow();
    });
  });
});
