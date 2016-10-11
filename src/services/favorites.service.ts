import { Injectable } from '@angular/core';
import Session from '../models/session';

const FAVORITES_KEY = 'favorites';

@Injectable()
export default class FavoritesService {
    
    private favorites: number[] = [];
    
    constructor() {        
        let favorites: number[] = JSON.parse(window.localStorage.getItem(FAVORITES_KEY));
        if(!favorites) {
            favorites = new Array<number>();
            this.saveToLocalStorage(favorites);            
        }
        this.favorites = favorites;
    }

    private saveToLocalStorage(favorites){
        window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }

    isFavorite(session: Session) {
        return this.favorites.indexOf(session.id) > -1;
    }

    toggleFavorite(session: Session) {
        let index = this.favorites.indexOf(session.id);
        if(index > -1) {
            this.favorites.splice(index, 1);           
        } else {
            this.favorites.push(session.id);
        }
        this.saveToLocalStorage(this.favorites);
    }
}