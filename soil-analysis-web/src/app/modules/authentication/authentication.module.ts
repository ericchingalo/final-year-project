import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AuthenticationRoutingModule } from './authentication.routes';
import { pages } from './pages';

@NgModule({
  declarations: [...pages],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class AuthenticationModule {}
