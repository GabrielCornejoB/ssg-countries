import { Component } from '@angular/core';

import { REGIONS } from '@constants/index';

@Component({
  selector: 'app-filter-by-region',
  standalone: true,
  imports: [],
  templateUrl: './filter-by-region.component.html',
})
export class FilterByRegionComponent {
  readonly regions = REGIONS;
}
