import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { generateForm } from 'src/app/core/helpers/form-generator.helper';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';

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
    private snackBarService: SnackbarService
  ) {}

  ngOnInit() {
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
        () => this.router.navigate(['/']),
        (error) => this.snackBarService.openSnackBar('Failed to Login', 'RETRY')
      );
  }
}
