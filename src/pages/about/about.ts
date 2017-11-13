import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'about',
  templateUrl: 'about.html'
})
export class About {
  public map: any = {};
  public event: Event;
  public venue: Venue;
  public dateString: string = '';

  constructor(private dataService: DataService, private platform: Platform) {}

  ionViewWillEnter() {
    this.dataService.getEvent().then(event => {
      this.event = event;
      if(event.startTime && event.endTime) {
        this.dateString = moment(event.startTime).format('MMMM Do, YYYY h:mma') + ' - ' + moment(event.endTime).format('h:mma');
      }
    });
    this.dataService.getVenue().then(venue => this.venue = venue);

  }

  openMap() {
    let lat = this.venue.lat;
    let long = this.venue.lon;
    let text = this.venue.name;
    if (this.platform.is('ios')) {
      window.open(
        `http://maps.apple.com/?q=${text}&ll=${lat},${long}&near=${lat},${long}`,
        '_system',
        'location=yes'
      );
    } else {
      window.open(
        `http://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`,
        '_system',
        'location=yes'
      );
    }
    console.log('open map');
  }
}
