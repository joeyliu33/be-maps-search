import {
  PlaceAutoCompleteRS,
  PlaceAutoCompleteResult,
} from '../../clients/tomtom-client.types';
import { AutoCompleteDetailsRQ } from './mapsSearch.types';

export const validateRequest = (
  request: AutoCompleteDetailsRQ
): AutoCompleteDetailsRQ => {
  if (!request.address) {
    throw new Error('Missing address in autoComplete request');
  }

  return request;
};

export const getAuResults = (result: PlaceAutoCompleteResult) =>
  result.address.countryCode === 'AU';

export const validateResults = (
  response: PlaceAutoCompleteRS
): PlaceAutoCompleteRS => {
  return response.filter((result) => getAuResults(result));
};
