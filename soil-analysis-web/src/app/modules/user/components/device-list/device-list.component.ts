import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Device } from '../../models/device.model';
import {
  MatSort,
  MatPaginator,
  MatTableDataSource,
  MatDialog,
} from '@angular/material';
import { DeviceService } from '../../services/device.service';
import { CustomFormData } from '../../../../shared/models/form-data.model';
import { FormComponent } from '../form/form.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() devices: Device[];

  deviceFormData: CustomFormData;
  dataSource: MatTableDataSource<Device>;
  displayedColumns: string[] = [
    'id',
    'user',
    'created',
    'lastUpdated',
    'actions',
  ];
  constructor(
    private readonly deviceService: DeviceService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // const data: Device[] = this.deviceService.getDummyDevices();
    const data: Device[] = this.devices;
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
          label: 'Assigned User',
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
      height: '200px',
      data: {
        formData: this.deviceFormData,
        title: 'Device Registration',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  onDelete(e) {
    if (e) {
      e.stopPropagation();
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '400px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  onEdit(e) {
    if (e) {
      e.stopPropagation();
    }

    // open edit dialog
  }
}
