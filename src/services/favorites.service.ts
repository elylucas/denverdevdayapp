import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular'
import Session from '../models/session';

const FAVORITES_KEY = 'favorites';

@Injectable()
export class FavoritesService {

  private favorites: number[] = [];

  constructor(private toastCtrl: ToastController) {
    let favorites: number[] = JSON.parse(window.localStorage.getItem(FAVORITES_KEY));
    if (!favorites) {
      favorites = new Array<number>();
      this.saveToLocalStorage(favorites);
    }
    this.favorites = favorites;
  }

  private saveToLocalStorage(favorites) {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }

  isFavorite(session: Session) {
    return this.favorites.indexOf(session.id) > -1;
  }

  toggleFavorite(session: Session) {
    let index = this.favorites.indexOf(session.id);
    if (index > -1) {
      this.favorites.splice(index, 1);
      let toast = this.toastCtrl.create({
        message: 'Removed from favorites',
        cssClass: 'favorites-toast',
        position: 'bottom',
        duration: 1500
      });
      toast.present();
    } else {
      this.favorites.push(session.id);
      let toast = this.toastCtrl.create({
        message: 'Added to favorites',
        cssClass: 'favorites-toast',
        position: 'bottom',
        duration: 1500
      });
      toast.present();
    }
    this.saveToLocalStorage(this.favorites);
  }
}
