import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursosRoutingModule } from './recursos-routing.module';
import { RecursosComponent } from './recursos.component';



@NgModule({
  declarations: [RecursosComponent],
  imports: [
    CommonModule,
    RecursosRoutingModule,  
    MaterialModule
  ]
})
export class RecursosModule {   }
