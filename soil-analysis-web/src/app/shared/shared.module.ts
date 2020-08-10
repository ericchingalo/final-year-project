import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { pipes } from './pipes';

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
  imports: [CommonModule, MaterialModule, HttpClientModule],
})
export class SharedModule {}
