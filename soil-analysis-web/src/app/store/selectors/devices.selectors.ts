import * as _ from 'lodash';
import { createSelector } from '@ngrx/store';
import { getRootState } from '../reducers/index';
import { State } from 'src/app/store/reducers';
import { selectAllDevices } from '../state';

export const getDevicesState = createSelector(
  getRootState,
  (state: State) => state.devices
);

export const getAllDevices = createSelector(getDevicesState, selectAllDevices);
