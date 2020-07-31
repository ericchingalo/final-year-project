import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { generateForm } from 'src/app/core/helpers/form-generator.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormData: any;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginFormData = this.getFormData();
    this.loginForm = generateForm(
      this.loginForm,
      this.loginFormData,
      this.formBuilder
    );
  }

  getFormData(): any {
    return {
      inputs: [
        { label: 'User Name', type: 'text', formControlName: 'username' },
        { label: 'Password', type: 'password', formControlName: 'password' },
      ],
    };
  }

  onLoginSubmit(userInfo) {
    console.log(userInfo);
    this.router.navigate(['/']);
  }
}
