import * as _ from 'lodash';
import { createSelector } from '@ngrx/store';
import { getRootState } from '../reducers/index';
import { State } from 'src/app/store/reducers';
import { selectAllDevices } from '../state';
import { DevicesState } from '../state/devices.state';

export const getDevicesState = createSelector(
  getRootState,
  (state: State) => state.devices
);

export const getAllDevices = createSelector(getDevicesState, selectAllDevices);

export const getDevicesLoadingState = createSelector(
  getDevicesState,
  (state: DevicesState) => state.loading
);

export const getDeviceLoadedState = createSelector(
  getDevicesState,
  (state: DevicesState) => state.loaded
);
