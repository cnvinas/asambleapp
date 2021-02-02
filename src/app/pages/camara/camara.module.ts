import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CamaraPage } from './camara';
import { CamaraPageRoutingModule } from './camara-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraPageRoutingModule,
    RouterModule.forChild([{ path: '', component: CamaraPage }])
  ],
  declarations: [CamaraPage]
})
export class CamaraModule {}
