import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import Speaker from '../../models/speaker';
import Session from '../../models/session';
import SessionDetail from '../sessions/session-detail';
import DataService from '../../services/data.service';

@Component({
    templateUrl: 'build/pages/speakers/speaker-detail.html'
})
export default class SpeakerDetail {

    private speaker: Speaker;
    private sessions: Session[];

    constructor(private nav: NavController, params: NavParams, private dataService: DataService) { 
        
        this.speaker = params.get('speaker');

        this.dataService.getSessionsBySpeaker(this.speaker).then((sessions: Session[]) => {
            this.sessions = sessions;
        });
    }

    goToSession(session) {
        this.nav.push(SessionDetail, {session});
    }

}