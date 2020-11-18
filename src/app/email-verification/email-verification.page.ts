import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LoginService } from '../service/login-service.service'

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.page.html',
  styleUrls: ['./email-verification.page.scss'],
})
export class EmailVerificationPage implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

 form = new FormGroup ({
   otp: new FormControl()
 });

  onSubmit() {
    // this.loginService.getOtpByEmail(this.user.value, (data: any) => {
    //   console.log(data);
    //   this.router.navigate(['/email-verification']);
    // },
    // error => {
    //   console.log(error);
    // });
  }

}
