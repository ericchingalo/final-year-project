import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  url: string;
  constructor(private readonly http: HttpClient) {
    this.url = `localhost:3000/api/`;
  }

  findAll(endpoint: string): Observable<any> {
    return this.http.get(`${this.url}/${endpoint}`);
  }

  findOneById(endpoint: string, id: string): Observable<any> {
    return this.http.get(`${this.url}/${endpoint}/${id}`);
  }

  create(endpoint: string, data: T): Observable<any> {
    return this.http.post(`${this.url}/${endpoint}`, data);
  }

  update(
    endpoint: string,
    id: string,
    updatedData: Partial<T>
  ): Observable<any> {
    return this.http.put(`${this.url}/${endpoint}/${id}`, updatedData);
  }

  delete(endpoint: string, id: string): Observable<any> {
    return this.http.delete(`${this.url}//${endpoint}/${id}`);
  }
}
