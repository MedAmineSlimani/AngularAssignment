import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { CoffeesComponent } from './coffees/coffees.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { coffeeReducer } from './store/reducers/coffee.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './store/effects/coffee.effects';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, CoffeesComponent, DetailsComponent],
  imports: [
    BrowserModule,
    TableModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ coffees: coffeeReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CoffeeEffects]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
