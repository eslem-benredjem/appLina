import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formationdetails } from './formationdetails';

describe('Formationdetails', () => {
  let component: Formationdetails;
  let fixture: ComponentFixture<Formationdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formationdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formationdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
