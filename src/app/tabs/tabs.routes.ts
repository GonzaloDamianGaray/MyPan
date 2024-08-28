import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RegistrarPage } from '../registrar/registrar.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('../inicio/inicio.page').then(m => m.InicioPage),
      },
      {
        path: 'tab2',
        loadComponent: () => import('../tab2/tab2.page').then(m => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () => import('../tab3/tab3.page').then(m => m.Tab3Page),
      },
      {
        path: 'registrar',
        loadComponent: () => import('../registrar/registrar.page').then(m => m.RegistrarPage),
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
];
