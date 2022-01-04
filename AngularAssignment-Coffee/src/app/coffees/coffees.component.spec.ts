import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeesComponent } from './coffees.component';
import { StoreModule } from '@ngrx/store';
import { coffeeReducer } from '../store/reducers/coffee.reducers';

describe('CoffesComponent', () => {
  let component: CoffeesComponent;
  let fixture: ComponentFixture<CoffeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ coffees: coffeeReducer })],
      declarations: [CoffeesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
