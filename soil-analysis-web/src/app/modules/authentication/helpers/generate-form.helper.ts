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
): any {
  form = fromBuilder.group({});
  formData.inputs.forEach(input => {
    if (input.type === 'email') {
      form.addControl(
        input.formControlName,
        new FormControl(
          '',
          Validators.compose([Validators.required, Validators.email]),
        ),
      );
    } else if (input.type === 'password') {
      form.addControl(
        input.formControlName,
        new FormControl(
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ),
      );
    } else {
      form.addControl(input.formControlName, new FormControl(''));
    }
  });

  return form;
}
