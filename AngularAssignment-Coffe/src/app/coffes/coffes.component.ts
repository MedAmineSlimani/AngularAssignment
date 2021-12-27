import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffes',
  templateUrl: './coffes.component.html',
  styleUrls: ['./coffes.component.scss'],
})
export class CoffesComponent implements OnInit {
  constructor() {}

  customers: any[] = [];

  ngOnInit(): void {}
}
