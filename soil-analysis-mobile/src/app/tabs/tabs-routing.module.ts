import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './pages/tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../modules/history/history.module').then(
                m => m.HistoryPageModule,
              ),
          },
        ],
      },
      {
        path: 'analysis',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../modules/analysis/analysis.module').then(
                m => m.AnalysisPageModule,
              ),
          },
        ],
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../modules/account/account.module').then(
                m => m.AccountPageModule,
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/history',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/history',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
