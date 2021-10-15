import { MaterialModule } from './../../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeptimoRoutingModule } from './septimo-routing.module';
import { SeptimoComponent } from './septimo.component';


@NgModule({
  declarations: [SeptimoComponent],
  imports: [
    CommonModule,
    SeptimoRoutingModule,
    MaterialModule
  ]
})
export class SeptimoModule { }
