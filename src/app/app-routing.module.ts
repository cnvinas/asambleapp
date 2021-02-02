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
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/external_urls/map/map.module').then(m => m.MapModule)
  },
  {
    path: 'facebook',
    loadChildren: () => import('./pages/external_urls/facebook/facebook.module').then(m => m.FacebookModule)
  },
  {
    path: 'instagram',
    loadChildren: () => import('./pages/external_urls/instagram/instagram.module').then(m => m.InstagramModule)
  },
  {
    path: 'youtube',
    loadChildren: () => import('./pages/external_urls/youtube/youtube.module').then(m => m.YoutubeModule)
  },
  {
    path: 'agroecologiaya',
    loadChildren: () => import('./pages/external_urls/agroecologiaya/agroecologiaya.module').then(m => m.AgroecologiaYaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
