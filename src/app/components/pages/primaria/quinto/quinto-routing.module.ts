import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuintoComponent } from './quinto.component';

const routes: Routes = [{ path: '', component: QuintoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuintoRoutingModule { }
