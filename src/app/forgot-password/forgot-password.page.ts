import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../service/login-service.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  user = new FormGroup({
    email: new FormControl('')
  });

  onSubmit() {
    this.loginService.getOtpByEmail(this.user.value, (data: any) => {
      this.router.navigate(['/email-verification', {email: this.user.value.email}]);
    },
    error => {
      console.log(error);
    });
  }

}