import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formationlist } from './formationlist';

describe('Formationlist', () => {
  let component: Formationlist;
  let fixture: ComponentFixture<Formationlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formationlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formationlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
