import axios from 'axios';
import { getConfig } from '../config/config';
import {
  PlaceAutoCompleteRQ,
  PlaceAutoCompleteRS,
} from './tomtom-client.types';

export class TomtomClientService {
  private baseUrl: string;

  private apiKey: string;

  private searchResultLimit: number;

  private apiVersion: number;

  constructor() {
    this.baseUrl = getConfig().baseUrl;

    this.apiKey = getConfig().apiKey;

    this.apiVersion = getConfig().apiVersion;

    this.searchResultLimit = getConfig().searchResultLimit;
  }

  async getPlaceAutoComplete(
    rq: PlaceAutoCompleteRQ
  ): Promise<PlaceAutoCompleteRS> {
    try {
      const url = `${this.baseUrl}/search/${this.apiVersion}/search/${rq.address}.json`;

      const params = {
        key: this.apiKey,
        limit: this.searchResultLimit,
      };

      const autoComplete = (await axios.get(url, { params })).data.results;

      return autoComplete;
    } catch (error) {
      throw new Error(`Error received in getPlaceAutoComplete: ${error}`);
    }
  }
}
