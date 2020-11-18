import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(public router: Router, public apiService: ApiService) { }

  ngOnInit() {
  }
  public userDetail: any = JSON.parse(localStorage.currentUser);

  public turnOnNotification() {
    const notification = {
      email: this.userDetail.username,
      isActive: true
    }
    this.apiService.updateNotification(notification).subscribe((res: any) => {
      if(res) {
        this.router.navigate(['/home/explore']);
      }
    });
  }

}
