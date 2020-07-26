import { Component, OnInit, ViewChild } from '@angular/core';
import { Device } from '../../models/device.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { DeviceService } from '../../services/device.service';
import { CustomFormData } from '../../models/form-data.model';

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
  constructor(private readonly deviceService: DeviceService) {}

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
}
