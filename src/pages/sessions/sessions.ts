import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import Session from '../../models/session';
import {SessionDetail} from './session-detail';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'sessions',
  templateUrl: 'sessions.html'
})
export class Sessions {
  
  public sessions: Session[];
  
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
