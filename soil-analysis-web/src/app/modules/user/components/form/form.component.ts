import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomFormData } from '../../models/form-data.model';
import { generateForm } from '../../../../core/helpers/form-generator.helper';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public fromData: CustomFormData,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.fromData);
    this.formGroup = generateForm(this.formGroup, this.fromData, this.fb);
  }

  onDismissForm(): void {
    this.dialogRef.close();
  }
}
