import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication.routes';
import { LoginComponent } from './pages/login/login.component';
import { pages } from './pages';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [...pages],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
})
export class AuthenticationModule {}
