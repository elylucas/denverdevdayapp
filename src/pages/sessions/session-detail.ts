import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Session from '../../models/session';
import Speaker from '../../models/speaker';
import {FavoritesService} from '../../services/favorites.service';
import {DataService} from '../../services/data.service';
import {SpeakerDetail} from '../speakers/speaker-detail';

@Component({
    selector: 'session-detail',
    templateUrl: 'session-detail.html'
})
export class SessionDetail {

    public session: Session;
    public speakerImg: string;

    constructor(private nav: NavController, params: NavParams, private favoritesService: FavoritesService, private dataService: DataService) {
        this.session = params.get('session');       
    }

    ionViewWillEnter() {
        var speaker = <Speaker>this.session.speakers[Math.floor(Math.random()*this.session.speakers.length)];
        this.dataService.getSpeakerById(speaker.id).then((s: Speaker) => {
            this.speakerImg = s.imgUrl;
        });       
    }

    isFavorite(session) {
        return this.favoritesService.isFavorite(session);
    }

    toggleFavorite(session) {
        this.favoritesService.toggleFavorite(session);
    }

    goToSpeaker(speakerId) {
        this.dataService.getSpeakerById(speakerId).then((speaker: Speaker) => {
            this.nav.push(SpeakerDetail, { speaker });
        });
    }

}