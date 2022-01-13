import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CustomTableComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [CustomTableComponent]
})
export class UtilityModule { }
