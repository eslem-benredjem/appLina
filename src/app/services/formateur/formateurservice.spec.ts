import { TestBed } from '@angular/core/testing';

import { Formateurservice } from './formateurservice';

describe('Formateurservice', () => {
  let service: Formateurservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Formateurservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
