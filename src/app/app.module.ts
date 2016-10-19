import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { About } from '../pages/about/about';
import { Favorites } from '../pages/favorites/favorites';
import { Sessions } from '../pages/sessions/sessions';
import {SessionDetail} from '../pages/sessions/session-detail';
import { Speakers } from '../pages/speakers/speakers';
import {SpeakerDetail} from '../pages/speakers/speaker-detail';
import { Sponsors } from '../pages/sponsors/sponsors';
import { TabsPage } from '../pages/tabs/tabs';
import {DataService} from '../services/data.service';
import {FavoritesService} from '../services/favorites.service';
import 'rxjs/Rx';

@NgModule({
  declarations: [
    MyApp,
    About,
    Favorites,
    Sessions,
    SessionDetail,
    Speakers,
    SpeakerDetail,
    Sponsors,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    About,
    Favorites,
    Sessions,
    SessionDetail,    
    Speakers,
    SpeakerDetail,
    Sponsors,
    TabsPage
  ],
  providers: [DataService, FavoritesService]
})
export class AppModule {}
