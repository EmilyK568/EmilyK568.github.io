import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddGuestRoutingModule } from './add-guest-routing.module';
import { AddGuestComponent } from './add-guest.component';
import { GuestComponent } from './guest/guest.component';


@NgModule({
  declarations: [AddGuestComponent, GuestComponent],
  imports: [
    CommonModule,
    AddGuestRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AddGuestModule { }
