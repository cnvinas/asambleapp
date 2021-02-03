import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowsePage } from './browse';

const routes: Routes = [
  {
    path: ':name',
    component: BrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowsePageRoutingModule { }
