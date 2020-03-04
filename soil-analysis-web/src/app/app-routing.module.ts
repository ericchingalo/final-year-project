import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren:
      './modules/authentication/authentication.module#AuthenticationModule',
  },
  {
    path: 'analysis',
    loadChildren: './modules/analysis/analysis.module#AnalysisModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
