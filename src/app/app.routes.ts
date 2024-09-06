import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes)
  },
  // {
  //   path: 'inicio',
  //   loadComponent: () => import('./inicio/inicio.page').then(m => m.InicioPage)
  // },
  {
    path: 'registrar',
    loadComponent: () => import('./registrar/registrar.page').then(m => m.RegistrarPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  }
];
