import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoaderShowing: boolean =false;

  constructor(private loadingController: LoadingController) { }

  public async showLoader(): Promise<void> {
    if(!this.isLoaderShowing) {
      await this.loadingController.create({
        spinner:"bubbles"
      })
      .then((res) => {
        this.isLoaderShowing = true;
        res.present();
      });
    }
  }

  public async hideLoader(): Promise<void> {
    if(this.isLoaderShowing) {
      await this.loadingController.dismiss();
    }
  }
}
