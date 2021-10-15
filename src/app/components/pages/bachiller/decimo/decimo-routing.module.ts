import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecimoComponent } from './decimo.component';

const routes: Routes = [{ path: '', component: DecimoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecimoRoutingModule { }
