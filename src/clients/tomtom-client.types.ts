export type PlaceAutoCompleteRQ = {
  address: string;
};

type Address = {
  streetNumber: string;
  streetName: string;
  municipality: string;
  neighbourhood: string;
  postalCode: string;
  countryCode: string;
  country: string;
  freeformAddress: string;
  localName: string;
};

export type PlaceAutoCompleteResult = {
  type: string;
  id: string;
  score: number;
  dist: number;
  info: string;
  address: Address;
};

export type PlaceAutoCompleteRS = Array<PlaceAutoCompleteResult>;

type DetailedError = {
  code: string;
  message: string;
  target: string;
};

export type PlaceAutoCompleteError = {
  errorText: string;
  detailedError: DetailedError;
  httpStatusCode: number;
};
