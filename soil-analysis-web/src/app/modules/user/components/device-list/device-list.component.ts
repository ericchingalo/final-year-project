import { Component, OnInit, ViewChild } from '@angular/core';
import { Device } from '../../models/device.model';
import {
  MatSort,
  MatPaginator,
  MatTableDataSource,
  MatDialog,
} from '@angular/material';
import { DeviceService } from '../../services/device.service';
import { CustomFormData } from '../../models/form-data.model';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  deviceFormData: CustomFormData;
  dataSource: MatTableDataSource<Device>;
  displayedColumns: string[] = ['id', 'user', 'created', 'lastupdated'];
  constructor(
    private readonly deviceService: DeviceService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const data: Device[] = this.deviceService.getDummyDevices();
    this.initializeMatTable(data);
    this.deviceFormData = this.getDeviceFormData();
  }

  initializeMatTable(data: Device[]): void {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getDeviceFormData(): CustomFormData {
    return {
      inputs: [
        {
          label: 'User Name',
          formControlName: 'user',
          type: 'text',
          required: true,
        },
      ],
    };
  }

  onCreateDevice(e): void {
    if (e) {
      e.stopPropagation();
    }

    const dialogRef = this.dialog.open(FormComponent, {
      width: '400px',
      height: '150px',
      data: this.deviceFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Device registered');
        console.log(result);
      }
    });
  }
}
