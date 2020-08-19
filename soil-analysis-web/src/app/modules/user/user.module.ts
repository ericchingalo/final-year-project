import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routes';
import { pages } from './pages';
import { MaterialModule } from '../../core/material/material.module';
import { components } from './components';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DeleteComponent } from './components/delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [...pages, ...components],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  entryComponents: [FormComponent, DeleteComponent],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
})
export class UserModule {}
