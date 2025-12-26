import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsDetails } from './formations-details';

describe('FormationsDetails', () => {
  let component: FormationsDetails;
  let fixture: ComponentFixture<FormationsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationsDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
