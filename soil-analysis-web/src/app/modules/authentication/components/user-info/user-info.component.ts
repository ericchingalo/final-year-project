import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UserInfoComponent>) {}
  name: string;
  email: string;
  roles: string[];

  ngOnInit() {
    (this.name = 'Eric Chingalo'),
      (this.email = 'echingalo@gmail.com'),
      (this.roles = ['admin']);
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }
}
