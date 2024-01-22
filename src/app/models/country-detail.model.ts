import { CountryRequest } from './country.model';

export interface CountryDetail
  extends Pick<
    CountryRequest,
    | 'name'
    | 'population'
    | 'cca3'
    | 'coatOfArms'
    | 'area'
    | 'region'
    | 'subregion'
    | 'flag'
  > {
  capital: string;
  demonym: string;
  continents: string;
  isInMultipleContinents: boolean;
  currencies: string;
  hasMultipleCurrencies: boolean;
  languages: string;
  hasMultipleLanguages: boolean;
  borders: string[];
}
