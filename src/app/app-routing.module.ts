import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sobre-mim',
    pathMatch: 'full'
  },
  {
    path: 'sobre-mim',
    loadChildren: () => import('./pages/sobre-mim/sobre-mim.module').then( m => m.SobreMimPageModule)
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./pages/gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'clube-desportivo',
    loadChildren: () => import('./pages/clube-desportivo/clube-desportivo.module').then( m => m.ClubeDesportivoPageModule)
  },
  {
    path: 'turismo',
    loadChildren: () => import('./pages/turismo/turismo.module').then( m => m.TurismoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
