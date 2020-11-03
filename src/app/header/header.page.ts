import { Component, OnInit } from '@angular/core';
import { ActionSheetController, PopoverController, ModalController } from '@ionic/angular';

import { PostModalPage } from '../modals/post-modal/post-modal.page';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  constructor(
    public actioncontroller: ActionSheetController,
    public popoverController: PopoverController,
    public modalController: ModalController,
    public event: EventService) { }

  ngOnInit() {
  }

  isToggle: false;

  async openSheet() {
    const modal = this.modalController.create({
      component:PostModalPage,
      cssClass:'wider-modal'
    });

    return (await modal).present();
  }

  toggleMenu(event) {
    console.log(event.target);
    if(event.target) {
      this.isToggle != this.isToggle;
      this.event.publish(this.isToggle);
    }
  }

}