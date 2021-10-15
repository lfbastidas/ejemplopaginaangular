import { DetailsContenidosComponent } from './components/uploads/details-contenidos/details-contenidos.component';
import { DetailsPostComponent } from './components/posts/details-post/details-post.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
ContainerAppComponent
const routes: Routes = [
  {
    path: '', component: ContainerAppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./components/pages/home/home.module').then
            (m => m.HomeModule)
      },

      {
        path: 'post/:id', component: DetailsPostComponent
      },
      {
        path: 'contenidos/:id', component: DetailsContenidosComponent
      },
      { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
      { path: 'institucion', loadChildren: () => import('./components/pages/institucion/institucion.module').then(m => m.InstitucionModule) },
      { path: 'recursos', loadChildren: () => import('./components/pages/recursos/recursos.module').then(m => m.RecursosModule) },

      { path: 'historia', loadChildren: () => import('./components/pages/institucion/historia/historia.module').then(m => m.HistoriaModule) },
      { path: 'calendar', loadChildren: () => import('./components/pages/institucion/calendar/calendar.module').then(m => m.CalendarModule) },
      { path: 'simbolos', loadChildren: () => import('./components/pages/institucion/simbolos/simbolos.module').then(m => m.SimbolosModule) },
      { path: 'inscripcion', loadChildren: () => import('./components/pages/inscripcion/inscripcion.module').then(m => m.InscripcionModule) },
      { path: 'simbolos', loadChildren: () => import('./components/pages/institucion/simbolos/simbolos.module').then(m => m.SimbolosModule) },
      { path: 'inscripcion', loadChildren: () => import('./components/pages/inscripcion/inscripcion.module').then(m => m.InscripcionModule) },
    
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }

    ]
  },
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'primaria', loadChildren: () => import('./components/pages/primaria/primaria.module').then(m => m.PrimariaModule) },
  { path: 'bachillerato', loadChildren: () => import('./components/pages/bachiller/bachiller.module').then(m => m.BachillerModule) },
  { path: 'contenidossta', loadChildren: () => import('./components/sexto/list-contenidos-sextoa/list-contenidos-sextoa.module').then(m => m.ListContenidosSextoaModule) },
  { path: 'uploadcontent', loadChildren: () => import('./shared/upload-image/upload-image.module').then(m => m.UploadImageModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
