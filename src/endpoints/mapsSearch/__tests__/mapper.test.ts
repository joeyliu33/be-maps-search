import { mapResultsToCompleteDetails } from '../mapper';

describe('mapResultsToCompleteDetails', () => {
  it('should return autoCompleteDetails response', () => {
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
        id: 'mockAId',
        score: 1,
        dist: 1,
        info: 'mockInfo',
        address: {
          streetNumber: '234',
          streetName: 'Test A Street',
          municipality: 'Test A Municipality',
          neighbourhood: 'Test A Neighbour',
          postalCode: '1234',
          countryCode: 'AU',
          country: 'Australia',
          freeformAddress: 'Test FreeFormAddress',
          localName: 'Test LocalName',
        },
      },
    ];

    const response = mapResultsToCompleteDetails(mockResults);

    expect(response[0].placeId).toStrictEqual('mockId');
    expect(response[0].streetNumber).toStrictEqual('123');
    expect(response[0].streetName).toStrictEqual('Test Street');
    expect(response[0].countryCode).toStrictEqual('AU');
    expect(response[0].country).toStrictEqual('Australia');
    expect(response[0].freeformAddress).toStrictEqual('Test FreeFormAddress');
    expect(response[0].municipality).toStrictEqual('Test Municipality');

    expect(response[1].placeId).toStrictEqual('mockAId');
    expect(response[1].streetNumber).toStrictEqual('234');
    expect(response[1].streetName).toStrictEqual('Test A Street');
    expect(response[1].countryCode).toStrictEqual('AU');
    expect(response[1].country).toStrictEqual('Australia');
    expect(response[1].freeformAddress).toStrictEqual('Test FreeFormAddress');
    expect(response[1].municipality).toStrictEqual('Test A Municipality');
  });
});
