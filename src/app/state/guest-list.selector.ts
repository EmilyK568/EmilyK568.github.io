import { createFeatureSelector } from '@ngrx/store';
import { Guest } from '../shared/interfaces/guest.interface';

export const selectGuestListState = createFeatureSelector<
  Array<Guest>
>("guestList");