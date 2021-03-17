import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { configureTestSuite } from 'ng-bullet';

import { AddGuestComponent } from './add-guest.component';

describe('AddGuestComponent', () => {
  let component: AddGuestComponent;
  let fixture: ComponentFixture<AddGuestComponent>;
  let store: MockStore;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddGuestComponent
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatSnackBarModule
      ],
      providers: [
        provideMockStore({})
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
    store = TestBed.inject(MockStore);
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

  it('should handle submit when valid', () => {
    const guestListSpy = spyOn(component['guestList'], 'markAllAsTouched').and.returnValue(true);
    const getRawValueSpy = spyOn(component['guestList'], 'getRawValue').and.returnValue({ test: 'testing' });
    const storeSpy = spyOn(component['store'], 'dispatch').and.returnValue(true);
    const snackBarSpy = spyOn(component['snackBar'], 'open').and.callThrough();
    component.submit();
    expect(guestListSpy).toHaveBeenCalledTimes(1);
    expect(getRawValueSpy).toHaveBeenCalledTimes(1);
    expect(storeSpy).toHaveBeenCalledTimes(1);
    expect(snackBarSpy).toHaveBeenCalledTimes(1);
    expect(snackBarSpy).toHaveBeenCalledWith('Your guests have been added to the guest list', '', {
      duration: 5000
    });
  });
});
