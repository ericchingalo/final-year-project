import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { components } from './components';
import { DateFormaterPipe } from './pipes/date-formater.pipe';

@NgModule({
  declarations: [...components, DateFormaterPipe],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [...components, DateFormaterPipe],
})
export class SharedModule {}
