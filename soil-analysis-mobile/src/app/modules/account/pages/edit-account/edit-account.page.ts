import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/reducers/index';
import { generateForm } from '../../../../shared/helpers/form-generator';
import { User } from '../../models/user.model';
import { getCurrentUser } from '../../../../store/selectors/current-user.selectors';
import { take } from 'rxjs/operators';
import { editUser } from '../../../../store/actions/current-user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {
  defaultHref: string;
  editFormGroup: FormGroup;
  editFormData: any;
  currentUser: User;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.defaultHref = '/tabs/account';
    this.getCurrentUser();
    this.editFormData = this.getEditFormData();
    this.setEditForm();
  }

  getCurrentUser() {
    this.store
      .select(getCurrentUser)
      .pipe(take(1))
      .subscribe((user) => (this.currentUser = user));
  }

  setEditForm() {
    this.editFormGroup = generateForm(
      this.editFormGroup,
      this.editFormData,
      this.fb,
      this.currentUser,
    );
  }

  getEditFormData() {
    return {
      inputs: [
        {
          type: 'text',
          required: true,
          formControlName: 'username',
          label: 'User Name',
        },
      ],
    };
  }

  onUpdateUser() {
    const user = { username: this.editFormGroup.value.username };
    this.store.dispatch(editUser({ user }));
    this.router.navigate(['tabs/account']);
  }
}
