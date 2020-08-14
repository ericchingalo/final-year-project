import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication.routes';
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
    MaterialModule,
  ],
})
export class AuthenticationModule {}
