import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Session from '../../models/session';
import Speaker from '../../models/speaker';
import FavoritesService from '../../services/favorites.service';
import DataService from '../../services/data.service';
import SpeakerDetail from '../speakers/speaker-detail';

@Component({
    selector: 'session-detail',
    templateUrl: 'session-detail.html'
})
export default class SessionDetail {

    public session: Session;
    public speaker: Speaker;

    constructor(private nav: NavController, params: NavParams, private favoritesService: FavoritesService, private dataService: DataService) {
        this.session = params.get('session');
        
    }

    ionViewWillEnter() {
        this.dataService.getSpeakerById(this.session.speakerId).then((speaker: Speaker) => {
            this.speaker = speaker;
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