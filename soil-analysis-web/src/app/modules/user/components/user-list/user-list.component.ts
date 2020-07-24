import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = [
    'username',
    'role',
    'region',
    'created',
    'lastupdated',
  ];
  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    const data = this.userService.getDummyUsers();
    this.dataSource = new MatTableDataSource(this.userService.getDummyUsers());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
