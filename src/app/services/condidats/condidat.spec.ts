import { TestBed } from '@angular/core/testing';

import { Condidat } from './condidat';

describe('Condidat', () => {
  let service: Condidat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Condidat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
