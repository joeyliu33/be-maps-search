import { config } from 'dotenv';
import { getAutoCompleteDetails } from '../getAutoCompleteDetails';

config();

describe('autoCompleteResponse', () => {
  it('should return correct place information when pass correct address', async () => {
    const mockRequest = {
      address: 'Queen Street',
    };

    const results = await getAutoCompleteDetails(mockRequest);

    const result = results[0];

    expect(result.placeId).toStrictEqual('JZGwML3-eVbWLjVe4BwbdA');
    expect(result.streetNumber).toStrictEqual('');
    expect(result.streetName).toStrictEqual('Queen Street');
    expect(result.countryCode).toStrictEqual('AU');
    expect(result.country).toStrictEqual('Australia');
    expect(result.freeformAddress).toStrictEqual(
      'Queen Street, Woollahra, New South Wales, 2025'
    );
    expect(result.municipality).toStrictEqual('Sydney');
  });
});
