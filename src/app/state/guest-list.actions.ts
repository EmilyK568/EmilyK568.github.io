import { createAction, props } from '@ngrx/store';
import { Guest } from '../shared/interfaces/guest.interface';
 
export const addGuests = createAction(
  '[Guest List] Add Guests',
  props<{ guests: Array<Guest> }>()
);

export const removeGuest = createAction(
  '[Guest List] Remove Guest',
  props<{ guests: Array<Guest> }>()
);
 