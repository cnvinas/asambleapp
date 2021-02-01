import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CamaraPage } from './camara';

const routes: Routes = [
  {
    path: '',
    component: CamaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamaraPageRoutingModule { }
