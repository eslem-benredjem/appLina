import { TestBed } from '@angular/core/testing';

import { Formationservice } from './formationservice';

describe('Formationservice', () => {
  let service: Formationservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Formationservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
