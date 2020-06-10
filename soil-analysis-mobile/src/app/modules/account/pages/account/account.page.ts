import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onEditAccount(e) {
    if (e) {
      e.stopPropagation();
    }
    this.router.navigate(['/tabs/account/edit']);
  }
}
