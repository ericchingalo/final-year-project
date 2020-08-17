import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { generateForm } from '../../../../shared/helpers/form-generator';
import { LoadingController, NavController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { UserCredential } from '../../../account/models/user-credential.model';
import { take } from 'rxjs/operators';
import { ToastService } from '../../../../shared/services/toast-service.service';

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
    private readonly navCtrl: NavController,
    private readonly formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private readonly cookieService: CookieService,
    private readonly authService: AuthService,
    private readonly toastService: ToastService,
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
    const userCredentials: UserCredential = this.loginForm.value;
    this.authService
      .login(userCredentials)
      .pipe(take(1))
      .subscribe(
        (user) => {
          this.saveUserOnCookie(user.id);
          this.navCtrl.navigateRoot('tabs/history');
          this.loginForm.reset();
          this.loginLoader.dismiss();
        },
        (response) => {
          this.loginLoader.dismiss();
          this.toastService.presentToast(
            response.error ? response.error.message : 'Failed to Login',
          );
        },
      );

    // setTimeout(() => {
    // this.navCtrl.navigateRoot('tabs/history');
    // this.loginForm.reset();
    // this.loginLoader.dismiss();
    // }, 3000);
  }

  async presentLoading() {
    this.loginLoader = await this.loadingController.create({
      message: 'Logging in...',
    });
    this.loginLoader.present();
  }

  saveUserOnCookie(id: string) {
    const expires = 60 * 60 * 7 * 1000;
    const cookie = this.cookieService.set('soil-user', id, expires);
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
          formControlName: 'password',
          required: true,
          type: 'password',
          label: 'Password',
        },
      ],
    };
  }
}
