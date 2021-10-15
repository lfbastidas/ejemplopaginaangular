import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContenidosSextoaComponent } from './list-contenidos-sextoa.component';

const routes: Routes = [{ path: '', component: ListContenidosSextoaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListContenidosSextoaRoutingModule { }
