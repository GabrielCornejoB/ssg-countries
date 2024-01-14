import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Country, CountryMini } from '@models/index';

const API_BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<CountryMini[]> {
    return this.http.get<Country[]>(`${API_BASE_URL}/all`).pipe(
      map((countries) =>
        countries.map((country) => {
          const countryMini: CountryMini = {
            name: country.name.common,
            area: country.area,
            cca3: country.cca3,
            flagEmoji: country.flag,
            flagImageUrl: country.flags.png,
            continents: country.continents,
          };
          return countryMini;
        }),
      ),
    );
  }
}
