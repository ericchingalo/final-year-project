import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { AuthService } from '../../../launch/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/reducers/index';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { getCurrentUser } from '../../../../store/selectors/current-user.selectors';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage implements OnInit {
  currentUser$: Observable<User>;
  openSettings: boolean;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertController: AlertController,
    private menu: MenuController,
    private store: Store<State>,
    private readonly authService: AuthService,
    private readonly cookieService: CookieService,
  ) {}

  ngOnInit() {
    this.currentUser$ = this.store.select(getCurrentUser);
  }

  onEditAccount(e) {
    if (e) {
      e.stopPropagation();
    }
    this.menu.close();
    this.router.navigate(['/tabs/account/edit']);
  }

  onOpenSettings() {
    if (this.openSettings) {
      this.menu.close();
    } else {
      this.menu.open();
    }
    this.openSettings = !this.openSettings;
  }

  onChangePassword(e) {
    if (e) {
      e.stopPropagation();
    }
    this.menu.close();
    this.router.navigate(['/tabs/account/password']);
  }

  async presentAlertConfirm() {
    this.menu.close();
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
