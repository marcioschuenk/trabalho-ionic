import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../cliente/list-cliente/list-cliente.module#ListClientePageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../servico/list-servico/list-servico.module#ListServicoPageModule'
          }
        ]
      },
      {
        path: 'addServico',
        children: [
          {
            path: '',
            loadChildren: '../servico/add-servico/add-servico.module#AddServicoPageModule'
          }
        ]
      },
      
      {
        path: 'addCliente',
        children: [
          {
            path: '',
            loadChildren: '../cliente/add-cliente/add-cliente.module#AddClientePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
