import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestListRoutingModule } from './guest-list-routing.module';
import { GuestListComponent } from './guest-list.component';
import { AgeRangeComponent } from './age-range/age-range.component';


@NgModule({
  declarations: [GuestListComponent, AgeRangeComponent],
  imports: [
    CommonModule,
    GuestListRoutingModule
  ]
})
export class GuestListModule { }
