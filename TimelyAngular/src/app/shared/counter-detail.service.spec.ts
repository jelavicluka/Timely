import { TestBed } from '@angular/core/testing';

import { CounterDetailService } from './counter-detail.service';

describe('CounterDetailService', () => {
  let service: CounterDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
