import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routes';
import { pages } from './pages';
import { MaterialModule } from '../../core/material/material.module';
import { components } from './components';

@NgModule({
  declarations: [...pages, ...components],
  imports: [CommonModule, UserRoutingModule, MaterialModule],
})
export class UserModule {}
