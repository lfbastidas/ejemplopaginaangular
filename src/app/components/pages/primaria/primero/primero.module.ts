import { MaterialModule } from './../../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeroRoutingModule } from './primero-routing.module';
import { PrimeroComponent } from './primero.component';


@NgModule({
  declarations: [PrimeroComponent],
  imports: [
    CommonModule,
    PrimeroRoutingModule,
    MaterialModule
  ]
})
export class PrimeroModule { }
