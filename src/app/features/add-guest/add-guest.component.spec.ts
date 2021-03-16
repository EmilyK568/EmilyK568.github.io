import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { configureTestSuite } from 'ng-bullet';

import { AddGuestComponent } from './add-guest.component';

describe('AddGuestComponent', () => {
  let component: AddGuestComponent;
  let fixture: ComponentFixture<AddGuestComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddGuestComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a guest', () => {
    const guestsSpy = spyOn(component['guests'], 'push').and.returnValue(true);
    component.addGuest();
    expect(guestsSpy).toHaveBeenCalledTimes(1);
  });

  it('should remove a guest', () => {
    const guestsSpy = spyOn(component['guests'], 'removeAt').and.returnValue(true);
    component.removeGuest(0);
    expect(guestsSpy).toHaveBeenCalledTimes(1);
  });

  it('should handle submit', () => {
    const guestListSpy = spyOn(component['guestList'], 'markAllAsTouched').and.returnValue(true);
    component.submit();
    expect(guestListSpy).toHaveBeenCalledTimes(1);
  });
});
