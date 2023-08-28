import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appelo} from "../Models/Appelo";
const baseUrl = 'http://localhost:8080/ao';

@Injectable({
  providedIn: 'root'
})
export class AppelService {

  constructor(private http: HttpClient) { }
  getAllappels(): Observable<any[]> {
    return this.http.get<Appelo[]>(baseUrl+'/all',{
      withCredentials: true,
    });
  }

  getappel(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/findbyid/${id}`);
  }




  createappel(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }



  deleteappel(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAllappels(): Observable<any> {
    return this.http.delete(baseUrl);
  }


}
