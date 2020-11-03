import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

import { Router } from '@angular/router'
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.page.html',
  styleUrls: ['./post-modal.page.scss'],
})
export class PostModalPage implements OnInit {

  constructor(public modalController: ModalController,
              public router: Router,
              public apiService: ApiService
              ) { }

  postLink: string='';
  ngOnInit() { }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  addPostLink() {
    this.router.navigate(['/post', {url: this.postLink}]);
    this.modalController.dismiss();
  }

}
