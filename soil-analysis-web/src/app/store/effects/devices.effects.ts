import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class DevicesEffects {
  constructor(private actions$: Actions) {}
}
