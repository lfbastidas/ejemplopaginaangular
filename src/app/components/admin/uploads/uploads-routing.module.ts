import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadsComponent } from './uploads.component';

const routes: Routes = [{ path: '', component: UploadsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadsRoutingModule { }
