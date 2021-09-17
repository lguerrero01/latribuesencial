import { TestBed } from '@angular/core/testing';

import { GetDiseasesService } from './get-diseases.service';

describe('GetDiseasesService', () => {
  let service: GetDiseasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDiseasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
