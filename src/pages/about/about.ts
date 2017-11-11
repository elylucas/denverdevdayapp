
import { Platform } from 'ionic-angular';
import { Component } from "@angular/core";

@Component({
  selector: 'about',
  templateUrl: 'about.html'
})
export class About {

  public map: any = {};

  constructor(private platform: Platform) {

  }

  openMap() {
    let lat = '39.630645';
    let long = '-104.902750';
    let text = 'Microsoft';
    if (this.platform.is('ios')) {
      window.open(`http://maps.apple.com/?q=${text}&ll=${lat},${long}&near=${lat},${long}`, '_system', 'location=yes')
    } else {
      window.open(`http://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`, '_system', 'location=yes');
    }
    console.log('open map')
  }


}
