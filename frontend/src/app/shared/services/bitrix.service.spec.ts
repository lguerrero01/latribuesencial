import { TestBed } from '@angular/core/testing';

import { BitrixService } from './bitrix.service';

describe('BitrixService', () => {
  let service: BitrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
