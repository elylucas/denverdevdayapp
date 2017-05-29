import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { About } from '../pages/about/about';
import { Favorites } from '../pages/favorites/favorites';
import { Sessions } from '../pages/sessions/sessions';
import { SessionDetail } from '../pages/sessions/session-detail';
import { Speakers } from '../pages/speakers/speakers';
import { SpeakerDetail } from '../pages/speakers/speaker-detail';
import { Sponsors } from '../pages/sponsors/sponsors';
import { TabsPage } from '../pages/tabs/tabs';
import { DataService } from '../services/data.service';
import { FavoritesService } from '../services/favorites.service';
import { CustomDatePipe } from '../pipes/customedate.pipe';

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
    TabsPage,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataService,
    FavoritesService
  ]
})
export class AppModule { }
