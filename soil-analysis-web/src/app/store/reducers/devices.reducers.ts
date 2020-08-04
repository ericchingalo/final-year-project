import { createReducer, on } from '@ngrx/store';
import {
  deleteDevice,
  deleteDeviceSuccess,
  deleteDeviceFail,
} from '../actions/devices.actions';
import {
  editDevice,
  editDeviceSuccess,
  editDeviceFail,
} from '../actions/devices.actions';
import {
  addDevice,
  addDeviceFail,
  addDeviceSuccess,
} from '../actions/devices.actions';
import {
  initialDevicesState,
  DevicesState,
  deviceAdapter,
} from '../state/devices.state';
import {
  loadDevices,
  loadDevicesSuccess,
  loadDevicesFail,
} from '../actions/devices.actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState,
  addingBaseState,
  addedBaseState,
  updatingBaseState,
  updatedBaseState,
  deletingBaseState,
  deletedBaseState,
} from '../state/base.state';

export const reducer = createReducer(
  initialDevicesState,
  on(loadDevices, (state) => ({ ...state, ...loadingBaseState })),
  on(loadDevicesSuccess, (state, { devices }) =>
    deviceAdapter.addMany(devices, { ...state, ...loadedBaseState })
  ),
  on(loadDevicesFail, (state, { error }) => ({
    ...state,
    errorBaseState,
    error,
  })),
  on(addDevice, (state) => ({ ...state, ...addingBaseState })),
  on(addDeviceSuccess, (state, { device }) =>
    deviceAdapter.addOne(device, { ...state, ...addedBaseState })
  ),
  on(addDeviceFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
  on(editDevice, (state) => ({ ...state, ...updatingBaseState })),
  on(editDeviceSuccess, (state, { device }) =>
    deviceAdapter.updateOne(device, { ...state, ...updatedBaseState })
  ),
  on(editDeviceFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
  on(deleteDevice, (state) => ({ ...state, ...deletingBaseState })),
  on(deleteDeviceSuccess, (state, { id }) =>
    deviceAdapter.removeOne(id, { ...state, ...deletedBaseState })
  ),
  on(deleteDeviceFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  }))
);

export function DevicesReducer(state, action): DevicesState {
  return reducer(state, action);
}
