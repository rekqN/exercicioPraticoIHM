import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubeDesportivoPage } from './clube-desportivo.page';

const routes: Routes = [
  {
    path: '',
    component: ClubeDesportivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubeDesportivoPageRoutingModule {}
