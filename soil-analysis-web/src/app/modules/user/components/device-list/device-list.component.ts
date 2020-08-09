import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
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
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { deleteDevice } from '../../../../store/actions/devices.actions';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit, OnChanges {
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
    public dialog: MatDialog,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.deviceFormData = this.getDeviceFormData();
  }

  ngOnChanges() {
    const data: Device[] = this.devices;
    this.initializeMatTable(data);
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

  onDelete(e, id) {
    if (e) {
      e.stopPropagation();
    }
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '400px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(deleteDevice({ id }));
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
