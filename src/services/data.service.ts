import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import Session from '../models/session';
import Speaker from '../models/speaker';
import { FavoritesService } from './favorites.service';
import moment from 'moment';

@Injectable()
export class DataService {
  private data: any;
  private lastfetch: moment.Moment;

  constructor(
    private http: Http,
    private favoritesService: FavoritesService,
    private toast: ToastController
  ) {}

  getSessions() {
    return new Promise<Session[]>((resolve, reject) => {
      this.getData().then(data => {
        resolve(data.sessions);
      });
    });
  }

  getEvent() {
    return new Promise<Event>((resolve, reject) => {
      this.getData().then(data => {
        resolve(data.event);
      });
    });
  }

  getVenue() {
    return new Promise<Venue>((resolve, reject) => {
      this.getData().then(data => {
        resolve(data.venue);
      });
    });
  }

  getFavoriteSessions() {
    return new Promise<Session[]>((resolve, reject) => {
      this.getSessions().then((sessions: Session[]) => {
        let favSessions = sessions.filter(value => {
          return this.favoritesService.isFavorite(value);
        });
        resolve(favSessions);
      });
    });
  }

  getSessionsBySpeaker(speaker) {
    return new Promise<Session[]>((resolve, reject) => {
      this.getSessions().then((sessions: Session[]) => {
        let speakerSessions = sessions.filter((session: Session) => {
          return session.speakers.find(x => x.id === speaker.id);
        });
        resolve(speakerSessions);
      });
    });
  }

  getSpeakers() {
    return new Promise<Speaker[]>((resolve, reject) => {
      this.getData().then(data => {
        resolve(data.speakers);
      });
    });
  }

  getSpeakerById(id) {
    return new Promise<Speaker>((resolve, reject) => {
      this.getSpeakers().then((speakers: Speaker[]) => {
        let speaker = speakers.find(x => x.id === id);
        resolve(speaker);
      });
    });
  }

  getSponsors() {
    return new Promise<Sponsor[]>((resolve, reject) => {
      this.getData().then(data => {
        resolve(data.sponsors);
      });
    });
  }

  private getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.data && !this.isCacheExpired()) {
        resolve(this.data);
      } else {
        this.http
          .get('https://denverdevday.blob.core.windows.net/denverdevday/denverdevdaydata2018-2.json')
          .toPromise()
          .then(data => {
            this.data = data.json();
            this.lastfetch = moment();
            resolve(this.data);
          })
          .catch(() => {
            let toast = this.toast.create({
              message: 'There was an error getting the data.  Please try again later.',
              duration: 5000,
              position: 'middle'
            });
            toast.present();
            if (this.data) {
              resolve(this.data);
            } else {
              reject();
            }
          });
      }
    });
  }

  private isCacheExpired(): boolean {
    if (this.lastfetch) {
      var expDate = moment(this.lastfetch);
      expDate.add(300, 'seconds');
      if (expDate.isBefore(moment())) {
        console.log('Cache expired');
        return true;
      } else {
        console.log('Cache valid', this.lastfetch.toISOString(), expDate.toISOString());
        return false;
      }
    } else {
      console.log('Cache expired');
      return true;
    }
  }
}
