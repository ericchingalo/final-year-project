import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { getErrorMessage } from '../../shared/helpers/error-message.helper';
import { DeviceService } from '../../modules/user/services/device.service';
import {
  addDevice,
  addDeviceSuccess,
  deleteDevice,
} from '../actions/devices.actions';
import {
  loadDevices,
  loadDevicesSuccess,
  loadDevicesFail,
} from '../actions/devices.actions';
import {
  editDevice,
  editDeviceSuccess,
  editDeviceFail,
  addDeviceFail,
} from '../actions/devices.actions';
import {
  deviceSanitizer,
  sanitizeSingleDevice,
} from '../../modules/user/helpers/device-sanitizer.helper';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {
  deleteDeviceSuccess,
  deleteDeviceFail,
} from '../actions/devices.actions';

@Injectable()
export class DevicesEffects {
  constructor(
    private actions$: Actions,
    private deviceService: DeviceService,
    private snackBarService: SnackbarService,
    private readonly cookieService: CookieService,
    private router: Router
  ) {}

  loadDevices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDevices),
      switchMap(() =>
        this.deviceService.findAll().pipe(
          map((devices) =>
            loadDevicesSuccess({ devices: deviceSanitizer(devices) })
          ),
          catchError((res) => {
            if (res.status === 401) {
              this.cookieService.delete('soil-user', '/');
              this.router.navigate(['/']);
            }
            return of(loadDevicesFail({ error: getErrorMessage(res) }));
          })
        )
      )
    )
  );

  addDevice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDevice),
      mergeMap((action) =>
        this.deviceService.create(action.device).pipe(
          map((device) =>
            addDeviceSuccess({ device: sanitizeSingleDevice(device) })
          ),
          catchError((res) => {
            if (res.status === 401) {
              this.cookieService.delete('soil-user', '/');
              this.router.navigate(['/']);
            }
            const err: string = getErrorMessage(res);
            this.snackBarService.openSnackBar(err, 'OK');
            return of(addDeviceFail({ error: err }));
          })
        )
      )
    )
  );

  deleteDevice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteDevice),
      mergeMap((action) =>
        this.deviceService.delete(action.id).pipe(
          map(
            () => {
              this.snackBarService.openSnackBar('Deleted Device', 'OK');
              return deleteDeviceSuccess({ id: action.id });
            },
            catchError((res) => {
              if (res.status === 401) {
                this.cookieService.delete('soil-user', '/');
                this.router.navigate(['/']);
              }
              const err: string = getErrorMessage(res);
              this.snackBarService.openSnackBar(err, 'OK');
              return of(deleteDeviceFail({ error: err }));
            })
          )
        )
      )
    )
  );

  updateDevice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editDevice),
      mergeMap((action) =>
        this.deviceService.update(action.device.id, action.device).pipe(
          map(
            (device) =>
              editDeviceSuccess({
                device: {
                  id: action.device.id,
                  changes: { ...device, user: device.user.username },
                },
              }),
            catchError((res) => {
              if (res.status === 401) {
                this.cookieService.delete('soil-user', '/');
                this.router.navigate(['/']);
              }
              const err: string = getErrorMessage(res);
              this.snackBarService.openSnackBar(err, 'OK');
              return of(editDeviceFail({ error: err }));
            })
          )
        )
      )
    )
  );
}
