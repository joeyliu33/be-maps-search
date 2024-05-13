import { PlaceAutoCompleteRS } from '../../clients/tomtom-client.types';
import { AutoCompleteDetailsRS } from './mapsSearch.types';

export const mapResultsToCompleteDetails = (
  results: PlaceAutoCompleteRS
): AutoCompleteDetailsRS => {
  return results.map((result) => {
    const address = result.address;

    return {
      placeId: result.id ?? '',
      streetNumber: address.streetNumber ?? '',
      streetName: address.streetName ?? '',
      countryCode: address.countryCode ?? '',
      country: address.country ?? '',
      freeformAddress: address.freeformAddress ?? '',
      municipality: address.municipality ?? '',
    };
  });
};
