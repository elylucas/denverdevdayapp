import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import Session from '../../models/session';
import SessionDetail from '../sessions/session-detail';
import DataService from '../../services/data.service';

@Component({
  templateUrl: 'build/pages/favorites/favorites.html'
})
export class Favorites {

  private sessions: Session[] = [];

  constructor(private nav: NavController, private dataService: DataService) {

  }

  ionViewWillEnter() {
      this.dataService.getFavoriteSessions().then((sessions: Session[]) => {
          this.sessions = sessions;
      });
  }

  goToDetail(session: Session) {
    this.nav.push(SessionDetail, {session});
  }

}
