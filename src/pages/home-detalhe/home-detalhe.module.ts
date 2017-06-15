import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeDetalhePage } from './home-detalhe';

@NgModule({
  declarations: [
    HomeDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeDetalhePage),
  ],
  exports: [
    HomeDetalhePage
  ]
})
export class HomeDetalhePageModule {}
