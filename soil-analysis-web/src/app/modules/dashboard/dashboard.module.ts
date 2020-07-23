import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routes';
import { pages } from './pages';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
