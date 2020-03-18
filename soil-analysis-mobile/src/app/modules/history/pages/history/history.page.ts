import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { Result } from '../../models/results.model';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss'],
})
export class HistoryPage implements OnInit {
  results: Result[] = [];
  constructor(private readonly historyService: HistoryService) {}

  ngOnInit() {
    this.results = this.historyService.results;
  }
}
