import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnceComponent } from './once.component';

const routes: Routes = [{ path: '', component: OnceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnceRoutingModule { }
