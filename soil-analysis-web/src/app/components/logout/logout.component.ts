import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LogoutComponent>) {}

  ngOnInit() {}

  onCancel(e) {
    if (e) {
      e.stopPropagation();
    }

    this.dialogRef.close();
  }

  onLogout(e) {
    if (e) {
      e.stopPropagation();
    }
    this.logoutUser();
    this.dialogRef.close();
  }

  logoutUser() {
    console.log('User Logout');
  }
}
