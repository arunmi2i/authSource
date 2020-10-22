import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {

  constructor() {}

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

}
