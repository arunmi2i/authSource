import { Injectable } from '@angular/core';

import { ApiService } from '../service/api.service';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public apiService: ApiService) { }

  createPost(post:any, success: any, fail: any) {
    this.apiService.post('post', post).subscribe
    (data => {
        data.error ? fail(data.error) : success(data);
    },
    error => {
        fail(error);
    });
  }

  // public createPost(param) {
  //   const postUrl = "post";
  //   this.apiService.post(postUrl, param).subscribe((res: any) => {
  //     return res;
  //   });
  // }

  public getPosts(param, success, fail) {
    const postUrl = 'post/interest?page='+ param.page +
    '&size='+ param.size +
    '&direction=DESC'+
    '&title.LIKE='+ param.title +
    '&siteTitle.LIKE='+ param.siteTitle;
    this.apiService.get(postUrl).subscribe(res => {
      res.error? fail(res.error): success(res);
    },
    error => {
      fail(error);
    });
  }

  public getPostsByCategories(param, success, fail) {
    const postUrl: any = 'post?page='+ param.page +
    '&size='+ param.size +
    '&direction=DESC'+
    '&topic='+ param.category +
    '&subTopic='+ param.subCategory;
    this.apiService.get(postUrl).subscribe(res => {
      res.error? fail(res.error): success(res);
    },
    error => {
      fail(error);
    });
  }
}
