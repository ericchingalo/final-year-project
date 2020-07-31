import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Result } from '../../models/results.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() dataSource: Result[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  tableDataSource: MatTableDataSource<Result>;
  displayedColumns: string[] = [
    'date',
    'region',
    'pH',
    'moisture',
    'temperature',
  ];
  constructor() {}

  ngOnInit() {
    this.initiliazeMatTable(this.dataSource);
  }

  initiliazeMatTable(data: Result[]) {
    this.tableDataSource = new MatTableDataSource(data);
    this.tableDataSource.sort = this.sort;
    this.tableDataSource.paginator = this.paginator;
  }
}
