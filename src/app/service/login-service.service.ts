import { Injectable } from '@angular/core';

import { ApiService } from '../service/api.service';
import { error } from 'protractor';
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

  verifyOtp(param, success, fail) {
    const url = "user/verify-otp?"+ "email=" + param.email + "&otp=" + param.otp;
    this.apiService.patch(url).subscribe(res => {
      res.error? fail(res.error): success(res);
    },
    error => {
      fail(error);
    });
  }

  resetPassword(param, success, fail) {
    const url = "user/update-password?"+ "email=" + param.email 
    + "&otp=" + param.otp
    + "&password=" + param.password;
    this.apiService.patch(url).subscribe(res => {
      res.error? fail(res.error): success(res);
    },
    error => {
      fail(error);
    });
  }

  createAccount(param, success, fail) {
    const url = "user/save";
    this.apiService.post(url, param).subscribe(res => {
      res.error? fail(res.error): success(res);
    },
    error => {
      fail(error);
    });
  }

}
