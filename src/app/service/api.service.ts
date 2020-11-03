import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from 'rxjs/operators';
// import  'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl:string = "http://localhost:7080/";

  constructor(private httpClient: HttpClient) { }

  public createPost(param) {
    return this.httpClient
      .post(this.baseUrl+"v1/post", param, {withCredentials: true})
      .pipe(map((res: any) => {
        return res;
    }));
  }

  public getTopics() {
    return this.httpClient
      .get(this.baseUrl+"v1/topic/get-active", {withCredentials: true})
      .pipe(map((res: Response) => {
        return res;
    }));
  }

  public getSubTopics() {
    return this.httpClient
      .get(this.baseUrl+"v1/sub-topic/get-active", {withCredentials: true})
      .pipe(map((res: Response) => {
        return res;
      }));
  }

  public getTags() {
    return this.httpClient
      .get(this.baseUrl+"v1/tag/get-active", {withCredentials: true})
      .pipe(map((res:Response) => {
        return res;
      }))
  }

  public loginApi(url, parameters): Observable<any> {
    const httpheaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    url = this.baseUrl + url;
    const loginParam = "username=" + parameters.username + "&password=" + parameters.password;
    return this.httpClient.post(url, loginParam.toString(), {
      headers: httpheaders,
      withCredentials: true
    }).pipe(map((res: Response) => {
      return res;
    }));
  }

  public logout() {
    return this.httpClient
      .get(this.baseUrl+"v1/logout", {withCredentials: true})
      .pipe(map((res: Response) => {
        return res;
      }))
  }

  public getPosts() {
    return this.httpClient
      .get(this.baseUrl+"v1/post/get-active", {withCredentials: true})
      .pipe(map((res: Response) => {
        return res;
      }));
  }
}
