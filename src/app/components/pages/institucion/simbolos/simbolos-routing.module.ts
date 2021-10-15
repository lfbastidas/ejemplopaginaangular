import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimbolosComponent } from './simbolos.component';

const routes: Routes = [{ path: '', component: SimbolosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimbolosRoutingModule { }
