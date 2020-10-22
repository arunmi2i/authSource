import { Component, OnInit } from '@angular/core';
import { ActionSheetController, PopoverController, ModalController } from '@ionic/angular';

import { PostModalPage } from '../modals/post-modal/post-modal.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  constructor(public actioncontroller: ActionSheetController, public popoverController: PopoverController, public modalController: ModalController) { }

  ngOnInit() {
  }

  async openSheet() {
    const modal = this.modalController.create({
      component:PostModalPage,
      cssClass:'wider-modal'
    });

    return (await modal).present();
  }

}