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
    this.url="v1/session";
    return this.apiService.loginApi(this.url, params);
    // .subscribe(res => {
    //   this.currentUser = res;
    //   localStorage.setItem('currentUser', (this.currentUser));
    //   // this.user.reset();
    //   // this.router.navigate(['tabs/explore']);
    //   console.log(this.currentUser);
    //   return res;
    // });
    // .subscribe(res => {
    //   return res;
    // });
  }

  public isAuthenticated() {
    return (localStorage.isAuthenticated === 'true');
  }

}
