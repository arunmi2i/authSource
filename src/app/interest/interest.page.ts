import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.page.html',
  styleUrls: ['./interest.page.scss'],
})
export class InterestPage implements OnInit {

  constructor(public apiService:ApiService, public router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getTopics();
    },5000);
  }

  public topics: any;
  public interest: any = [];
  public userDetail: any = JSON.parse(localStorage.currentUser);

  public getTopics() {
    this.apiService.getTopics()
      .subscribe((res: any) => {
        if(res) {
          this.topics = res.entity;
          this.topics.map(item => {
            item.imgsource = "../../assets/images/"+ item.title +".png"
          });
        }
      });
  }

  public selectTopics(event, gid) {
    if(event.target.checked) {
      this.interest.push(gid);
    } else {
      this.interest.pop(gid);
    }
  }

  public createInterest() {
    const userInterest = {
      userGid: this.userDetail.gid,
      topicGids: this.interest
    };
    this.apiService.addInterest(userInterest)
      .subscribe((res: any) => {
        if(res) {
          this.router.navigate(['/notifications']);
        }
      });
  }

}
