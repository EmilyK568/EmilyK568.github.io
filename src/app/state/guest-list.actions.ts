import { createAction, props } from '@ngrx/store';
import { Guest } from '../shared/interfaces/guest.interface';
 
export const addGuests = createAction(
  '[Guest List] Add Guests',
  props<{ guests: Array<Guest> }>()
);
 