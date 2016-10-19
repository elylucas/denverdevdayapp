import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import Speaker from '../../models/speaker';
import Session from '../../models/session';
import {SessionDetail} from '../sessions/session-detail';
import {DataService} from '../../services/data.service';

@Component({
    selector: "speaker-detail",
    templateUrl: 'speaker-detail.html'
})
export class SpeakerDetail {

    public speaker: Speaker;
    public sessions: Session[];

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