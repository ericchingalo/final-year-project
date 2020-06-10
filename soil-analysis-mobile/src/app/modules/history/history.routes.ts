import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPage } from './pages/history/history.page';
import { ResultDetailsPage } from './pages/result-details/result-details.page';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HistoryPage },
      { path: ':id', component: ResultDetailsPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
