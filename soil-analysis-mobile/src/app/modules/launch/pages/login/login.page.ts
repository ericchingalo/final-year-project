import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { generateForm } from '../../../../shared/helpers/form-generator';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormData: any;
  loginForm: FormGroup;
  appLogo: string;
  loginLoader: any;
  constructor(
    private router: Router,
    private readonly formBuilder: FormBuilder,
    private loadingController: LoadingController,
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
    this.presentLoading();
    setTimeout(() => {
      this.router.navigate(['tabs']);
      this.loginForm.reset();
      this.loginLoader.dismiss();
    }, 3000);
  }

  async presentLoading() {
    this.loginLoader = await this.loadingController.create({
      message: 'Logging in...',
    });
    this.loginLoader.present();
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
