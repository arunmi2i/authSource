import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSubCategory: boolean = false;
  sideMenu: any = [
    {
      title: 'Running',
      url: '',
      subCategory:[
        {title:'Shoes', url: '/'},
        {title:'Strenth', url: ''}
      ]
    },
    {
      title: 'Swimming',
      url: '',
      subCategory:[
        {title:'Suit', url: '/'},
        {title:'Yoga', url: ''}
      ]
    }
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  toggleSubCategory(title) {
    console.log(title);
    this.showSubCategory = !this.showSubCategory;
  }
}
