import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchRoutingModule } from './launch.routes';
import { pages } from './pages';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, LaunchRoutingModule],
})
export class LaunchModule {}
