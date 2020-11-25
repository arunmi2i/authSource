import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { PostService } from '../service/post.service'
;import { EventService } from '../service/event.service';

import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  posts: any = [];
  limit: any = 10;
  param = {
    title: '',
    siteTitle: '',
    category: '',
    subCategory:'',
    page:0,
    size:10
  }

  constructor(
    private apiService: ApiService,
    private event: EventService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute) 
    { }

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: false,
    pager: true
  };

  categorySlideConfig = {
    slidesPerView: 3.6,
    spaceBetween: 2,
    centeredSlides: false
  };

  verticalSlider = {
    direction: 'vertical',
    slidesPerView:4
  };

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const category = param.get('category');
      const subCategory = param.get('subCategory');
      if(category) {
        this.param.category = category;
        this.param.subCategory = subCategory || 'All';
        this.getPostByCategories();
      } else {
        setTimeout(() => {
          this.getActivePosts();
        }, 100);
      }
    });
    this.event.subscribe((data: { isPostCreated: any; }) => {
      if(data.isPostCreated) {
        this.getActivePosts();
      }
    });

    this.event.subscribe((data: {searchPost: any}) => {
      if(data.searchPost === '') {
        this.param.page=0;
        this.param.siteTitle = data.searchPost;
        this.getActivePosts();
      }
      if(data.searchPost) {
        this.posts = [];
        this.param.page=0;
        this.param.siteTitle = data.searchPost;
        this.getActivePosts();
      }
    });
  }

  public getActivePosts() {
    this.postService.getPosts(this.param, (data: any) => {
      for(let post of data.entity.content) {
        this.posts.push(post);
      }
    },
    error => {
      console.log(error);
    });
  }

  public getPostByCategories() {
    // this.posts = [];
    this.postService.getPostsByCategories(this.param, (data: any) => {
      for(let post of data.entity.content) {
        this.posts.push(post);
      }
    },
    (error: any) => {
      console.log(error);
    });
  }

  loadMorePosts(event) {
    this.param.page++;
    if(this.param.category) {
      this.getPostByCategories();
    } else {
      this.getActivePosts();
    }
    setTimeout(() => {
      event.target.complete();
      this.limit += 10;
      if (this.posts.length < this.limit) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
