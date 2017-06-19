import { Component } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';
import Session from '../../models/session';
import Speaker from '../../models/speaker';
import { FavoritesService } from '../../services/favorites.service';
import { DataService } from '../../services/data.service';
import { SpeakerDetail } from '../speakers/speaker-detail';
import { MoreMenu } from './more-menu';

@Component({
  selector: 'session-detail',
  templateUrl: 'session-detail.html'
})
export class SessionDetail {

  public session: Session;
  public speakerImg: string;

  constructor(
    private nav: NavController,
    params: NavParams,
    private favoritesService: FavoritesService,
    private dataService: DataService,
    private popoverCtrl: PopoverController) {
    this.session = params.get('session');
  }

  ionViewWillEnter() {
    this.session.speakers.forEach((s: any) => {
      this.dataService.getSpeakerById(s.id).then((x: any) => {
        s.imgUrl = x.imgUrl;
        s.company = x.company;
      });
    })
  }

  isFavorite(session: Session) {
    return this.favoritesService.isFavorite(session);
  }

  toggleFavorite(session: Session) {
    this.favoritesService.toggleFavorite(session);
  }

  goToSpeaker(speaker: Speaker) {
    this.dataService.getSpeakerById(speaker.id)
      .then(s => {
        this.nav.push(SpeakerDetail, { speaker: s });
      });
  }

  moreClick(event) {
    let popover = this.popoverCtrl.create(MoreMenu, {
      isFavorite: this.favoritesService.isFavorite(this.session)
    });
    popover.present({
      ev: event
    });

    popover.onDidDismiss(data => {
      if (data === 'toggleFavorite') {
        this.favoritesService.toggleFavorite(this.session);
      }
    });
  }

}
