import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  constructor() {
    console.log('Hello there');
  }

  ngOnInit() {
    console.log('Hello there');
  }
}
