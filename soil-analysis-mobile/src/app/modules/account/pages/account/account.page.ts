import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../../../launch/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage implements OnInit {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertController: AlertController,
    private readonly authService: AuthService,
    private readonly cookieService: CookieService,
  ) {}

  ngOnInit() {}

  onEditAccount(e) {
    if (e) {
      e.stopPropagation();
    }
    this.router.navigate(['/tabs/account/edit']);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Are you sure you want to logout</strong>!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Logout',
          handler: async () => {
            this.cookieService.delete('soil-user', '/');
            await this.authService.logout();
            this.navCtrl.navigateRoot('/launch/auth');
          },
        },
      ],
    });

    await alert.present();
  }
}
