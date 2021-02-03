import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BrowsePage } from './browse';
import { BrowsePageRoutingModule } from './browse-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BrowsePageRoutingModule
  ],
  declarations: [
    BrowsePage,
  ]
})
export class BrowseModule { }
