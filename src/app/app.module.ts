
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule  } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MeetingDetailPage } from './../pages/meeting-detail/meeting-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MeetingsComponent } from '../components/meetings/meetings';
import { MeetingsProvider } from '../providers/meetings/meetings';
import { LocalDateTimeFormatterPipe } from '../pipes/local-date-time-formatter/local-date-time-formatter';
import { PouchdbProvider } from '../providers/pouchdb/pouchdb';
import { TeamsComponent } from '../components/teams/teams';
import { TeamsProvider } from '../providers/teams/teams';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MeetingsComponent,
    LocalDateTimeFormatterPipe,
    MeetingDetailPage,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MeetingDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    MeetingsProvider,
    PouchdbProvider,
    TeamsProvider
  ]
})
export class AppModule { }
