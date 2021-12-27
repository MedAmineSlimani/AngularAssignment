import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { CoffesComponent } from './coffes/coffes.component';

@NgModule({
  declarations: [AppComponent, CoffesComponent],
  imports: [BrowserModule, TableModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
