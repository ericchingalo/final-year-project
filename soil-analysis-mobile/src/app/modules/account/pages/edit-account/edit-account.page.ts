import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {
  defaultHref: string;

  constructor() {}

  ngOnInit() {
    this.defaultHref = '/tabs/account';
  }
}
