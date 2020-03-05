import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { components } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild([]),
  ],
  exports: [...components],
})
export class SharedModule {}
