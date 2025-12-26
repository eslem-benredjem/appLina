import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Condidatform } from './condidatform';

describe('Condidatform', () => {
  let component: Condidatform;
  let fixture: ComponentFixture<Condidatform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Condidatform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Condidatform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
