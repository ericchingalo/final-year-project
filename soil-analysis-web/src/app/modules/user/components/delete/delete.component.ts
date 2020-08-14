import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SnackbarService } from '../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  public data = true;
  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    private snackBarService: SnackbarService
  ) {}

  ngOnInit() {}

  onCancel(e) {
    if (e) {
      e.stopPropagation();
    }
    this.dialogRef.close();
  }

  onDelete(e) {
    if (e) {
      e.stopPropagation();
    }

    this.dialogRef.close(this.data);
    this.snackBarService.openSnackBar('Deleting', 'OK');
  }
}
