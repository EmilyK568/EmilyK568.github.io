import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';

import { AgeRangeComponent } from './age-range.component';

describe('AgeRangeComponent', () => {
  let component: AgeRangeComponent;
  let fixture: ComponentFixture<AgeRangeComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeRangeComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
