import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AgroecologiaYaPage } from './agroecologiaya';
import { AgroecologiaYaPageRoutingModule } from './agroecologiaya-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AgroecologiaYaPageRoutingModule
  ],
  declarations: [
    AgroecologiaYaPage,
  ]
})
export class AgroecologiaYaModule { }
