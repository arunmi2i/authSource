import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from 'rxjs/operators';
// import  'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl:string = "http://localhost:7080/v1/";

  constructor(private httpClient: HttpClient) { }

  public post(url, param) {
    return this.httpClient
      .post(this.baseUrl+ url, param, {withCredentials: true})
      .pipe(map((res: any) => {
        return res;
      }
    ));
  }

  public get(url) {
    return this.httpClient
      .get(this.baseUrl+ url, {withCredentials: true})
      .pipe(map((res:any) => {
        return res;
      }));
  }

  public patchWithoutCredential(url) {
    return this.httpClient
      .patch(this.baseUrl + url, null)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  public patch(url) {
    return this.httpClient
      .patch(this.baseUrl + url, null, {withCredentials: true})
      .pipe(map((res: any) => {
        return res;
      }));
  }

  public createPost(param) {
    return this.httpClient
      .post(this.baseUrl+"post", param, {withCredentials: true})
      .pipe(map((res: any) => {
        return res;
    }));
  }

  public getTopics() {
    return this.httpClient
      .get(this.baseUrl+"topic/get-active", {withCredentials: true})
      .pipe(map((res: Response) => {
        return res;
    }));
  }

  public getSubTopics() {
    return this.httpClient
      .get(this.baseUrl+"sub-topic/get-active", {withCredentials: true})
      .pipe(map((res: Response) => {
        return res;
      }));
  }

  public getTags() {
    return this.httpClient
      .get(this.baseUrl+"tag/get-active", {withCredentials: true})
      .pipe(map((res:Response) => {
        return res;
      }))
  }

  public loginApi(url, parameters): Observable<any> {
    const httpheaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    url = this.baseUrl + url;
    // const loginParam = "username=" + parameters.username + "&password=" + parameters.password;
    return this.httpClient.post(url, parameters.toString(), {
      headers: httpheaders,
      withCredentials: true
    }).pipe(map((res: Response) => {
      return res;
    }));
  }

  public createAccount(parameters) {
    return this.httpClient.post(this.baseUrl+"user/save", parameters)
      .pipe(map((res: Response) => {
      return res;
    }));
  }

  public logout() {
    return this.httpClient
      .get(this.baseUrl+"logout", {withCredentials: true})
      .pipe(map((res: Response) => {
        return res;
      }))
  }

  public getPostsByCategories(param) {
    const postUrl: any = 'post?page='+ param.page +
    '&size='+ param.size +
    '&direction=DESC'+
    '&topic='+ param.category +
    '&subTopic='+ param.subCategory;
    return this.httpClient
      .get(this.baseUrl+postUrl, {withCredentials: true})
      .pipe(map((res: Response) => {
        return res;
      }));
  }

  public changePassword(param: any) {
    return this.httpClient
      .post(this.baseUrl+"user/change-password", param, {withCredentials: true})
      .pipe(map((res: any) => {
        return res;
      }));
  }

  public addInterest(param: any) {
    return this.httpClient
      .post(this.baseUrl+ "user-interest", param, {withCredentials: true})
      .pipe(map((res: any) => {
        return res;
      }));
  }

  public updateNotification(param: any): Observable<any> {
    const patchUrl: any = 'email=' + param.email +
    '&isActive=' + param.isActive;
    const httpheaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient
      .patch(this.baseUrl+ "user/update-notification?"+ patchUrl, null, {headers: httpheaders, withCredentials: true})
      .pipe(map((res: any) => {
        return res;
      }));
  }

  public getPostByUrl(param) {
    const url = "url="+param;
    return this.httpClient.get(this.baseUrl+ "post/site-info?"+ url, {withCredentials: true})
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
