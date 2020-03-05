import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AuthenticationRoutingModule } from './authentication.routes';
import { pages } from './pages';
import { components } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...pages, ...components],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
  ],
})
export class AuthenticationModule {}
