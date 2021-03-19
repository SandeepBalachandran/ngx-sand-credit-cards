import { TestBed } from '@angular/core/testing';

import { NgxSandCreditCardsService } from './ngx-sand-credit-cards.service';

describe('NgxSandCreditCardsService', () => {
  let service: NgxSandCreditCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSandCreditCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
