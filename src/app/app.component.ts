import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { ExplorePage } from './explore/explore.page';
import { ApiService } from './service/api.service';
import { EventService } from './service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showCategory: boolean = false;
  showSubCategory: boolean = false;
  categories: any =[];

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
    this.event.subscribe().subscribe((data) => {
      console.log(this.categories.length);
      if(!this.categories.length) {
        this.getCategories();
      }
    });
  }

  getCategories() {
    this.apiService.getTopics().subscribe((res: any) => {
      this.categories = res.entity;
      this.categories.title = "Categories";
    });
  }

  selectCategory(title) {
    console.log(title);
    this.categories = [];
    this.categories.title = title;
    this.apiService.getSubTopics().subscribe((res: any) => {
      this.categories = res.entity;
    });
    // console.log(this.categories);
    this.categories.push(this.getTags());
    // console.log(this.categories);
    this.showCategory = !this.showCategory;
    // this.router.navigate(['/post', {url: this.postLink}]);
    // this.navController.navigateRoot('', title)
    // this.router.navigate(['tabs/explore', {category: title}]);
  }

  getTags() {
    this.apiService.getTags().subscribe((res: any) => {
      return res.entity;
    });
  }
}
