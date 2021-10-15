import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimariaComponent } from './primaria.component';

const routes: Routes = [
  { path: '', component: PrimariaComponent,
children: [
  { path: 'primero', loadChildren: () => import('./primero/primero.module').then(m => m.PrimeroModule) },
  { path: 'segundo', loadChildren: () => import('./segundo/segundo.module').then(m => m.SegundoModule) },
  { path: 'tercero', loadChildren: () => import('./tercero/tercero.module').then(m => m.TerceroModule) },
  { path: 'cuarto', loadChildren: () => import('./cuarto/cuarto.module').then(m => m.CuartoModule) },
  { path: 'quinto', loadChildren: () => import('./quinto/quinto.module').then(m => m.QuintoModule) },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimariaRoutingModule { }
