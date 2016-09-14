import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import DataService from '../../services/data.service';
import Sponsor from '../../models/sponsor';

@Component({
    templateUrl: 'build/pages/sponsors/sponsors.html'
})
export class Sponsors {

    sponsors: Sponsor[];

    constructor(private nav: NavController, private dataService: DataService) {

    }

    ionViewWillEnter() {
        this.dataService.getSponsors().then((sponsors: Sponsor[]) => {
            this.sponsors = sponsors;
        });
    }
}
