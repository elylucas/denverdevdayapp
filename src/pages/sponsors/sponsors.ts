import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'sponsors',
  templateUrl: 'sponsors.html'
})
export class Sponsors {
  public sponsors: Sponsor[];

  constructor(private dataService: DataService) {}

  ionViewWillEnter() {
    this.dataService.getSponsors().then((sponsors: Sponsor[]) => {
      this.sponsors = sponsors;
    });
  }
}
