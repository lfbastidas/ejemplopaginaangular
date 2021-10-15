import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuartoComponent } from './cuarto.component';

const routes: Routes = [{ path: '', component: CuartoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuartoRoutingModule { }
