import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  @Input() guestForm: any;
  @Input() index: number = 0;
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.setFormControls();
  }

  setFormControls() {
    if (this.guestForm) {
      this.guestForm.addControl('name', new FormControl(null));
    }
  }

  removeMe() {
    this.remove.emit(this.index);
  }
}
