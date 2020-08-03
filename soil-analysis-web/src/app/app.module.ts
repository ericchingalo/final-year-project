import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { AppEffects } from './store/effects/app.effects';
import { components } from './components';
import { MaterialModule } from './core/material/material.module';
import { LogoutComponent } from './components/logout/logout.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent],
  entryComponents: [LogoutComponent],
})
export class AppModule {}
