import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../models/results.model';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ResultDetailsPage } from '../../pages/result-details/result-details.page';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent implements OnInit {
  @Input() result: Result;

  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) {}

  ngOnInit() {}

  async navigateToDetails() {
    // this.router.navigate(['']);
    const modal = await this.modalController.create({
      component: ResultDetailsPage,
      componentProps: {
        result: this.result,
        swipeToClose: true,
        presentingElement: this.routerOutlet.nativeEl,
      },
    });
    return await modal.present();
  }
}
