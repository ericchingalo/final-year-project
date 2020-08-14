import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Device } from '../../models/device.model';
import {
  getAllUsers,
  getUsersLoading,
} from '../../../../store/selectors/users.selectors';
import {
  getAllDevices,
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
  userLoading$: Observable<boolean>;
  deviceLoading$: Observable<boolean>;

  ngOnInit() {
    this.loadUsersAndDevices();
    this.getLoadedAndLoadingStates();
  }

  loadUsersAndDevices() {
    this.users$ = this.store.select(getAllUsers);
    this.devices$ = this.store.select(getAllDevices);
  }

  getLoadedAndLoadingStates() {
    this.userLoading$ = this.store.select(getUsersLoading);
    this.deviceLoading$ = this.store.select(getDevicesLoadingState);
  }
}
