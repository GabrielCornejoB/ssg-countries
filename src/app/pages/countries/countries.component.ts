import { Component, OnInit } from '@angular/core';

import {
  FilterByRegionComponent,
  CountryCardComponent,
} from '@components/index';
import { CountryMini } from '@models/index';
import { CountriesService } from '@services/index';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [FilterByRegionComponent, CountryCardComponent],
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
