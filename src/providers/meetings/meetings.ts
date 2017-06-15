import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MeetingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MeetingsProvider {

  constructor(public http: Http) {

  }

  getMeetings() {
    return this.http.get("http://localhost:8080/meetings")
    .map(meetingsTransform => meetingsTransform.json())
  }
}
