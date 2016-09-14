
import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import Speaker from '../../models/speaker';
import SpeakerDetail from './speaker-detail';
import DataService from '../../services/data.service';

@Component({
  templateUrl: 'build/pages/speakers/speakers.html'
})
export class Speakers {
  
  speakers: Speaker[];
  
  constructor(private nav: NavController, private dataService: DataService) {    
    
  }
  
  ionViewWillEnter() {
    this.dataService.getSpeakers().then((speakers: Speaker[]) => {
      this.speakers = speakers;
    });
  }
  
  goToDetail(speaker: Speaker) {
    this.nav.push(SpeakerDetail, {speaker});
  }
}
