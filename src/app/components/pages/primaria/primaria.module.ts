import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimariaRoutingModule } from './primaria-routing.module';
import { PrimariaComponent } from './primaria.component';


@NgModule({
  declarations: [PrimariaComponent],
  imports: [
    CommonModule,
    PrimariaRoutingModule,
    MaterialModule
  ]
})
export class PrimariaModule { }
