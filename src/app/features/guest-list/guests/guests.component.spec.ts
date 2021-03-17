import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { configureTestSuite } from 'ng-bullet';

import { GuestsComponent } from './guests.component';

describe('GuestsComponent', () => {
  let component: GuestsComponent;
  let fixture: ComponentFixture<GuestsComponent>;
  let store: MockStore;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsComponent ],
      providers: [
        provideMockStore({})
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove a guest', () => {
    component.sortedData = [{
      name: 'Bill',
      age: 23,
      weight: 103,
      friends: []
    }];
    const storeSpy = spyOn(component['store'], 'dispatch').and.returnValue(true);
    component.removeGuest(0);
    expect(storeSpy).toHaveBeenCalledTimes(1);
    expect(component.sortedData).toEqual([]);
  });

  it('should sort the data by name', () => {
    component.sortedData = [{
      name: 'Bill',
      age: 23,
      weight: 103,
      friends: []
    },
    {
      name: 'Tim',
      age: 45,
      weight: 98,
      friends: []
    }];
    const compareSpy = spyOn(component, <any>'compare').and.callThrough();
    component.sortData({
      active: 'name',
      direction: 'desc'
    });
    expect(compareSpy).toHaveBeenCalledTimes(1);
    expect(component.sortedData).toEqual([
      {
        name: 'Tim',
        age: 45,
        weight: 98,
        friends: []
      },
      {
      name: 'Bill',
      age: 23,
      weight: 103,
      friends: []
      }
    ]);
  });
});
