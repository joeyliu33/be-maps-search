import { Builder } from 'builder-pattern';
import {
  PlaceAutoCompleteResult,
  Address,
  PlaceAutoCompleteRS,
} from '../../src/clients/tomtom-client.types';

const mockAddress = (streetNumber: string, streetName: string) =>
  Builder<Address>()
    .streetNumber(streetNumber)
    .streetName(streetName)
    .municipality('Brisbane City')
    .neighbourhood('Test Neighbour')
    .postalCode('1234')
    .countryCode('AU')
    .country('Australia')
    .freeformAddress('Test Street, Brisbane City, QLD')
    .localName('Test LocalName')
    .build();

export const mockPlaceAutoCompleteResult = (
  streetNumber: string,
  streetName: string
) =>
  Builder<PlaceAutoCompleteResult>()
    .type('mockType')
    .id('mockId')
    .score(1)
    .dist(1)
    .info('mockInfo')
    .address(mockAddress(streetNumber, streetName))
    .build();

export const mockPlaceAutoCompleteRS = (
  streetName: string,
  streetNumbers: string[]
): PlaceAutoCompleteRS => {
  return streetNumbers.map((streetNumber) =>
    mockPlaceAutoCompleteResult(streetNumber, streetName)
  );
};
