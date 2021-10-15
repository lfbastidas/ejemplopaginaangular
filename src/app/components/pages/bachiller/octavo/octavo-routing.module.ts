import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OctavoComponent } from './octavo.component';

const routes: Routes = [{ path: '', component: OctavoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OctavoRoutingModule { }
