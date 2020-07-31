import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LogoutComponent>,
    private readonly router: Router
  ) {}

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
    this.router.navigate(['/login']);
    console.log('User Logout');
  }
}
