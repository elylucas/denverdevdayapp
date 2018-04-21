
import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import Speaker from '../../models/speaker';
import {SpeakerDetail} from './speaker-detail';
import {DataService} from '../../services/data.service';

@Component({
  templateUrl: 'speakers.html'
})
export class Speakers {

  public speakers: Speaker[];
  public event: Event;
  public pageLoaded = false;

  constructor(private nav: NavController, private dataService: DataService) {

  }

  ionViewWillEnter() {
    this.dataService.getEvent().then((event: Event) => {
      this.event = event;
      this.pageLoaded = true;
    });

    this.dataService.getSpeakers().then((speakers: Speaker[]) => {
      this.speakers = speakers;
    });
  }

  goToDetail(speaker: Speaker) {
    this.nav.push(SpeakerDetail, {speaker});
  }
}
