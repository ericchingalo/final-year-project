import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class SharedModule {}
