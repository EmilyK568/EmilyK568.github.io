import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddGuestRoutingModule } from './add-guest-routing.module';
import { AddGuestComponent } from './add-guest.component';


@NgModule({
  declarations: [AddGuestComponent],
  imports: [
    CommonModule,
    AddGuestRoutingModule
  ]
})
export class AddGuestModule { }
