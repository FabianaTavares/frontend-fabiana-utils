import { TestBed } from '@angular/core/testing';

import { RedirectCondicionalService } from './redirect-condicional.service';

describe('RedirectCondicionalService', () => {
  let service: RedirectCondicionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectCondicionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
