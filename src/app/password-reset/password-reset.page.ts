import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { EventService } from '../service/event.service';
import { LoginService } from '../service/login-service.service';
import { ToasterService } from '../service/toaster.service'

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  constructor(
    private event: EventService,
    private router: Router,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private toast: ToasterService) { }

  form = new FormGroup ({
    password: new FormControl(),
    verifyPassword: new FormControl(),
    email: new FormControl(),
    otp: new FormControl()
  });

  showNewPass: boolean = false;
  showPass: boolean = false;
  type: string = 'password';
  newType: string = 'password';
  data: any;

  ngOnInit() {
    this.getVerifiedValues();
  }

  getVerifiedValues() {
    this.activatedRoute.paramMap.subscribe(state => {
      this.form.controls['email'].setValue(state.get('email'));
      this.form.controls['otp'].setValue(state.get('otp'));
    });
  }

  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  showNewPassword() {
    this.showNewPass = !this.showNewPass;
    if(this.showNewPass){
      this.newType = 'text';
    } else {
      this.newType = 'password';
    }
  }

  onSubmit() {
    if(this.form.value.password === this.form.value.verifyPassword && this.form.value.password !== null) {
      this.loginService.resetPassword(this.form.value, (data: any) => {
        if(data.entity) {
          this.router.navigate(['/login']);
          this.toast.showToast("Password changed successfully");
        }
      },
      error => {
        console.log(error);
      });
    }
  }

}
