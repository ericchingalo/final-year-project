import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { pipes } from './pipes';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { components } from './components';

@NgModule({
  declarations: [...pipes, ...components],
  exports: [...pipes, ...components],
  imports: [CommonModule, MaterialModule, HttpClientModule],
})
export class SharedModule {}
