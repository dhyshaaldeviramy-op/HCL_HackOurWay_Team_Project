import { TestBed } from '@angular/core/testing';

import { Hotelservice } from './hotelservice';

describe('Hotelservice', () => {
  let service: Hotelservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hotelservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
