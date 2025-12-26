import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formateurform } from './formateurform';

describe('Formateurform', () => {
  let component: Formateurform;
  let fixture: ComponentFixture<Formateurform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formateurform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formateurform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
