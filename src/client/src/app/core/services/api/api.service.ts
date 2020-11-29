import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:4000/api/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }),
  };

  constructor(private http: HttpClient) {}

  public get<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(
      this.baseUrl + url,
      headers ? { headers } : this.httpOptions
    );
  }
}
