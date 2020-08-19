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

  findAll(): Observable<any> {
    return this.http.findAll(this.endpoint);
  }

  findOneById(id: string): Observable<any> {
    return this.http.findOneById(this.endpoint, id);
  }

  create(user: User): Observable<any> {
    return this.http.create(this.endpoint, user);
  }

  update(id: string, updatedUser: Partial<User>): Observable<any> {
    return this.http.update(this.endpoint, id, updatedUser);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.endpoint, id);
  }
}
