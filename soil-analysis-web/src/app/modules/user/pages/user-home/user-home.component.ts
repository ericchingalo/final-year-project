import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadDevices } from '../../../../store/actions/devices.actions';
import { loadUsers } from '../../../../store/actions/users.actions';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loadUsersAndDevices();
  }

  loadUsersAndDevices() {
    this.store.dispatch(loadDevices());
    this.store.dispatch(loadUsers());
  }
}
