import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routes';
import { UserHomeComponent } from './pages/user-home/user-home.component';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
