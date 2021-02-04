import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/asamblea',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/asamblea/about.module').then(m => m.AboutModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then(m => m.InfoModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then(m => m.CamaraModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
