import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContenidosComponent } from './list-contenidos.component';

const routes: Routes = [{ path: '', component: ListContenidosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListContenidosRoutingModule { }
