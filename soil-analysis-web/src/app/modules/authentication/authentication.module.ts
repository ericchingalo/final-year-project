import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthenticationRoutingModule } from './authentication.routes';
import { pages } from './pages';
import { components } from './components';
import { SharedModule } from '../shared/shared.module';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [...pages, ...components],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
  ],
  entryComponents: [UserInfoComponent],
})
export class AuthenticationModule {}
