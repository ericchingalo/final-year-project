import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Device } from '../../models/device.model';
import {
  getAllUsers,
  getUserLoaded,
  getUsersLoading,
} from '../../../../store/selectors/users.selectors';
import {
  getAllDevices,
  getDeviceLoadedState,
  getDevicesLoadingState,
} from '../../../../store/selectors/devices.selectors';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  constructor(private store: Store<State>) {}
  users$: Observable<User[]>;
  devices$: Observable<Device[]>;
  userLoaded$: Observable<boolean>;
  userLoading$: Observable<boolean>;
  deviceLoading$: Observable<boolean>;
  deviceLoaded$: Observable<boolean>;

  ngOnInit() {
    this.loadUsersAndDevices();
    this.getLoadedAndLoadingStates();
  }

  loadUsersAndDevices() {
    this.users$ = this.store.select(getAllUsers);
    this.devices$ = this.store.select(getAllDevices);
  }

  getLoadedAndLoadingStates() {
    this.userLoaded$ = this.store.select(getUserLoaded);
    this.userLoading$ = this.store.select(getUsersLoading);
    this.deviceLoaded$ = this.store.select(getDeviceLoadedState);
    this.deviceLoading$ = this.store.select(getDevicesLoadingState);
  }
}
