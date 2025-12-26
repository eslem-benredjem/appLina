import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessionlist } from './sessionlist';

describe('Sessionlist', () => {
  let component: Sessionlist;
  let fixture: ComponentFixture<Sessionlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessionlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sessionlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
