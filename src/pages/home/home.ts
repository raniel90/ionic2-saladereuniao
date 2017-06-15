import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(
    public navCtrl: NavController) {
  }
  /*
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  })

  valorAsync2 = Observable.interval(2000)
    .map(valor => 'Valor assíncrono 2')
    */
}
