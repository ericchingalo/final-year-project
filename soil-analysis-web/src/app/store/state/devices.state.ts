import { BaseState, initialBaseState } from './base.state';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Device } from '../../modules/user/models/device.model';

export interface DevicesState extends BaseState, EntityState<Device> {}

export function selectDeviceId(user: Device): string {
  return user.id;
}

export const deviceAdapter = createEntityAdapter<Device>({
  sortComparer: false,
  selectId: selectDeviceId,
});

export const initialDevicesState = deviceAdapter.getInitialState({
  ...initialBaseState,
});

export const {
  selectAll: selectAllDevices,
  selectIds: selectDeviceIds,
} = deviceAdapter.getSelectors();
