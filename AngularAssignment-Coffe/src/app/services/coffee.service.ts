import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICoffee } from '../models/coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private readonly _url =
    'https://random-data-api.com/api/coffee/random_coffee?size=50';

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<ICoffee[]> {
    return this.http.get<ICoffee[]>(`${this._url}`);
  }
}
