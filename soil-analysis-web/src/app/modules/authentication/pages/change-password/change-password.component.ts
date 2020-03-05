import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateForm } from '../../helpers/generate-form.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  passwordForm: FormGroup;
  passwordFormData: any;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.passwordFormData = this.getFormData();
    this.passwordForm = generateForm(
      this.passwordForm,
      this.passwordFormData,
      this.formBuilder,
    );
  }

  onChangePassword(passwords) {
    console.log(passwords);
    if (passwords.newPassword === passwords.retypePassword) {
      this.router.navigate(['analysis']);
    } else {
      // TODO add snackbar to show the message
      console.log('Password Dont match');
    }
  }

  getFormData(): any {
    return {
      inputs: [
        {
          type: 'password',
          formControlName: 'oldPassword',
          label: 'Current Password',
        },
        {
          type: 'password',
          formControlName: 'newPassword',
          label: 'New Password',
        },
        {
          type: 'password',
          formControlName: 'retypePassword',
          label: 'Retype New Password',
        },
      ],
    };
  }
}
