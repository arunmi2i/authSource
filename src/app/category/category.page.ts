import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service'
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(public event: EventService, public apiService: ApiService) { }
  public category: any;
  public posts: any = [];
  public param = {
    category: history.state.data,
    subCategory:'',
    page:0,
    size:10
  }

  ngOnInit() {
    this.category = history.state.data;
    this.getPostByCategory();
  }

  toggleMenu(event) {
    if(event.target) {
      this.event.publish({isCategoryToggle: true});
    }
  }

  getPostByCategory() {
    this.apiService.getPostsByCategories(this.param).subscribe((res: any) => {
      this.posts= res.entity.content;
    });
  }

}
