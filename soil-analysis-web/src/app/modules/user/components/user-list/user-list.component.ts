import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import {
  MatTableDataSource,
  MatSort,
  MatPaginator,
  MatDialog,
} from '@angular/material';
import { UserService } from '../../services/user.service';
import { CustomFormData } from '../../models/form-data.model';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource: MatTableDataSource<User>;
  userFormData: CustomFormData;
  displayedColumns: string[] = [
    'username',
    'role',
    'region',
    'created',
    'lastupdated',
  ];
  constructor(
    private readonly userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const data = this.userService.getDummyUsers();
    this.initializeMatTable(data);
    this.userFormData = this.getUserFormData();
  }

  initializeMatTable(data: User[]): void {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getUserFormData(): CustomFormData {
    return {
      inputs: [
        {
          label: 'User Name',
          formControlName: 'username',
          type: 'text',
          required: true,
        },
        {
          label: 'Email',
          formControlName: 'email',
          type: 'email',
          required: true,
        },
        {
          label: 'Region',
          formControlName: 'region',
          type: 'text',
          required: true,
        },
        {
          label: 'Roles',
          formControlName: 'roles',
          type: 'select',
          options: [
            {
              label: 'Admin',
              value: 'admin',
            },
            {
              label: 'Tester',
              value: 'tester',
            },
            {
              label: 'Guest',
              value: 'guest',
            },
          ],
          required: true,
        },
      ],
    };
  }

  onCreateUser(e) {
    if (e) {
      e.stopPropagation();
    }

    const dialogRef = this.dialog.open(FormComponent, {
      width: '400px',
      height: '410px',
      data: {
        formData: this.userFormData,
        title: 'User Registration',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Created User');
        console.log(result);
      }
    });
  }
}
