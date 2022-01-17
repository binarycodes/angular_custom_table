import { ComponentType } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { ColumnProperty } from './utility/table/column-property.interface';
import { FilterDefinition } from './utility/table/filter-definition.interface';


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
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
];

const ELEMENT_METADATA: ColumnProperty<PeriodicElement>[] = [
  { column: 'position', label: '#', display: (element: PeriodicElement) => `${element.position}` },
  { column: 'name', label: 'Name', display: (element: PeriodicElement) => `<strong>${element.name}</strong>` },
  { column: 'weight', label: 'Atomic Weight', display: (element: PeriodicElement) => `<em>${element.weight}</em>` },
  { column: 'symbol', label: 'Symbol', display: (element: PeriodicElement) => `${element.symbol}` }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: ColumnProperty<PeriodicElement>[] = ELEMENT_METADATA;
  data: PeriodicElement[] = ELEMENT_DATA;
  searchComponent: ComponentType<CustomSearchComponent> = CustomSearchComponent;

  constructor() {
    this.check();
  }

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


  private check() {
    const filterDef1: FilterDefinition = {
      type: ['eq', 'greaterEqual', 'lessEqual']
    };

    const filterDef2: FilterDefinition = {
      type: 'dropdown',
      parameters: {
        multiple: true
      }
    };

    const filterDef3: FilterDefinition = {
      type: 'auto_complete',
      parameters: {
        multiple: false,
        partial: true
      }
    };

    const filterDef4: FilterDefinition = {
      type: 'plain_text',
      parameters: {
        partial: true,
        delimeter: null
      }
    };

    const filterDef5: FilterDefinition = {
      type: 'plain_text',
      parameters: {
        partial: true,
        delimeter: ','
      }
    };

    const filterDef6: FilterDefinition = {
      type: ['date']
    };

    [filterDef1, filterDef2, filterDef3, filterDef4, filterDef5, filterDef6]
      .map(filter => this.checkFunction(filter));
  }

  private checkFunction(filter: FilterDefinition) {
    console.log('-'.repeat(50));
    console.log(filter.type);
    if ('parameters' in filter) {
      console.log(filter.parameters);
    }
  }
}
