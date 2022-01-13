import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


const MATERIAL_MODULES = [
  ReactiveFormsModule,
  MatTableModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatDialogModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatFormFieldModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...MATERIAL_MODULES
  ],
  exports: [...MATERIAL_MODULES]
})
export class SharedModule { }
