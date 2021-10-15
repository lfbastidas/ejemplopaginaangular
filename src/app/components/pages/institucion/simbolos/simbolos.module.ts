//import { MaterialModule } from './../../../../../../../is-web/src/app/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimbolosRoutingModule } from './simbolos-routing.module';
import { SimbolosComponent } from './simbolos.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [SimbolosComponent],
  imports: [
    CommonModule,
    SimbolosRoutingModule,
    MaterialModule
  ]
})
export class SimbolosModule { }
