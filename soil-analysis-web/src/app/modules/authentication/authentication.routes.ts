import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AddUserRolesComponent } from './pages/add-user-roles/add-user-roles.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: AddUserComponent },
  { path: 'register-role', component: AddUserRolesComponent },
  { path: 'change-password', component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
