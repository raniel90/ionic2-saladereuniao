import { PouchdbProvider } from './../../providers/pouchdb/pouchdb';
import { MeetingDetailPage } from './../../pages/meeting-detail/meeting-detail';
import { App, NavParams } from 'ionic-angular';
import { MeetingsProvider } from './../../providers/meetings/meetings';
import { Component } from '@angular/core';

@Component({
  selector: 'meetings',
  templateUrl: 'meetings.html'
})
export class MeetingsComponent {

  meetings: any = [];

  constructor(
    private meetingsProvider: MeetingsProvider,
    private navParams: NavParams,
    private app: App,
    private pouchDbProvider: PouchdbProvider) {
    this.meetingsProvider.getMeetings()
      .subscribe(meetings => {
        this.meetings = meetings

        for (var index = 0; index < this.meetings.length; index++) {
          this.pouchDbProvider.insert(this.meetings[index])
        }

      })
  }

  getMeeting() {

  }

  detailMeeting(meeting) {
    this.app.getRootNav().push(MeetingDetailPage, {
      meeting: meeting
    })
  }
}
