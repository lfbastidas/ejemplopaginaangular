import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeptimoComponent } from './septimo.component';

const routes: Routes = [{ path: '', component: SeptimoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeptimoRoutingModule { }
