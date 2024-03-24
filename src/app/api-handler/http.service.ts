import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1';

  constructor(private http: HttpClient) { }
  get(): Observable<any> {
    return this.http.get(`${this.apiUrl}/objects?metadataDate=2024-01-19`);
  }

  getObjData(id:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/objects/${id}`);
  }

  // POST request
  post(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/employees`, payload);
  }

  update(id: number, payload: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/employees/${id}`, payload);
  }

}
