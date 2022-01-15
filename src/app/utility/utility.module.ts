import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RowActionDirective } from './table/row-action.directive';
import { SelectedActionDirective } from './table/selected-action.directive';
import { TableFilterDirective } from './table/table-filter.directive';
import { TableComponent } from './table/table.component';

const COMPONENTS = [TableComponent, SelectedActionDirective, TableFilterDirective, RowActionDirective];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [...COMPONENTS]
})
export class UtilityModule { }
