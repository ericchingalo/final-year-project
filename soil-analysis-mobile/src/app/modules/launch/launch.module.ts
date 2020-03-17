import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LaunchRoutingModule } from './launch.routes';
import { pages } from './pages';

@NgModule({
  declarations: [...pages],
  imports: [IonicModule, CommonModule, LaunchRoutingModule],
})
export class LaunchModule {}
