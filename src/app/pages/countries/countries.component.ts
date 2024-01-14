import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { CountryMini } from '../../models';
import {
  ContinentsFilterComponent,
  CountryCardComponent,
} from '../../components';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [ContinentsFilterComponent, CountryCardComponent],
  templateUrl: './countries.component.html',
})
export class CountriesComponent implements OnInit {
  countries: CountryMini[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .getAll()
      .subscribe((data) => (this.countries = [...data]));
  }
}
