import { Component, OnInit } from '@angular/core';
import { ModalController ,NavController} from '@ionic/angular';

import { Router } from '@angular/router'
@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.page.html',
  styleUrls: ['./post-modal.page.scss'],
})
export class PostModalPage implements OnInit {

  constructor(public modalController: ModalController,public router: Router, public navController: NavController) { }

  postLink: string='';
  ngOnInit() {
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  addPostLink() {
    // this.router.navigate(['post'], "abc.com");
    // this.navController.push(PostPage, {url:'abc.com'});
    // this.navController.navigateForward('/post');
    this.router.navigate(['/post', {url: this.postLink}]);
    this.modalController.dismiss();
  }

}
