import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovenoComponent } from './noveno.component';

const routes: Routes = [{ path: '', component: NovenoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovenoRoutingModule { }
