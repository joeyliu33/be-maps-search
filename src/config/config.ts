import { TomtomEndpointConfig } from './config.types';

export const getConfig = (): TomtomEndpointConfig => ({
  baseUrl: process.env.BASE_URL || '',
  apiKey: process.env.TOMTOM_API_KEY || '',
  searchResultLimit: 100,
  timeout: 30000,
  apiVersion: 2,
});
