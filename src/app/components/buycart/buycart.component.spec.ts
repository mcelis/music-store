import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycartComponent } from './buycart.component';

describe('BuycartComponent', () => {
  let component: BuycartComponent;
  let fixture: ComponentFixture<BuycartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuycartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
