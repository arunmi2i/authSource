import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  showPass: boolean = false;
  type: string = 'password';

  user = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('')
  });

  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

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
  }

}
