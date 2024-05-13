import axios from 'axios';
import { TomtomClientService } from './tomtom-client';
import { mockPlaceAutoCompleteRS } from '../../stub-data/tomtom/placeAutoCompleteFactory';

jest.mock('../config/config', () => ({
  getConfig: () => ({
    baseUrl: 'https://api.tomtom.com',
    apiKey: 'API_KEY',
    apiVersion: 2,
    searchResultLimit: 2,
  }),
}));

jest.mock('axios');

describe('TomtomClientService', () => {
  describe('getPlaceAutoComplete', () => {
    it('should call API with correct parameters', async () => {
      const service = new TomtomClientService();

      const rq = { address: 'Queen Street' };
      const mockUrl = `https://api.tomtom.com/search/2/search/${rq.address}.json`;
      const mockParams = {
        key: 'API_KEY',
        limit: 2,
      };

      const mockData = mockPlaceAutoCompleteRS('Queen Street', ['123', '234']);

      (
        axios.get as jest.MockedFunction<typeof axios.get>
      ).mockResolvedValueOnce({ data: { results: mockData } });

      const result = await service.getPlaceAutoComplete(rq);

      expect(axios.get).toHaveBeenCalledWith(mockUrl, {
        params: mockParams,
      });

      expect(result).toEqual(mockData);
    });

    it('should throw an error if axios call fails', async () => {
      const service = new TomtomClientService();
      const rq = { address: 'Queen Street' };
      const errorMessage = 'Server Error';

      (
        axios.get as jest.MockedFunction<typeof axios.get>
      ).mockRejectedValueOnce(new Error(errorMessage));

      await expect(service.getPlaceAutoComplete(rq)).rejects.toThrow(
        errorMessage
      );
    });
  });
});
