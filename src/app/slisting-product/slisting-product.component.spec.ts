import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlistingProductComponent } from './slisting-product.component';

describe('SlistingProductComponent', () => {
  let component: SlistingProductComponent;
  let fixture: ComponentFixture<SlistingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlistingProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlistingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
