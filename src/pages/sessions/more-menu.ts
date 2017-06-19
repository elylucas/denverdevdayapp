import { Component } from '@angular/core';
import {  } from 'ionic-angular';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  template: `
    <button ion-button clear (click)="toggleFavorite()">{{isFavorite ? 'Remove from favorites' : 'Add to favorites'}}</button>
  `
})
export class MoreMenu {
  public isFavorite: boolean;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.isFavorite = params.get('isFavorite');
  }

  toggleFavorite() {
    this.viewCtrl.dismiss('toggleFavorite');
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
