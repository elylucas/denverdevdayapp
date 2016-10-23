
import {Platform} from 'ionic-angular';
import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

@Component({
    selector: 'about',
    templateUrl: 'about.html'
})
export class About {

    public map: any = {};

    constructor(private nav: NavController, private platform: Platform) {
        setTimeout(this.loadMap, 1);
        //this.loadMap();
    }

    openMap() {
        let lat = '39.630645';
        let long = '-104.902750';
        let text = 'Microsoft';
        if(this.platform.is('ios')) {
            window.open(`http://maps.apple.com/?q=${text}&ll=${lat},${long}&near=${lat},${long}`, '_system', 'location=yes') 
        } else {
            window.open(`http://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`, '_system', 'location=yes');
            //window.open(`geo:${lat},${long}?q=${text}`, '_system', 'location=yes')
        }
        console.log('open map')
    }

    loadMap() {
        // console.log('map')
        // let latLng = new google.maps.LatLng(39.6307643, -104.9038176);
        // let mapOptions = {
        //     center: latLng,
        //     zoom: 15,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // }

        // this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // let marker = new google.maps.Marker({
        //     map: this.map,
        //     animation: google.maps.Animation.DROP,
        //     position: this.map.getCenter()
        // });

        // let content = "<h4>7595 Technology Dr., Suite 400<br> Denver, CO 80237</h4>";

        // this.addInfoWindow(marker, content);
    }

}
