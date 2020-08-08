import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadDevices } from '../../../../store/actions/devices.actions';
import { loadUsers } from '../../../../store/actions/users.actions';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Device } from '../../models/device.model';
import { getAllUsers } from '../../../../store/selectors/users.selectors';
import { getAllDevices } from '../../../../store/selectors/devices.selectors';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  constructor(private store: Store<State>) {}
  users$: Observable<User[]>;
  devices$: Observable<Device[]>;

  ngOnInit() {
    this.loadUsersAndDevices();
  }

  loadUsersAndDevices() {
    this.users$ = this.store.select(getAllUsers);
    this.devices$ = this.store.select(getAllDevices);
  }
}
