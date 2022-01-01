import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { CoffeesComponent } from './coffees/coffees.component';

const routes: Routes = [
  { path: '', component: CoffeesComponent },
  { path: 'coffee', component: DetailsComponent },
  { path: 'coffee/:id', component: DetailsComponent },
];
@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
