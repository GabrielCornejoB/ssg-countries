import { Routes } from '@angular/router';

import { CountriesComponent } from './countries/countries.component';

export const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
    pathMatch: 'full',
  },
  {
    path: 'by-region/:region',
    component: CountriesComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
