import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  appLogo: string;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.appLogo = 'assets/logo.png';
    setTimeout(() => {
      this.navCtrl.navigateRoot('launch/auth');
    }, 3000);
  }
}
