import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BaseService } from '../../../shared/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint: string;
  constructor(private http: BaseService<User>) {
    this.endpoint = 'users';
  }

  findOneById(id: string): Observable<any> {
    return this.http.findOneById(this.endpoint, id);
  }

  update(id: string, updatedUser: Partial<User>): Observable<any> {
    return this.http.update(this.endpoint, id, updatedUser);
  }
}
