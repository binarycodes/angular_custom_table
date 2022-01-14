import { ComponentType } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { MatTableColumns } from './utility/custom-table/custom-table.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

const ELEMENT_METADATA: MatTableColumns<PeriodicElement>[] = [
  { name: 'position', label: '#', display: (element: PeriodicElement) => `${element.position}` },
  { name: 'name', label: 'Name', display: (element: PeriodicElement) => `<b>${element.name}</b>` },
  { name: 'weight', label: 'Atomic Weight', display: (element: PeriodicElement) => `${element.weight}` },
  { name: 'symbol', label: 'Symbol', display: (element: PeriodicElement) => `${element.symbol}` }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  columns: MatTableColumns<PeriodicElement>[] = ELEMENT_METADATA;
  data: PeriodicElement[] = ELEMENT_DATA;
  searchComponent: ComponentType<CustomSearchComponent> = CustomSearchComponent;

  showAll() {
    this.data = ELEMENT_DATA;
  }

  showInactive() {
    this.data = ELEMENT_DATA.slice(2, 4);
  }

  showExpiringSoon() {
    this.data = ELEMENT_DATA.slice(6, 10);
  }

  edit(data: PeriodicElement[]) {
    console.log("edit....");
    console.log(data);
  }

  delete(data: PeriodicElement[]) {
    console.log("delete....");
    console.log(data);
  }
}
