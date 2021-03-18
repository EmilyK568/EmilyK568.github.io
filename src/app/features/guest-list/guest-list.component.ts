import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Guest } from 'src/app/shared/interfaces/guest.interface';
import { selectGuestListState } from '../../state/guest-list.selector';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent  {
  guestList$ = this.store.pipe(select(selectGuestListState));
  guests: Array<Guest> = [];

  constructor(private readonly store: Store) { }

}
