import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessionform } from './sessionform';

describe('Sessionform', () => {
  let component: Sessionform;
  let fixture: ComponentFixture<Sessionform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessionform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessionform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
