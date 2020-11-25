import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

import { ApiService } from '../service/api.service';
import { LoginService } from '../service/login-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    public apiService: ApiService,
    public loginService: LoginService,
    public router: Router) { }

  ngOnInit() {
  }

  showPass: boolean = false;
  type: string = 'password';

  user = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
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

  signup() {
    this.user.value.email = this.user.value.firstName;
    const loginParam = {
      username: this.user.value.email,
      password: this.user.value.password
    };
    this.loginService.createAccount(this.user.value, (data: any) => {
      this.loginService.login(loginParam).subscribe((res: any) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        localStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/interest']);
      })
    },
    error => {
      console.log(error);
    });
  }
  
}
