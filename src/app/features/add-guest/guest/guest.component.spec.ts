import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { configureTestSuite } from 'ng-bullet';

import { GuestComponent } from './guest.component';

describe('GuestComponent', () => {
  let component: GuestComponent;
  let fixture: ComponentFixture<GuestComponent>;
  let store: MockStore;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestComponent ],
      imports: [
        ReactiveFormsModule,
        MatChipsModule
      ],
      providers: [
        provideMockStore({})
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
    store = TestBed.inject(MockStore);
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

  it('should set the form controls', () => {
    const guestFormSpy = spyOn(component['guestForm'], 'addControl').and.callThrough();
    component.setFormControls();
    expect(guestFormSpy).toHaveBeenCalledTimes(4);
  });

  it('should emit on removeMe', () => {
    const emitterSpy = spyOn(component['remove'], 'emit').and.returnValue(true);
    component.removeMe();
    expect(emitterSpy).toHaveBeenCalledTimes(1);
  });

  it('should handle removing a friend', () => {
    component.friends = ['Timmy', 'Tommy', 'Billy'];
    component.removeFriend(1);
    expect(component.friends).toEqual(['Timmy', 'Billy']);
    expect(component.guestForm.get('friends').value).toEqual(['Timmy', 'Billy']);
  });

  it('should handle adding a friend', () => {
    component.friends = [];
    component.addFriend({value: 'George', input: null} as any as MatChipInputEvent);
    expect(component.friends).toEqual(['George']);
    expect(component.guestForm.get('friends').value).toEqual(['George']);
  });
});
