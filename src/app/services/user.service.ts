import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Models/User";

const baseUrl = 'http://localhost:8080/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<any[]> {
    return this.http.get<User[]>(baseUrl+'/all');
  }

  getUser(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/find/${id}`);
  }

  getSimilarUsers(type: string, severity: string, environment: string): Observable<any[]> {
    const url = `${baseUrl}/${type}/${severity}/${environment}`;
    return this.http.get<User[]>(url);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/api/v1/auth/update`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}?title=${title}`);
  }
}
