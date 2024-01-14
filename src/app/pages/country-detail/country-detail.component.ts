import { AsyncPipe, DecimalPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Country } from '@models/country.model';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { CountriesService } from '@services/countries.service';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [AsyncPipe, DecimalPipe, RouterLink],
  templateUrl: './country-detail.component.html',
})
export class CountryDetailComponent implements OnInit {
  country$: Observable<Country | null> = new Observable();

  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
    this.country$ = this.aRoute.paramMap.pipe(
      switchMap((params) => {
        const param = params.get('cca3');
        if (param) return this.countriesService.getCountryByCode(param);
        this.router.navigateByUrl('/');
        return of(null);
      }),
      catchError(() => {
        this.router.navigateByUrl('/');
        return of(null);
      }),
    );
  }
}
