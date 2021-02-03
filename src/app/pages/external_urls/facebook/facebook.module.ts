import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FacebookPage } from './facebook';
import { FacebookPageRoutingModule } from './facebook-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FacebookPageRoutingModule
  ],
  declarations: [
    FacebookPage,
  ]
})
export class FacebookModule { }
