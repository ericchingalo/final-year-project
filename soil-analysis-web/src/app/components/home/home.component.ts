import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';

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
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.user = {
      username: 'Chingalo',
      role: 'Admin',
    };
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
