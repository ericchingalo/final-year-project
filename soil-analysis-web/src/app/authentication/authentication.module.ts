import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication.routes';
import { LoginComponent } from './pages/login/login.component';
import { pages } from './pages';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
