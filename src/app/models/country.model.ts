import { REGIONS } from '@constants/index';

export interface Country {
  name: Name;
  tld?: string[];
  cca3: string;
  currencies?: { [key: string]: Currency };
  capital?: string[];
  languages?: { [key: string]: string };
  area: number;
  flag: string;
  maps: Maps;
  population: number;
  timezones: string[];
  continents: Continent[];
  region: Region;
  flags: Flags;
  coatOfArms: CoatOfArms;
  borders?: string[];
}

interface Name {
  common: string;
  official: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export const continents = [
  'Africa',
  'Antarctica',
  'Asia',
  'Europe',
  'North America',
  'Oceania',
  'South America',
] as const;
type Continent = (typeof continents)[number];

type Region = (typeof REGIONS)[number];

interface CoatOfArms {
  png?: string;
  svg?: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}
