import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContenidosRoutingModule } from './list-contenidos-routing.module';
import { ListContenidosComponent } from './list-contenidos.component';
import { TablecComponent } from 'src/app/shared/components/tablec/tablec.component';


@NgModule({
  declarations: [ListContenidosComponent, TablecComponent],
  imports: [
    CommonModule,
    ListContenidosRoutingModule,
    MaterialModule
  ]
})
export class ListContenidosModule { }
