import { Component, EventEmitter, Output } from '@angular/core';
import { continents } from '../../../models';

@Component({
  selector: 'app-continents-filter',
  standalone: true,
  imports: [],
  templateUrl: './continents-filter.component.html',
})
export class ContinentsFilterComponent {
  readonly continents = continents;
  selectedContinent: string | null = null;

  @Output()
  onContinentSelected = new EventEmitter<string>();

  selectContinent(continent: string): void {
    this.selectedContinent = continent;
    this.onContinentSelected.emit(continent);
  }
}
