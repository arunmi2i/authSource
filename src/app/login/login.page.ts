import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {LoginService} from '../service/login-service.service'
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public loginService: LoginService, public router: Router ) { }

  ngOnInit() {}
  currentUser: any;

  user = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
  this.loginService.login(this.user.value)
    .subscribe(res => {
      this.currentUser = res;
      localStorage.setItem('currentUser', stringify(this.currentUser));
      localStorage.setItem('isAuthenticated', 'true');
      this.user.reset();
      this.router.navigate(['tabs/explore']);
    });
    // if(this.currentUser) {
    //   localStorage.setItem('curentUser', this.currentUser);
    //   this.user.reset();
    //   this.router.navigate(['tabs/explore']);
    // }
  }

}
