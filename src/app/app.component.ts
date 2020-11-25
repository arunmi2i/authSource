import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from './service/api.service';
import { EventService } from './service/event.service';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showCategory: boolean = false;
  // showSubCategory: boolean = false;
  categories: any =[];
  subCategories: any = [];
  menuTitle: string = "Categories";

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private navController: NavController,
    private apiService: ApiService,
    private event: EventService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.event.subscribe((data: { isToggle: any; }) => {
      if(data.isToggle && !this.categories.length) {
        this.subCategories = [];
        this.getCategories();
      }
    });

    this.event.subscribe((data: {isCategoryToggle: any; }) => {
      if(data.isCategoryToggle && !this.subCategories.length) {
        this.getSubCategory();
      }
    });

    this.event.subscribe((data: {showCategory: boolean}) => {
      if(data.showCategory) {
        this.showCategory = true;
      }
    });

    this.router.events.subscribe((ev) => {
      if(ev instanceof NavigationEnd) {
        if(ev.url === '/home/explore')
        this.showCategory = false;
      }
    });
  }

  getCategories() {
    this.apiService.getTopics().subscribe((res: any) => {
      this.categories = res.entity;
      this.categories.title = "Categories";
    });
  }

  public loadPost() {
    this.event.publish({category: this.categories.title, subCategory: this.subCategories.title});
  }

  selectCategory(category) {
    this.menuTitle = category.title;
    this.apiService.getSubTopics().subscribe((res: any) => {
      this.subCategories = res.entity;
      this.subCategories.title = this.menuTitle;
    });
    this.showCategory = !this.showCategory;
    this.event.publish({category: category.title});
    this.router.navigate(['/home/explore/category/'+category.title]);
  }

  selectSubCategory(subTitle) {
    this.event.publish({subCategory: subTitle});
    this.router.navigate(['/home/explore/category/'+this.menuTitle+'/subCategory/'+subTitle]);
  }

  getSubCategory() {
    this.apiService.getSubTopics().subscribe((res: any) => {
      this.subCategories = res.entity;
      this.categories.title = this.menuTitle;
    });
  }
}
