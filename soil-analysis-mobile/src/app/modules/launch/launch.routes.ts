import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderPage } from './pages/loader/loader.page';
import { LoginPage } from './pages/login/login.page';

export const routes: Routes = [
  { path: '', component: LoaderPage },
  { path: 'auth', component: LoginPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchRoutingModule {}
