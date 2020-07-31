import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  public data: boolean;
  constructor(public dialogRef: MatDialogRef<DeleteComponent>) {}

  ngOnInit() {
    this.data = true;
  }

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

    this.dialogRef.close();
  }
}
