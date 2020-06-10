import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { generateForm } from '../../../../shared/helpers/form-generator';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormData: any;
  loginForm: FormGroup;
  appLogo: string;
  constructor(
    private router: Router,
    private readonly formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.appLogo = 'assets/logo.png';
    this.loginFormData = this.getLoginFormData();
    this.loginForm = generateForm(
      this.loginForm,
      this.loginFormData,
      this.formBuilder,
    );
  }

  onLogin() {
    console.log(this.loginForm.value);
    setTimeout(() => {
      this.loginForm.reset();
      this.router.navigate(['tabs']);
    }, 3000);
  }

  getLoginFormData() {
    return {
      inputs: [
        {
          formControlName: 'username',
          label: 'User Name',
          type: 'text',
          required: true,
        },
        {
          formControlName: 'deviceId',
          required: true,
          type: 'number',
          label: 'Device ID',
        },
        {
          formControlName: 'password',
          required: true,
          type: 'password',
          label: 'Password',
        },
      ],
    };
  }
}
