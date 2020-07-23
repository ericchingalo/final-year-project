import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: {
    username: string;
    role: string;
  };
  constructor() {}

  ngOnInit() {
    this.user = {
      username: 'Chingalo',
      role: 'Admin',
    };
  }
}
