import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from 'rxjs/operators';
// import  'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl:string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public createPost() {
    // return this.httpClient.get(this.baseUrl).map(res => res.json);
    return this.httpClient.get(this.baseUrl).pipe(map((res: any) => {
      return res;
  }));
  }
}
