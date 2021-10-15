import { MaterialModule } from './../../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { QuintoRoutingModule } from './quinto-routing.module';
import { QuintoComponent } from './quinto.component';


@NgModule({
  declarations: [QuintoComponent],
  imports: [
    CommonModule,
    QuintoRoutingModule,
    MaterialModule
  ]
})
export class QuintoModule { }
