import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingsComponent } from './meetings';

@NgModule({
  declarations: [
    MeetingsComponent,
  ],
  imports: [
    IonicPageModule.forChild(MeetingsComponent),
  ],
  exports: [
    MeetingsComponent
  ]
})
export class MeetingsComponentModule {}
