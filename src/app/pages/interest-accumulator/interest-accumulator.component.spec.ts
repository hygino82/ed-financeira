import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestAccumulatorComponent } from './interest-accumulator.component';

describe('InterestAccumulatorComponent', () => {
  let component: InterestAccumulatorComponent;
  let fixture: ComponentFixture<InterestAccumulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestAccumulatorComponent]
    });
    fixture = TestBed.createComponent(InterestAccumulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
