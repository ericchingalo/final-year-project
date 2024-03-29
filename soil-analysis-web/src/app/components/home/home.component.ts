import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadDevices } from 'src/app/store/actions/devices.actions';
import { loadUsers } from 'src/app/store/actions';
import { Observable } from 'rxjs';
import { User } from '../../modules/user/models/user.model';
import { getUsersLoading } from '../../store/selectors/users.selectors';
import {
  getCurrentUser,
  getCurrentUserLoaded,
  getCurrentUserLoading,
} from '../../store/selectors/current-user.selector';
import { getDevicesLoadingState } from '../../store/selectors/devices.selectors';
import { getResultsLoadingState } from 'src/app/modules/dashboard/store/selectors';
import { loadResults } from '../../modules/dashboard/store/actions/results.actions';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentUser$: Observable<User>;
  currentUserLoading$: Observable<boolean>;
  currentUserLoaded$: Observable<boolean>;
  userLoading$: Observable<boolean>;
  deviceLoading$: Observable<boolean>;
  resultsLoading$: Observable<boolean>;

  showDropdown: boolean;
  constructor(public dialog: MatDialog, private store: Store<State>) {}

  ngOnInit() {
    this.showDropdown = false;
    this.store.dispatch(loadDevices());
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadResults());
    this.currentUser$ = this.store.select(getCurrentUser);
    this.currentUserLoaded$ = this.store.select(getCurrentUserLoaded);
    this.currentUserLoading$ = this.store.select(getCurrentUserLoading);
    this.userLoading$ = this.store.select(getUsersLoading);
    this.deviceLoading$ = this.store.select(getDevicesLoadingState);
    this.resultsLoading$ = this.store.select(getResultsLoadingState);
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

  onChangePassword(e) {
    if (e) {
      e.stopPropagation();
    }

    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '400px',
      height: '410px',
    });
  }
}
