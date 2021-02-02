import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { InstagramPage } from './instagram';
import { InstagramPageRoutingModule } from './instagram-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InstagramPageRoutingModule
  ],
  declarations: [
    InstagramPage,
  ]
})
export class InstagramModule { }
