import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/index';
import { Observable } from 'rxjs';
import { getCurrentUserLoading } from '../../store/selectors/current-user.selectors';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  userLoading$: Observable<boolean>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.userLoading$ = this.store.select(getCurrentUserLoading);
  }
}
