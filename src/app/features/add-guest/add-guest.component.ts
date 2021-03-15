import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent implements OnInit {
  guestList = this.fb.group({
    guests: this.fb.array([])
  });

  constructor(private readonly fb: FormBuilder) { }
  
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
  }

}
