import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../service/login-service.service';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.page.html',
  styleUrls: ['./email-verification.page.scss'],
})
export class EmailVerificationPage implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private event: EventService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(state => {
      this.email = state.get('email');
    });
  }

 form = new FormGroup ({
   email: new FormControl(),
   otp: new FormControl()
 });
 email: string;

  onSubmit() {
    this.form.value.email = this.email;
    this.loginService.verifyOtp(this.form.value, (data: any) => {
      if(data.entity) {
        this.router.navigate(['/password-reset', {email: this.form.value.email, otp:this.form.value.otp}]);
      }
      this.event.publish({email: this.form.value.email, otp: this.form.value.otp});
    },
    error => {
      console.log(error);
    });
  }

}
