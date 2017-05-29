import {Component} from "@angular/core";
import {Sessions} from '../sessions/sessions';
import {Speakers} from '../speakers/speakers';
import {Favorites} from '../favorites/favorites';
import {About} from '../about/about';
import {Sponsors} from '../sponsors/sponsors';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  sessionsTab: any = Sessions;
  speakersTab: any = Speakers;
  favoritesTab: any = Favorites;
  sponsorsTab: any = Sponsors;
  aboutTab: any = About;
}
