import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGuestComponent } from './add-guest.component';

const routes: Routes = [
  {
    path: '',
    component: AddGuestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddGuestRoutingModule { }
