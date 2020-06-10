import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Result } from '../../models/results.model';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.page.html',
  styleUrls: ['./result-details.page.scss'],
})
export class ResultDetailsPage implements OnInit {
  displayedColumns: string[];
  dataSource: Array<{
    parameter: string;
    value: number;
  }>;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
  ) {}

  result: Result;

  ngOnInit() {
    this.result = this.navParams.get('result');
    this.displayedColumns = ['Parameter', 'Value'];
    this.dataSource = this.result.results;
  }

  onDismiss(e) {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
