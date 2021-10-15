import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContenidosSextoaRoutingModule } from './list-contenidos-sextoa-routing.module';
import { ListContenidosSextoaComponent } from './list-contenidos-sextoa.component';


@NgModule({
  declarations: [ListContenidosSextoaComponent],
  imports: [
    CommonModule,
    ListContenidosSextoaRoutingModule
  ]
})
export class ListContenidosSextoaModule { }
