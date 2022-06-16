import { TestBed } from '@angular/core/testing';

import { IdRecuperarService } from './id-recuperar.service';

describe('IdRecuperarService', () => {
  let service: IdRecuperarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdRecuperarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
