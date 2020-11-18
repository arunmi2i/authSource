import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

import { ApiService } from '../service/api.service';
import { ToasterService } from '../service/toaster.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.page.html',
  styleUrls: ['./personal-detail.page.scss'],
})
export class PersonalDetailPage implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private toast: ToasterService) { }

  userDetail: any = JSON.parse(localStorage.currentUser);
  user = new FormGroup({
    username: new FormControl(this.userDetail.username),
    oldPassword: new FormControl(),
    newPassword: new FormControl()
  });

  ngOnInit() {
  }

  changePassword() {
    this.apiService.changePassword(this.user.value)
      .subscribe(res => {
        if(res.entity === true) {
          this.toast.showToast("Password changed sucessfully");
          this.router.navigate(['home/explore']);
        } else if(res.message && res.entity){
          this.toast.showErrorToast(res.message);
        } else {
          this.toast.showErrorToast("Enter correct old password");
        }
      }
      ,(error => {
        this.toast.showErrorToast("Error occurs while changing password");
      })
      );
  }

}
