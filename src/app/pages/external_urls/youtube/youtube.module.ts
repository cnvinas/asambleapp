import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { YoutubePage } from './youtube';
import { YoutubePageRoutingModule } from './youtube-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    YoutubePageRoutingModule
  ],
  declarations: [
    YoutubePage,
  ]
})
export class YoutubeModule { }
