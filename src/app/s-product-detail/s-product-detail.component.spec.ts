import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SProductDetailComponent } from './s-product-detail.component';

describe('SProductDetailComponent', () => {
  let component: SProductDetailComponent;
  let fixture: ComponentFixture<SProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
