import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { generateForm } from 'src/app/core/helpers/form-generator.helper';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormData: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBarService: SnackbarService,
    private cookieSeervice: CookieService
  ) {}

  ngOnInit() {
    this.cookieSeervice.delete('soil-user');
    this.loginFormData = this.getFormData();
    this.loginForm = generateForm(
      this.loginForm,
      this.loginFormData,
      this.formBuilder
    );
  }

  getFormData(): any {
    return {
      inputs: [
        { label: 'User Name', type: 'text', formControlName: 'username' },
        { label: 'Password', type: 'password', formControlName: 'password' },
      ],
    };
  }

  onLoginSubmit(userInfo) {
    this.authService
      .login(userInfo)
      .pipe(take(1))
      .subscribe(
        (user: any) => this.saveUserOnCookie(user.id),
        (response: any) => {
          this.snackBarService.openSnackBar(
            response.error ? response.error.message : 'Failed to Login',
            'RETRY'
          );
        }
      );
  }

  saveUserOnCookie(id: string) {
    const expires = 60 * 60 * 7 * 1000;
    const cookie = this.cookieSeervice.set('soil-user', id, expires);
    this.router.navigate(['/']);
  }
}
