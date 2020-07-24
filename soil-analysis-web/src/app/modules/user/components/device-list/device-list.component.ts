import { Component, OnInit, ViewChild } from '@angular/core';
import { Device } from '../../models/device.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource: MatTableDataSource<Device>;
  displayedColumns: string[] = ['id', 'user', 'created', 'lastupdated'];
  constructor(private readonly deviceService: DeviceService) {}

  ngOnInit() {
    const data = this.deviceService.getDummyDevices();
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
