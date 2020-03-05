import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateForm } from '../../helpers/generate-form.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormData: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginFormData = this.getFormData();
    this.loginForm = generateForm(
      this.loginForm,
      this.loginFormData,
      this.formBuilder,
    );
  }

  getFormData(): any {
    return {
      inputs: [
        { label: 'Name', type: 'text', formControlName: 'name' },
        { label: 'Password', type: 'password', formControlName: 'password' },
      ],
    };
  }
}
