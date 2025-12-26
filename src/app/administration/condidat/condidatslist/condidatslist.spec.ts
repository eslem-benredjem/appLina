import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Condidatslist } from './condidatslist';

describe('Condidatslist', () => {
  let component: Condidatslist;
  let fixture: ComponentFixture<Condidatslist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Condidatslist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Condidatslist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
