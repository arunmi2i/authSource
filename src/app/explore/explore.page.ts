import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {

  posts: any;
  constructor(
    private apiService: ApiService) 
    {
      // this.value = navParam.get('category');
      // console.log(this.va);
    }

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

  isUser: boolean = false;

  ngOnInit() {
    this.getActivePosts();
  }

  public getActivePosts() {
    this.apiService.getPosts().subscribe((res: any) => {
      this.posts = res.entity;
      console.log(this.posts);
    });
  }
}
