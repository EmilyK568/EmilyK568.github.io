import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestListRoutingModule } from './guest-list-routing.module';
import { GuestListComponent } from './guest-list.component';


@NgModule({
  declarations: [GuestListComponent],
  imports: [
    CommonModule,
    GuestListRoutingModule
  ]
})
export class GuestListModule { }
