import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Country, CountryMini } from '../models';

const API_BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<CountryMini[]> {
    return this.http.get<Country[]>(`${API_BASE_URL}/all`).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name,
          cca3: country.cca3,
          area: country.area,
          flags: country.flags,
          continents: country.continents,
        })),
      ),
    );
  }
}
