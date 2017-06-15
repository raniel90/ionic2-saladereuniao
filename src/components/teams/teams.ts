import { PouchdbProvider } from './../../providers/pouchdb/pouchdb';
import { Component } from '@angular/core';

import { TeamsProvider } from './../../providers/teams/teams';

/**
 * Generated class for the TeamsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'teams',
  templateUrl: 'teams.html'
})
export class TeamsComponent {

  teams: any = []
  teamFv
  teamFedex

  constructor(
    private teamsProvider: TeamsProvider,
    private pouchDbProvider: PouchdbProvider) {
    this.teamsProvider.getTeams()
      .subscribe(teamsTransformed => {
        this.teams = teamsTransformed
        this.pouchDbProvider.insertAll(this.teams)
        this.getTeam()
      })
      .unsubscribe
  }

  async getTeam() {

    this.teamFv = await this.pouchDbProvider.findById("team", 1)
    console.log(this.teamFv)

    this.teamFedex = await this.pouchDbProvider.findById("team", 4)
    console.log(this.teamFedex.status)

    console.log("Calling after getTeam")
  }
}
