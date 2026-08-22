import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController, ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class Global {

  isLoading: boolean = false;

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
   // private modalCtrl: ModalController,
  ){}
  
  showAlert(message: string, header?: string, buttonArrary?: any) {
    this.alertCtrl.create({
      header: header ? header : 'Authentication failed.',
      message: message,
      buttons: buttonArrary ? buttonArrary : ['Okay']
    })
    .then(alertEl => alertEl.present());
  }

  async showToast(msg: string, duration: number = 3000, color?: string, position: 'top' | 'bottom' | 'middle' = 'bottom') {
    await this.toastCtrl.create({
      message: msg,
      duration,
      color,
      position
    }).then(toast => toast.present());
  }

  errorToast(msg?: string, duration: number = 4000, color?: string, position: 'top' | 'bottom' | 'middle' = 'bottom') {
    this.showToast(
      msg ? msg : 'No internet Connection',
      duration,
      'danger',
      'bottom'
    )
  }

  successToast(msg?: string, duration: number = 3000, color?: string, position: 'top' | 'bottom' | 'middle' = 'bottom') {
    this.showToast(
      msg ? msg : 'No internet Connection',
      duration,
      'success',
      position
    );
  }

  showLoader(
    msg?: string,
    spinner?: 'bubbles' | 'circles' | 'circular' | 'crescent' | 'dots' | 'lines' | 'lines-small' | 'lines-sharp' | 'lines-sharp-small'
  ) {
    this.isLoading = true;
    return this.loadingCtrl.create({
      message: msg ? msg : '',
      spinner: spinner ? spinner : 'bubbles',
    }).then( res => {
      res.present().then(() => {
        if(!this.isLoading) {
          res.dismiss().then(() => {
            console.log('abort presenting')
          })
        }
      })
    })
    .catch(e => {
          console.log('show loading error: ', e)
    });
  }

  async hideLoader() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss();
  }

  // async createModal(options: any){
  //   const modal = await this.modalCtrl.create(options)
  //   await modal.present();
  //   const {data} = await modal.onWillDismiss(); 
  //   console.log(data);
  //   if(data) return data;
  // }

  // modalDismiss(val?: any) {
  //   let data: any = val ? val : null;
  //   console.log('data', data);
  //   this.modalCtrl.dismiss(data);
  // }

  getIcon(title: any) {
    const name = title.toLowerCase();
    switch(name) {
      case 'home': return 'home-outline';
      case 'work': return 'briefcase-outline';
      default: return 'location-outline';
    }
  }

}
