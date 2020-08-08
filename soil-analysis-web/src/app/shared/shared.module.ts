import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';

@NgModule({
  declarations: [ArrayToStringPipe],
  exports: [ArrayToStringPipe],
  imports: [CommonModule, MaterialModule, HttpClientModule],
})
export class SharedModule {}
