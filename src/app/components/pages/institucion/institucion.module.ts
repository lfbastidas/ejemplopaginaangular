import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionRoutingModule } from './institucion-routing.module';
import { InstitucionComponent } from './institucion.component';


@NgModule({
  declarations: [InstitucionComponent],
  imports: [
    CommonModule,
    InstitucionRoutingModule
  ]
})
export class InstitucionModule { }
