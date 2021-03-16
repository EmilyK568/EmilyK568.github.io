import { createReducer, on, Action } from '@ngrx/store';
import { Guest } from '../shared/interfaces/guest.interface';
import { addGuests, removeGuest } from './guest-list.actions';

export const initialState: Array<Guest> = [
  {
    name: 'testing',
    age: 12,
    weight: 60,
    friends: []
  }
];

export const guestListReducer = createReducer(
  initialState,
  on(addGuests, (state, { guests }) => state.concat(guests)),
  on(removeGuest, (state, { guests }) => state = guests)
);