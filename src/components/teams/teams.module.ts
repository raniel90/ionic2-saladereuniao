import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamsComponent } from './teams';

@NgModule({
  declarations: [
    TeamsComponent,
  ],
  imports: [
    IonicPageModule.forChild(TeamsComponent),
  ],
  exports: [
    TeamsComponent
  ]
})
export class TeamsComponentModule {}
