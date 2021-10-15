import { MaterialModule } from './../../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SextoRoutingModule } from './sexto-routing.module';
import { SextoComponent } from './sexto.component';
import { ContenidosComponent } from 'src/app/components/uploads/contenidos/contenidos.component';


@NgModule({
  declarations: [SextoComponent, ContenidosComponent],
  imports: [
    CommonModule,
    SextoRoutingModule,
    MaterialModule
  ]
})
export class SextoModule { }
