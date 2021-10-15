import { AuthGuard } from './../../shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'posts',
        loadChildren: () =>
          import('../posts/list-posts/list-posts.module').then(
            m => m.ListPostsModule
          )


      },
      {
        path: 'contenidos',
         loadChildren: () => import('../uploads/list-contenidos/list-contenidos.module').then(
           m => m.ListContenidosModule)
      },

      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
      { path: 'Upfiles', loadChildren: () => import('./uploads/uploads.module').then(m => m.UploadsModule) },


    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
