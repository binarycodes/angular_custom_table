import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { RowActionDirective } from './custom-table/row-action.directive';
import { SelectedActionDirective } from './custom-table/selected-action.directive';
import { TableFilterDirective } from './custom-table/table-filter.directive';

const COMPONENTS = [CustomTableComponent, SelectedActionDirective, TableFilterDirective, RowActionDirective];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [...COMPONENTS]
})
export class UtilityModule { }
