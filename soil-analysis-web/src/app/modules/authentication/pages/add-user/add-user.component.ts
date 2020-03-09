import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateForm } from '../../helpers/generate-form.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  userFormData: any;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.userFormData = this.getFormData();
    this.userForm = generateForm(
      this.userForm,
      this.userFormData,
      this.formBuilder,
    );
  }

  getFormData() {
    return {
      inputs: [
        {
          type: 'text',
          formControlName: 'name',
          label: 'Name',
        },
        {
          type: 'email',
          formControlName: 'email',
          label: 'Email',
        },
        {
          type: 'select',
          formControlName: 'roles',
          label: 'User roles',
          options: ['admin', 'reseacher'],
        },
      ],
    };
  }

  onAddUser(user) {
    console.log(user);
    this.router.navigate(['analysis']);
  }
}
