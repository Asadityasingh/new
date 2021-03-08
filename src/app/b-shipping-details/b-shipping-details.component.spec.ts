import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BShippingDetailsComponent } from './b-shipping-details.component';

describe('BShippingDetailsComponent', () => {
  let component: BShippingDetailsComponent;
  let fixture: ComponentFixture<BShippingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BShippingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BShippingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
