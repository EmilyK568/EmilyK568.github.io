import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestListRoutingModule } from './guest-list-routing.module';
import { GuestListComponent } from './guest-list.component';
import { AgeRangeComponent } from './age-range/age-range.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [GuestListComponent, AgeRangeComponent],
  imports: [
    CommonModule,
    GuestListRoutingModule,
    SharedModule
  ]
})
export class GuestListModule { }
