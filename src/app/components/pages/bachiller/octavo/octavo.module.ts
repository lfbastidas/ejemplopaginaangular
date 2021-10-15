import { MaterialModule } from './../../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OctavoRoutingModule } from './octavo-routing.module';
import { OctavoComponent } from './octavo.component';


@NgModule({
  declarations: [OctavoComponent],
  imports: [
    CommonModule,
    OctavoRoutingModule,
    MaterialModule
  ]
})
export class OctavoModule { }
