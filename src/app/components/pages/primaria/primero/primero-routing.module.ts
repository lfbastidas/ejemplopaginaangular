import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeroComponent } from './primero.component';

const routes: Routes = [{ path: '', component: PrimeroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeroRoutingModule { }
