import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {LoginService} from '../service/login-service.service';
import { ToasterService } from '../service/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public loginService: LoginService, public router: Router, public toast: ToasterService) { }

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
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      localStorage.setItem('isAuthenticated', 'true');
      this.user.reset();
      this.router.navigate(['home/explore']);
    },
    (errorResponse) => {
      this.toast.showErrorToast(errorResponse.error.message);
    });
    // if(this.currentUser) {
    //   localStorage.setItem('curentUser', this.currentUser);
    //   this.user.reset();
      // this.router.navigate(['home/explore']);
    // }
  }

}
