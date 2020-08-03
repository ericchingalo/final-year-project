import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  url: string;
  constructor(private readonly http: HttpClient, private endpoint: string) {
    this.url = `localhost:3000/api/${endpoint}`;
  }

  findAll(): Observable<any> {
    return this.http.get(this.url);
  }

  findOneById(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  create(data: T): Observable<any> {
    return this.http.post(this.url, data);
  }

  update(id: string, updatedData: Partial<T>): Observable<any> {
    return this.http.put(`${this.url}/${id}`, updatedData);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
