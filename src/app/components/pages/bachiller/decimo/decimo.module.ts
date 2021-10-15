import { MaterialModule } from './../../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecimoRoutingModule } from './decimo-routing.module';
import { DecimoComponent } from './decimo.component';


@NgModule({
  declarations: [DecimoComponent],
  imports: [
    CommonModule,
    DecimoRoutingModule,
    MaterialModule
  ]
})
export class DecimoModule { }
