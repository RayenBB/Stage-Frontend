import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../Models/User";

const AUTH_API = 'http://localhost:8080/api/v1/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}
  private token= "";
  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'authenticate',
      {
        email,
        password,
      },
      httpOptions
    );
  }
  getToken(): string {
    return this.token;
  }

  register( user:User): Observable<any> {

    return this.http.post(
      AUTH_API + 'register',

        user
      ,
      httpOptions
    );
  }
  logout(){
    localStorage.removeItem('access-token')
    localStorage.removeItem('auth-user')

  }

}
