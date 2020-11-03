import { Component, OnInit } from '@angular/core';

import{ ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router'
// import { map } from 'rxjs/operators';
// import { resolve } from 'url';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,
              public apiService: ApiService,
              public router: Router) {}

  postUrl: string;
  topics: any;
  subTopics: any;
  tags: any;
  // tags = ['run', 'jog'];

  post = new FormGroup({
    url: new FormControl(''),
    description: new FormControl('') ,
    topicGids: new FormArray([]),
    subTopicGids: new FormArray([]),
    tags:new FormControl()
  });

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(state => {
      this.postUrl = state.get('url');
    });
    this.apiService.getTopics().subscribe((res: any) => {
      this.topics = res.entity;
    });
    this.apiService.getSubTopics().subscribe((res:any) => {
      this.subTopics = res.entity;
    });
    this.apiService.getTags().subscribe((res:any) => {
      this.tags = res.entity;
    });
  }

  createPost() {
    this.post.value.url = this.postUrl;
    this.post.value.tags = this.tags;
    this.apiService.createPost(this.post.value).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['tabs/explore']);
    });
  }

  selectTopics(event, gid) {
    if(event.target.checked) {
      this.post.value.topicGids.push(gid);
    } else {
      this.post.value.topicGids.pop(gid);
    }
  }

  selectSubTopics(event, gid) {
    if(event.target.checked) {
      console.log(gid);
      this.post.value.subTopicGids.push(gid);
    } else {
      this.post.value.subTopicGids.pop(gid);
    }
  }

  onSelect(event) {
    console.log(event.target.value);
  }
}
