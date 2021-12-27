import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffesComponent } from './coffes.component';

describe('CoffesComponent', () => {
  let component: CoffesComponent;
  let fixture: ComponentFixture<CoffesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
