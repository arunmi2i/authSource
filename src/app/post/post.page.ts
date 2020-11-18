import { Component, OnInit } from '@angular/core';

import{ ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,
              public apiService: ApiService,
              public router: Router,
              public event: EventService) {}

  public postUrl: string;
  public topics: any;
  public subTopics: any;
  public tags: any;
  public previewPost: any;
  // tags = ['run', 'jog'];

  post = new FormGroup({
    url: new FormControl(''),
    description: new FormControl('', Validators.required) ,
    topicGids: new FormArray([], Validators.required),
    subTopicGids: new FormArray([]),
    tags:new FormControl([])
  });

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(state => {
      this.postUrl = state.get('url');
      this.getPostByUrl(this.postUrl);
    });
    this.getTopics();
    this.getSubTopics();
    this.getTags();
  }

  public getTopics() {
    this.apiService.getTopics().subscribe((res: any) => {
      this.topics = res.entity;
    });
  }

  public getSubTopics() {
    this.apiService.getSubTopics().subscribe((res:any) => {
      this.subTopics = res.entity;
    });
  }

  public getTags() {
    this.apiService.getTags().subscribe((res:any) => {
      this.tags = res.entity;
    });
  }

  createPost() {
    this.post.value.url = this.postUrl;
    const tag: any = [];
    this.post.value.tags.map(item => tag.push(item.value));
    this.post.value.tags = tag;
    this.apiService.createPost(this.post.value).subscribe((res: any) => {
      this.event.publish({isPostCreated:true});
      this.router.navigate(['home/explore']);
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
      this.post.value.subTopicGids.push(gid);
    } else {
      this.post.value.subTopicGids.pop(gid);
    }
  }

  public getPostByUrl(url) {
    this.apiService.getPostByUrl(url).subscribe((res: any)=> {
      this.previewPost = res.entity;
      this.post.controls['description'].setValue(res.entity.siteDescription);
    });
  }

  // onSelect(event) {
  //   console.log(event.target.value);
  // }
}
