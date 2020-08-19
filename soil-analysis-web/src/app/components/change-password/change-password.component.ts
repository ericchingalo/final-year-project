import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { AuthService } from '../../authentication/services/auth.service';
import { generateForm } from '../../core/helpers/form-generator.helper';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  passwordFormGroup: FormGroup;
  passwordFormData: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>
  ) {}

  ngOnInit() {
    this.passwordFormData = this.getPasswordFormData();
    this.setPasswordForm();
  }

  onDismissForm() {
    this.dialogRef.close();
  }

  async onChangePassword() {
    if (
      this.passwordFormGroup.value.password ===
      this.passwordFormGroup.value.password2
    ) {
      const password = this.passwordFormGroup.value.password;
      await this.authService.updateUserPassword(password);
      this.dialogRef.close();
    } else {
      this.snackbarService.openSnackBar('Password Mismatch', 'OK');
    }
  }

  setPasswordForm() {
    this.passwordFormGroup = generateForm(
      this.passwordFormGroup,
      this.passwordFormData,
      this.fb
    );
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
}
