import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BachillerRoutingModule } from './bachiller-routing.module';
import { BachillerComponent } from './bachiller.component';


@NgModule({
  declarations: [BachillerComponent],
  imports: [
    CommonModule,
    BachillerRoutingModule,
    MaterialModule
  ]
})
export class BachillerModule { }
