import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YoutubePage } from './youtube';

const routes: Routes = [
  {
    path: '',
    component: YoutubePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubePageRoutingModule { }
