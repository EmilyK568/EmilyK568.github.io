import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';

import { GuestListRoutingModule } from './guest-list-routing.module';
import { GuestListComponent } from './guest-list.component';
import { AgeRangeComponent } from './age-range/age-range.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GuestsComponent } from './guests/guests.component';


@NgModule({
  declarations: [GuestListComponent, AgeRangeComponent, GuestsComponent],
  imports: [
    CommonModule,
    GuestListRoutingModule,
    SharedModule,
    MatListModule,
    MatSortModule
  ]
})
export class GuestListModule { }
