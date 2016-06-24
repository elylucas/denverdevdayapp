import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import Session from '../models/session';
import Speaker from '../models/speaker';
import Sponsor from '../models/sponsor';
import FavoritesService from './favorites.service';

@Injectable()
export default class SessionService {
    
    constructor(private http: Http, private favoritesService: FavoritesService) {
        
    }
    
    getSessions() {
        
        return new Promise((resolve, reject) => {
            this.http.get('data.json')
            .toPromise().then(data => {
                let sessions = data.json().sessions.map(s => {
                    return new Session(s);
                });
                resolve(sessions);
            }) 
        });
        
    }   

    getFavoriteSessions() {
        return new Promise((resolve, reject) => {
            this.getSessions().then((sessions: Session[]) => {
                let favSessions = sessions.filter(value => {
                    return this.favoritesService.isFavorite(value);
                });
                resolve(favSessions);
            })
        });        
    }

    getSessionsBySpeaker(speaker) {
        return new Promise((resolve, reject) => {
            this.getSessions().then((sessions: Session[]) => {
                let speakerSessions = sessions.filter((value: Session) => {
                    return value.speakerId === speaker.id;
                });
                resolve(speakerSessions);
            });
        });
    }

     getSpeakers() {        
        return new Promise((resolve, reject) => {
            this.http.get('data.json')
            .toPromise().then(data => {
                let speakers = data.json().speakers.map(s => {
                    return new Speaker(s);
                });
                resolve(speakers);
            }) 
        });        
    }

    getSpeakerById(id) {
        return new Promise((resolve, reject) => {
            this.getSpeakers().then((speakers: Speaker[]) => {
                let speaker = speakers.find(x => x.id === id);
                resolve(speaker);
            })
        });
    }

    getSponsors(){
        return new Promise((resolve, reject) => {
            this.http.get('data.json')
                .toPromise().then(data => {
                    let sponsors = data.json().sponsors.map(s => {
                        return new Sponsor(s);
                    });
                    resolve(sponsors);
                })
        });
    }
    
}