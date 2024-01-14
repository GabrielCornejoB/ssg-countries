import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { Country, CountryMini } from '@models/index';

const API_BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountryByCode(cca3: string): Observable<Country> {
    return this.http
      .get<Country[]>(`${API_BASE_URL}/alpha/${cca3}`)
      .pipe(map((data) => data[0]));
  }

  getAll(): Observable<CountryMini[]> {
    return this.http
      .get<Country[]>(`${API_BASE_URL}/all`)
      .pipe(
        map((countries) => this.transformCountriesToCountriesMini(countries)),
      );
  }

  getAllByRegion(region: string): Observable<CountryMini[]> {
    return this.http
      .get<Country[]>(`${API_BASE_URL}/region/${region}`)
      .pipe(
        map((countries) => this.transformCountriesToCountriesMini(countries)),
      );
  }

  transformCountriesToCountriesMini(countries: Country[]): CountryMini[] {
    return countries.map((country) => ({
      name: country.name.common,
      area: country.area,
      cca3: country.cca3,
      flagEmoji: country.flag,
      flagImageUrl: country.flags.png,
      region: country.region,
    }));
  }
}
