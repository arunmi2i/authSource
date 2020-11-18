import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private myToast: any;

  constructor(private toast: ToastController) { }

  showToast(data) {
    this.myToast = this.toast.create({
      message: data,
      position: "top",
      animated: true,
      duration: 2000
    }).then((toastData) => {
      toastData.present();
    });
  }

  showErrorToast(data) {
    this.myToast = this.toast.create({
      message: data,
      position: "top",
      animated: true,
      color: "danger",
      duration: 2000
    }).then((toastData) => {
      toastData.present();
    });
  }

  hideToast() {
    this.myToast = this.toast.dismiss();
  }
}
