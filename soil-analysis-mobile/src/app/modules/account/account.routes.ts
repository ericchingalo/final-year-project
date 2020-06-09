import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPage } from './pages/account/account.page';
import { EditAccountPage } from './pages/edit-account/edit-account.page';

export const routes: Routes = [
  { path: '', component: AccountPage },
  { path: 'edit', component: EditAccountPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
