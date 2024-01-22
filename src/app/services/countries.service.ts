import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap, tap } from 'rxjs';

import { CountryRequest, CountryMini } from '@models/index';
import { CountryDetail } from '@models/country-detail.model';

const API_BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountryByCode(cca3: string): Observable<CountryDetail> {
    return this.http
      .get<CountryRequest[]>(`${API_BASE_URL}/alpha/${cca3}`)
      .pipe(
        map((data) => data[0]),
        // switchMap((data) => ), //checkout forkjoin or other combination operators
        map((country) => this.transformCountryToCountryDetail(country)),
      );
  }

  getCountryName(cca3: string): Observable<string> {
    return this.http
      .get<CountryRequest[]>(`${API_BASE_URL}/alpha/${cca3}`)
      .pipe(map((data) => data[0].name.common));
  }

  getAll(): Observable<CountryMini[]> {
    return this.http
      .get<CountryRequest[]>(`${API_BASE_URL}/all`)
      .pipe(
        map((countries) => this.transformCountriesToCountriesMini(countries)),
      );
  }

  getAllByRegion(region: string): Observable<CountryMini[]> {
    return this.http
      .get<CountryRequest[]>(`${API_BASE_URL}/region/${region}`)
      .pipe(
        map((countries) => this.transformCountriesToCountriesMini(countries)),
      );
  }

  transformCountriesToCountriesMini(
    countries: CountryRequest[],
  ): CountryMini[] {
    return countries.map((country) => ({
      name: country.name.common,
      area: country.area,
      cca3: country.cca3,
      flagEmoji: country.flag,
      flagImageUrl: country.flags.png,
      region: country.region,
    }));
  }

  transformCountryToCountryDetail(country: CountryRequest): CountryDetail {
    const { currencies, languages, borders } = country;

    let currenciesStr: string = 'n/a';
    let hasMultipleCurrencies: boolean = false;
    if (currencies) {
      hasMultipleCurrencies = Object.keys(currencies).length > 1;
      currenciesStr = Object.keys(currencies)
        .map((key) => `${currencies[key].name} (${currencies[key].symbol})`)
        .join(', ');
    }

    let languagesStr: string = 'n/a';
    let hasMultipleLanguages: boolean = false;
    if (languages) {
      hasMultipleLanguages = Object.keys(languages).length > 1;
      languagesStr = Object.keys(languages)
        .map((key) => languages[key])
        .join(', ');
    }

    const countryDetail: CountryDetail = {
      capital: country.capital ? country.capital[0] : 'n/a',
      demonym: country.demonyms ? `${country.demonyms.eng.m} People` : 'People',
      continents: country.continents.join(', '),
      isInMultipleContinents: country.continents.length > 1,
      currencies: currenciesStr,
      hasMultipleCurrencies,
      name: country.name,
      population: country.population,
      cca3: country.cca3,
      coatOfArms: country.coatOfArms,
      area: country.area,
      region: country.region,
      subregion: country.subregion,
      languages: languagesStr,
      hasMultipleLanguages: hasMultipleLanguages,
      flag: country.flag,
      borders: country.borders
        ? country.borders
        : [`${country.name.common} has no border countries.`],
    };
    return countryDetail;
  }
}
