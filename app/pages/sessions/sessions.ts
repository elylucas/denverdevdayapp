import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import Session from '../../models/session';
import SessionDetail from './session-detail';
import DataService from '../../services/data.service';

@Component({
  templateUrl: 'build/pages/sessions/sessions.html'
})
export class Sessions {
  
  sessions: Session[];
  
  constructor(private nav: NavController, private dataService: DataService) {    
    
  }
  
  ionViewWillEnter() {
    this.dataService.getSessions().then((sessions: Session[]) => {
      this.sessions = sessions;
    });
  }
  
  goToDetail(session: Session) {
    this.nav.push(SessionDetail, {session});
  }
}
