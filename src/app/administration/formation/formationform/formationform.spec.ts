import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formationform } from './formationform';

describe('Formationform', () => {
  let component: Formationform;
  let fixture: ComponentFixture<Formationform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formationform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formationform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
