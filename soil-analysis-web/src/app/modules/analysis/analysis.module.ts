import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { AnalysisRoutingModule } from './analysis.routes';
import { pages } from './pages';
import { components } from './components';
import { MatDialogModule } from '@angular/material/dialog';
import { UserInfoComponent } from '../authentication/components/user-info/user-info.component';
import { AuthenticationModule } from '../authentication/authentication.module';

@NgModule({
  declarations: [...pages, ...components],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    AnalysisRoutingModule,
    AuthenticationModule,
  ],
  entryComponents: [UserInfoComponent],
})
export class AnalysisModule {}
