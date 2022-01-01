import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoffee } from '../models/coffee';
import { select, Store } from '@ngrx/store';
import { CoffeeState } from '../store/reducers/coffee.reducers';
import { coffeeSelector } from '../store/selector/coffee.selector';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  coffees: ICoffee[] = [];
  coffees$ = this.store.pipe(select(coffeeSelector));
  details: ICoffee = {
    id: 0,
    blend_name: '',
    origin: [],
    variety: '',
    notes: [],
    intensifier: '',
  };

  constructor(
    private store: Store<CoffeeState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.coffees$.subscribe((data) => (this.coffees = data));
    let id = +this.route.snapshot.paramMap.get('id')!;

    this.coffees.forEach((element) => {
      if (element.id === id) {
        this.details = element;
      }
    });
  }
}
