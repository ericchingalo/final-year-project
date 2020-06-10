import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LaunchRoutingModule } from './launch.routes';
import { pages } from './pages';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...pages],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    LaunchRoutingModule,
  ],
})
export class LaunchModule {}
