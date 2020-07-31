import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

export function generateForm(
  form: FormGroup,
  formData: any,
  fromBuilder: FormBuilder,
  values?: any
): FormGroup {
  form = fromBuilder.group({});
  formData.inputs.forEach((input) => {
    if (input.type === 'email') {
      form.addControl(
        input.formControlName,
        new FormControl(
          values
            ? values[input.formControlName]
              ? values[input.formControlName]
              : ''
            : '',
          Validators.compose([Validators.required, Validators.email])
        )
      );
    } else if (input.type === 'password') {
      form.addControl(
        input.formControlName,
        new FormControl(
          values
            ? values[input.formControlName]
              ? values[input.formControlName]
              : ''
            : '',
          Validators.compose([Validators.required, Validators.minLength(6)])
        )
      );
    } else if (input.required) {
      form.addControl(
        input.formControlName,
        new FormControl(
          values
            ? values[input.formControlName]
              ? values[input.formControlName]
              : ''
            : '',
          Validators.required
        )
      );
    } else if (input.type === 'date') {
      form.addControl(
        input.formControlName,
        new FormControl(
          values
            ? values[input.formControlName]
              ? values[input.formControlName]
              : new Date()
            : new Date()
        )
      );
    } else {
      form.addControl(
        input.formControlName,
        new FormControl(
          values
            ? values[input.formControlName]
              ? values[input.formControlName]
              : ''
            : ''
        )
      );
    }
  });

  return form;
}
