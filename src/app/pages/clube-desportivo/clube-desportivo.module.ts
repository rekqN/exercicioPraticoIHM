import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubeDesportivoPageRoutingModule } from './clube-desportivo-routing.module';

import { ClubeDesportivoPage } from './clube-desportivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubeDesportivoPageRoutingModule
  ],
  declarations: [ClubeDesportivoPage]
})
export class ClubeDesportivoPageModule {}
