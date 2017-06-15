import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingDetailPage } from './meeting-detail';

@NgModule({
  declarations: [
    MeetingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingDetailPage),
  ],
  exports: [
    MeetingDetailPage
  ]
})
export class MeetingDetailPageModule {}
