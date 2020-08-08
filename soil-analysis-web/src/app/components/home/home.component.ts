import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadDevices } from 'src/app/store/actions/devices.actions';
import { loadUsers } from 'src/app/store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: {
    username: string;
    role: string;
  };
  constructor(public dialog: MatDialog, private store: Store<State>) {}

  ngOnInit() {
    this.user = {
      username: 'Chingalo',
      role: 'Admin',
    };

    this.store.dispatch(loadDevices());
    this.store.dispatch(loadUsers());
  }

  onLogout(e) {
    if (e) {
      e.stopPropagation();
    }

    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '400px',
      height: '200px',
    });
  }
}
