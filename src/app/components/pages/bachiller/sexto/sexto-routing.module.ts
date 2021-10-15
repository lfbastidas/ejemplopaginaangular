import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextoComponent } from './sexto.component';

const routes: Routes = [{ path: '', component: SextoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SextoRoutingModule { }
