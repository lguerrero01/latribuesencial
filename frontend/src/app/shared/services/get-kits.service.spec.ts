import { TestBed } from '@angular/core/testing';

import { GetKitsService } from './get-kits.service';

describe('GetKitsService', () => {
  let service: GetKitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetKitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
