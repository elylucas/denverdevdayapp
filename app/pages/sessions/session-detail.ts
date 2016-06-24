import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Session from '../../models/session';
import Speaker from '../../models/speaker';
import FavoritesService from '../../services/favorites.service';
import DataService from '../../services/data.service';
import SpeakerDetail from '../speakers/speaker-detail';

@Component({
    templateUrl: 'build/pages/sessions/session-detail.html'
})
export default class SessionDetail {

    private session: Session;

    constructor(private nav: NavController,params: NavParams, private favoritesService: FavoritesService, private dataService: DataService) { 
        this.session = params.get('session');
    }

    isFavorite(session) {
        return this.favoritesService.isFavorite(session);
    }

    toggleFavorite(session){
        this.favoritesService.toggleFavorite(session);
    }  

    goToSpeaker(speakerId) {
        this.dataService.getSpeakerById(speakerId).then((speaker: Speaker) => {
            this.nav.push(SpeakerDetail, {speaker});
        });        
    }  

}