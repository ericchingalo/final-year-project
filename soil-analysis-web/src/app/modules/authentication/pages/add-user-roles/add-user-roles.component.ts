import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { generateForm } from '../../helpers/generate-form.helper';

@Component({
  selector: 'app-add-user-roles',
  templateUrl: './add-user-roles.component.html',
  styleUrls: ['./add-user-roles.component.scss'],
})
export class AddUserRolesComponent implements OnInit {
  roleForm: FormGroup;
  roleFormData: any;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.roleFormData = this.getRoleFormData();
    this.roleForm = generateForm(
      this.roleForm,
      this.roleFormData,
      this.formBuilder,
    );
  }

  getRoleFormData() {
    return {
      inputs: [
        {
          type: 'text',
          formControlName: 'role',
          label: 'Role',
        },
        {
          type: 'select',
          formControlName: 'permissions',
          label: 'Permissions',
          options: ['View general reports', 'add users', 'delete users'],
        },
      ],
    };
  }
  onAddRole(role) {
    console.log(role);
    this.router.navigate(['analysis']);
  }
}
