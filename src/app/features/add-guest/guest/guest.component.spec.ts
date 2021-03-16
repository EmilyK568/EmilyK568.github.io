import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { configureTestSuite } from 'ng-bullet';

import { GuestComponent } from './guest.component';

describe('GuestComponent', () => {
  let component: GuestComponent;
  let fixture: ComponentFixture<GuestComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestComponent ],
      imports: [
        ReactiveFormsModule,
        MatChipsModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestComponent);
    component = fixture.componentInstance;
    component.guestForm = new FormGroup({});
    component.index = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
