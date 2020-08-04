import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Device } from '../../modules/user/models/device.model';

export const loadDevices = createAction('[DEVICES] Load Devices');

export const loadDevicesSuccess = createAction(
  '[DEVICES] Load Devices Success',
  props<{ users: Device[] }>()
);

export const loadDevicesFail = createAction(
  '[DEVICES] Load Devices Fail',
  props<{ error: string }>()
);

export const addDevice = createAction(
  '[DEVICES] Add Device',
  props<{ user: Device }>()
);

export const addDeviceSuccess = createAction(
  '[DEVICES] Add Device Success',
  props<{ user: Device }>()
);

export const addDeviceFail = createAction(
  '[DEVICES] Add Device Fail',
  props<{ error: string }>()
);

export const editDevice = createAction(
  '[DEVICES] Edit Device',
  props<{ user: Device }>()
);

export const editDeviceSuccess = createAction(
  '[DEVICES] Edit Device Success',
  props<{ user: Update<Device> }>()
);

export const editDeviceFail = createAction(
  '[DEVICES] Edit Device Fail',
  props<{ error: string }>()
);

export const deleteDevice = createAction(
  '[DEVICES] Delete Device',
  props<{ id: string }>()
);

export const deleteDeviceSuccess = createAction(
  '[DEVICES] Delete Device Success',
  props<{ id: string }>()
);

export const deleteDeviceFail = createAction(
  '[DEVICES] Delete Device Fail',
  props<{ error: string }>()
);
