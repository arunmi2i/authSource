import { Injectable } from '@angular/core';

import { ApiService } from '../service/api.service';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public apiService: ApiService) { }

  isLoggedIn: boolean;
  url: string;
  
  login(params){
    this.url="session";
    const loginParam = "username=" + params.username + "&password=" + params.password;
    return this.apiService.loginApi(this.url, loginParam);
  }

  public isAuthenticated() {
    return (localStorage.isAuthenticated === 'true');
  }
  
  getOtpByEmail(param, success, fail) {
    const url = "user/generate-otp?"+ "email=" + param.email;
    this.apiService.patch(url).subscribe(res => {
      res.error? fail(res.error): success(res);
    },
    error => {
      fail(error);
    });
  }

}
