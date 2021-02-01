import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../redes/schedule';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'redes',
        children: [
          {
            path: '',
            component: SchedulePage,
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'asamblea',
        children: [
          {
            path: '',
            loadChildren: () => import('../asamblea/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: () => import('../info/info.module').then(m => m.InfoModule)
          }
        ]
      },
      {
        path: 'camara',
        children: [
          {
            path: '',
            loadChildren: () => import('../camara/camara.module').then(m => m.CamaraModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/redes',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

