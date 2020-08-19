import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateForm } from '../../../../shared/helpers/form-generator';
import { AuthService } from '../../../launch/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  defaultHref: string;
  passwordFormGroup: FormGroup;
  passwordFormData: any;
  allowButton: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.defaultHref = '/tabs/account';
    this.allowButton = true;
    this.passwordFormData = this.getPasswordFormData();
    this.setPasswordForm();
  }

  checkCurrentUserPassword(password: string) {
    const currentUser = this.authService.currentUserValue;
    const authdata = window.btoa(currentUser.username + ':' + password);

    return currentUser.authdata === authdata;
  }

  getPasswordFormData() {
    return {
      inputs: [
        {
          type: 'password',
          required: true,
          formControlName: 'password',
          label: 'Password',
        },
        {
          type: 'password',
          required: true,
          formControlName: 'password2',
          label: 'Retyped Password',
        },
      ],
    };
  }

  onChangePassword() {
    this.allowButton = false;
    if (
      this.passwordFormGroup.value.password ===
      this.passwordFormGroup.value.password2
    ) {
      const password = this.passwordFormGroup.value.password;
      this.authService.updateUserPassword(password);
      this.router.navigate(['tabs/account']);
    } else {
      this.toastService.presentToast('Password Mismatch');
    }
    this.allowButton = true;
  }

  setPasswordForm() {
    this.passwordFormGroup = generateForm(
      this.passwordFormGroup,
      this.passwordFormData,
      this.fb,
    );
  }
}
