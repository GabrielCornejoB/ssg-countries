import { Component } from '@angular/core';
import { ContinentsFilterComponent } from './components/continents-filter/continents-filter.component';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [ContinentsFilterComponent],
  templateUrl: './countries.component.html',
})
export class CountriesComponent {}
