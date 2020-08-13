import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LogoutComponent>,
    private readonly router: Router,
    private coockieService: CookieService,
    private snackBarService: SnackbarService,
    private authService: AuthService
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

  async logoutUser() {
    this.coockieService.delete('soil-user', '/');
    await this.authService.logout();
    this.router.navigate(['/login']);
    this.snackBarService.openSnackBar('Logged Out', '');
  }
}
