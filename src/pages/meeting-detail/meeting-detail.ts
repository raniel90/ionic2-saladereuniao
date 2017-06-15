import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meeting-detail',
  templateUrl: 'meeting-detail.html',
})
export class MeetingDetailPage {

  meeting: any
  valor:any = 35.50000

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.meeting = this.navParams.get('meeting');
  }

  ionViewDidLoad() {
  }

}
