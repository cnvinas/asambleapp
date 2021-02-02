import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstagramPage } from './instagram';

const routes: Routes = [
  {
    path: '',
    component: InstagramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstagramPageRoutingModule { }
