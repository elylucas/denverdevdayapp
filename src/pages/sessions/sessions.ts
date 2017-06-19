import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import Session from '../../models/session';
import { SessionDetail } from './session-detail';
import { DataService } from '../../services/data.service';
import _ from 'lodash';

@Component({
  selector: 'sessions',
  templateUrl: 'sessions.html'
})
export class Sessions {

  public groupedSessions: any[];

  constructor(private nav: NavController, private dataService: DataService) {

  }

  ionViewWillEnter() {
    this.dataService.getSessions().then((sessions: Session[]) => {
      this.groupedSessions =
        _.chain(sessions)
          .groupBy('time')
          .toPairs()
          .map(x => {
            return {
              timeslot: x['0'],
              sessions: x['1']
            }
          })
          .value();
    });
  }

  goToDetail(session: Session) {
    this.nav.push(SessionDetail, { session });
  }
}
