import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import Session from '../models/session';
import Speaker from '../models/speaker';
import Sponsor from '../models/sponsor';
import {FavoritesService} from './favorites.service';
import moment from 'moment';
//var moment = require('moment');

@Injectable()
export class DataService {

    private data: any;
    private lastfetch: moment.Moment;

    constructor(private http: Http, private favoritesService: FavoritesService) {

    }

    getSessions() {

        return new Promise((resolve, reject) => {
            this.getData().then(data => {
                resolve(data.sessions);
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
            this.getData().then(data => {
                resolve(data.speakers);
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

    getSponsors() {
        return new Promise((resolve, reject) => {
            this.getData().then(data => {
                resolve(data.sponsors);
            })
        });
    }

    private getData(): Promise<any> {
        return new Promise((resolve, reject) => {
            if(this.data && !this.isCacheExpired()){
                resolve(this.data);
            } else {
                this.http
                    .get('https://denverdevday.blob.core.windows.net/denverdevday/denverdevdaydata.json')
                    .toPromise()
                    .then(data => {
                        this.data = data.json();
                        this.lastfetch = moment();
                        resolve(this.data);
                    });
            }
        });
    }

    private isCacheExpired() {
        if (this.lastfetch) {
            var expDate = moment(this.lastfetch);
            expDate.add(5, 'minutes');
            if(expDate.isBefore(moment())) {
                console.log('Cache expired');
                return true;
            } else {
                console.log('Cache valid', this.lastfetch.toISOString(), expDate.toISOString());
                return false;
            }
        }
        else {
            console.log('Cache expired');
            return true;
        }
    }

}
