import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../../../material.module';

import { CuartoRoutingModule } from './cuarto-routing.module';
import { CuartoComponent } from './cuarto.component';


@NgModule({
  declarations: [CuartoComponent],
  imports: [
    CommonModule,
    CuartoRoutingModule,
    MaterialModule
  ]
})
export class CuartoModule { }
