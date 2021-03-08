import { TestBed } from '@angular/core/testing';

import { ServapiService } from './servapi.service';

describe('ServapiService', () => {
  let service: ServapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
