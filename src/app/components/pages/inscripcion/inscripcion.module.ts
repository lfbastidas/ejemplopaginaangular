import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { InscripcionComponent } from './inscripcion.component';


@NgModule({
  declarations: [InscripcionComponent],
  imports: [
    CommonModule,
    InscripcionRoutingModule
  ]
})
export class InscripcionModule { }
