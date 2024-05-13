export type AutoCompleteDetailsRQ = {
  address: string;
};

type AutoCompleteDetailsResult = {
  placeId: string;
  streetNumber: string;
  streetName: string;
  countryCode: string;
  country: string;
  freeformAddress: string;
  municipality: string;
};

export type AutoCompleteDetailsRS = Array<AutoCompleteDetailsResult>;
