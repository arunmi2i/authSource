import { Component, OnInit } from '@angular/core';
import { ActionSheetController, PopoverController, ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { PostModalPage } from '../modals/post-modal/post-modal.page';
import { EventService } from '../service/event.service';
import { PostService } from "../service/post.service";

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
    public event: EventService,
    private activatedRoute:ActivatedRoute,
    private navCtrl: NavController,
    public router: Router,
    public postService: PostService) { }

  public isCategory: boolean = false;
  public isSubCategory: boolean = false;
  public category: any;
  public subCategory: any;
  public userDetail: any = JSON.parse(localStorage.currentUser);

  ngOnInit() {
    // this.event.subscribe((data: {category: any;}) => {
    //   if(data.category) {
    //     // this.isCategory = true;
    //   }
    // });

    this.activatedRoute.paramMap.subscribe(param => {
      this.category = param.get('category');
      this.subCategory = param.get('subCategory');
      if(this.subCategory) {
        this.isSubCategory = true;
      } else if(this.category) {
        this.isCategory = true;
      }
    });
  }

  isToggle: boolean = false;

  async openSheet() {
    const modal = this.modalController.create({
      component:PostModalPage,
      cssClass:'wider-modal'
    });

    return (await modal).present();
  }

  toggleMenu(event) {
    if(event.target) {
      this.event.publish({isToggle: true});
    }
  }

  navigateBack() {
    const url = this.router.url;
    if(url === '/home/explore/category/Triathlon') {
      this.event.publish({showCategory: true})
      this.category = true;
    }
    this.navCtrl.back();
  }

  getItem(event) {
    this.event.publish({searchPost: event.target.value});
  }

}