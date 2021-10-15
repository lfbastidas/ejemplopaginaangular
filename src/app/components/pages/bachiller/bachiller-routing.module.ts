import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BachillerComponent } from './bachiller.component';

const routes: Routes = [
  { path: '', component: BachillerComponent,
children:[
  { path: 'sexto', loadChildren: () => import('./sexto/sexto.module').then(m => m.SextoModule) },
  { path: 'septimo', loadChildren: () => import('./septimo/septimo.module').then(m => m.SeptimoModule) },
  { path: 'octavo', loadChildren: () => import('./octavo/octavo.module').then(m => m.OctavoModule) },
  { path: 'noveno', loadChildren: () => import('./noveno/noveno.module').then(m => m.NovenoModule) },
  { path: 'decimo', loadChildren: () => import('./decimo/decimo.module').then(m => m.DecimoModule) },
  { path: 'once', loadChildren: () => import('./once/once.module').then(m => m.OnceModule) },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BachillerRoutingModule { }
