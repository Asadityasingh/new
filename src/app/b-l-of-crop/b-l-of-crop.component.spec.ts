import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLOfCropComponent } from './b-l-of-crop.component';

describe('BLOfCropComponent', () => {
  let component: BLOfCropComponent;
  let fixture: ComponentFixture<BLOfCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BLOfCropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BLOfCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
