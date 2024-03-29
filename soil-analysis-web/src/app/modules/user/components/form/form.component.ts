import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomFormData } from '../../../../shared/models/form-data.model';
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
    @Inject(MAT_DIALOG_DATA)
    public data: {
      formData: CustomFormData;
      title: string;
      editing: boolean;
      formValues: any;
    },
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formGroup = generateForm(
      this.formGroup,
      this.data.formData,
      this.fb,
      this.data.formValues
    );
  }

  onDismissForm(e): void {
    if (e) {
      e.stopPropagation();
    }
    this.dialogRef.close();
  }

  onSubmitForm(e) {
    if (e) {
      e.stopPropagation();
    }
    this.dialogRef.close(this.formGroup.value);
  }
}
