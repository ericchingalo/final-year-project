import { BaseState, initialBaseState } from './base.state';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Device } from '../../modules/user/models/device.model';
import { sortByDate } from '../../shared/helpers/sort-by-date.helper';

export interface DevicesState extends BaseState, EntityState<Device> {}

export function selectDeviceId(device: Device): string {
  return device.id;
}

export function sortDevicesByDate(device1: Device, device2: Device): number {
  return sortByDate(device1, device2);
}

export const deviceAdapter = createEntityAdapter<Device>({
  sortComparer: sortDevicesByDate,
  selectId: selectDeviceId,
});

export const initialDevicesState = deviceAdapter.getInitialState({
  ...initialBaseState,
});

export const {
  selectAll: selectAllDevices,
  selectIds: selectDeviceIds,
} = deviceAdapter.getSelectors();
