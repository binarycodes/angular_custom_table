import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './shared/shared.module';
import { UtilityModule } from './utility/utility.module';
import { SearchComponentComponent } from './search-component/search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
