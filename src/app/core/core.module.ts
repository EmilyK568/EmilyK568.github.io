import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSlideToggleModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
