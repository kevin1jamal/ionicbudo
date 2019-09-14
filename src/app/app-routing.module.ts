import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'liste-actualite', loadChildren: './pages/actualites/liste-actualite/liste-actualite.module#ListeActualitePageModule' },
  { path: 'detail-actualite/:id', loadChildren: './pages/actualites/detail-actualite/detail-actualite.module#DetailActualitePageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
