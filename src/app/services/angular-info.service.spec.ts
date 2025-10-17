import { TestBed } from '@angular/core/testing';

import { AngularInfoService } from './angular-info.service';

describe('AngularInfoService', () => {
  let service: AngularInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
