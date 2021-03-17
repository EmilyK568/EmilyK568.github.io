import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addGuests } from 'src/app/state/guest-list.actions';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent implements OnInit {
  guestList = this.fb.group({
    guests: this.fb.array([])
  });

  constructor(private readonly fb: FormBuilder,
              private readonly store: Store,
              private readonly snackBar: MatSnackBar) { }
  
  get guests() {
    return this.guestList.get('guests') as FormArray;
  }

  ngOnInit(): void {
    this.addGuest();
  }

  addGuest(): void {
    this.guests.push(this.fb.group({}));
  }

  removeGuest(index: number) {
    this.guests.removeAt(index);
  }

  submit() {
    this.guestList.markAllAsTouched();
    const value = this.guestList.getRawValue()
    if (this.guestList.valid) {
      this.store.dispatch(addGuests({ guests: value.guests }));
      this.snackBar.open('Your guests have been added to the guest list', '', {
        duration: 5000,
      });
      this.resetPage();
    } else {
      this.snackBar.open('Please enter the missing information', '', {
        duration: 5000
      });
    }
  }

  resetPage() {
    this.guests.clear();
    this.guests.updateValueAndValidity();
    this.addGuest();
  }

}
