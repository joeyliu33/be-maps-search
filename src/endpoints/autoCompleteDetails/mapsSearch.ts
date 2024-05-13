import { TomtomClientService } from '../../clients/tomtom-client';
import {
  AutoCompleteDetailsRQ,
  AutoCompleteDetailsRS,
} from './mapsSearch.types';
import { mapResultsToCompleteDetails } from './mapper';
import { validateRequest, validateResults } from './validation';

export async function getAutoCompleteDetails(
  request: AutoCompleteDetailsRQ
): Promise<AutoCompleteDetailsRS> {
  const tomtomRequest = validateRequest(request);

  const tomtomClient = new TomtomClientService();

  const autoCompleteResponse = await tomtomClient
    .getPlaceAutoComplete(tomtomRequest)
    .catch((error) => {
      throw new Error(`Error received in getPlaceAutoComplete: ${error}`);
    });

  if (autoCompleteResponse.length < 1) {
    return [];
  }

  const validResults = validateResults(autoCompleteResponse);

  const results = mapResultsToCompleteDetails(validResults);

  return results;
}
