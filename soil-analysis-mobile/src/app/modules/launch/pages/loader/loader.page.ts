import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  appLogo: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.appLogo = 'assets/logo.png';
    setTimeout(() => {
      this.router.navigate(['launch/auth']);
    }, 3000);
  }
}
