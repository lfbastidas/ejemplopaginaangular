import { MaterialModule } from './../../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovenoRoutingModule } from './noveno-routing.module';
import { NovenoComponent } from './noveno.component';


@NgModule({
  declarations: [NovenoComponent],
  imports: [
    CommonModule,
    NovenoRoutingModule,
    MaterialModule
  ]
})
export class NovenoModule { }
