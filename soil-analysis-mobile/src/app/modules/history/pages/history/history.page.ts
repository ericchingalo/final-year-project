import { Component, OnInit } from '@angular/core';
import { Result } from '../../models/results.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/reducers/index';
import { getAllResults } from '../../../../store/selectors/results.selectors';
import { loadResults } from '../../../../store/actions/results.actions';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss'],
})
export class HistoryPage implements OnInit {
  results$: Observable<Result[]>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.results$ = this.store.select(getAllResults);
  }

  refreshHistory() {
    this.store.dispatch(loadResults());
  }
}
