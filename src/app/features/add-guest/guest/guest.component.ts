import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  @Input() guestForm: any;
  @Input() index: number = 0;
  @Output() remove = new EventEmitter();
  friends: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.setFormControls();
  }

  setFormControls() {
    if (this.guestForm) {
      this.guestForm.addControl('name', new FormControl(null, {validators: Validators.required}));
      this.guestForm.addControl('age', new FormControl(null, {validators: Validators.required}));
      this.guestForm.addControl('weight', new FormControl(null, {validators: Validators.required}));
      this.guestForm.addControl('friends', new FormControl([]));
    }
  }

  removeMe() {
    this.remove.emit(this.index);
  }

  removeFriend(index: number) {
    this.friends.splice(index, 1);
    this.guestForm.get('friends').setValue(this.friends);
  }

  addFriend(event: MatChipInputEvent) {
    const value = event.value;
    const input = event.input;

    if (value) {
      this.friends.push(value.trim());
      this.guestForm.get('friends').setValue(this.friends);
    }
    if (input) {
      input.value = '';
    }
  }
}
