import { Country } from './country.model';

type CountryMiniProperties = 'name' | 'cca3' | 'area' | 'flags' | 'continents';

export interface CountryMini extends Pick<Country, CountryMiniProperties> {}
