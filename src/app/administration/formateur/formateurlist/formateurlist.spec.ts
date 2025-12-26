import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formateurlist } from './formateurlist';

describe('Formateurlist', () => {
  let component: Formateurlist;
  let fixture: ComponentFixture<Formateurlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formateurlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formateurlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
