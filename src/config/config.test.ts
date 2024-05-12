import { getConfig } from './config';

describe('getConfig', () => {
  it('should return configuration with environment variable when set', () => {
    process.env.BASE_URL = 'https://example.com';
    process.env.TOMTOM_API_KEY = 'API_KEY';

    const config = getConfig();

    expect(config.baseUrl).toBe('https://example.com');
    expect(config.apiKey).toBe('API_KEY');
    expect(config.searchResultLimit).toBe(100);
    expect(config.timeout).toBe(30000);
    expect(config.apiVersion).toBe(2);
  });
});
