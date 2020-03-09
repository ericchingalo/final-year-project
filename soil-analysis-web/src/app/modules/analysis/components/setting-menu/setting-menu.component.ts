import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoComponent } from '../../../authentication/components/user-info/user-info.component';

@Component({
  selector: 'app-setting-menu',
  templateUrl: './setting-menu.component.html',
  styleUrls: ['./setting-menu.component.scss'],
})
export class SettingMenuComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openUserInfo() {
    const dialogRef = this.dialog.open(UserInfoComponent, {
      width: '400px',
      height: '400px',
    });
  }
}
