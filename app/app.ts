import {Component, provide} from "@angular/core";
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import DataService from './services/data.service';
import FavoritesService from './services/favorites.service';
import 'rxjs/Rx';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
 providers: [FavoritesService, DataService]
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [provide(Window, { useValue: window})]);