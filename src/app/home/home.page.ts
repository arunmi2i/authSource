import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor() {}

  @ViewChild('tabs', { static: false }) tabs: IonTabs;

  public selectCurrentTab(event) {
    console.log(event);
  }

  public setCurrentTab() {
    let currentTab = this.tabs.getSelected();
    console.log("currnet tab", this.tabs.getSelected());
    console.log(currentTab.valueOf());
  }

}
