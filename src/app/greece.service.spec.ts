import { TestBed } from '@angular/core/testing';

import { GreeceService } from './greece.service';

describe('GreeceService', () => {
  let service: GreeceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreeceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
