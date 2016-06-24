
import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/about/about.html'
})
export class About {

    map: any = {};

    constructor(private nav: NavController) {
        setTimeout(this.loadMap, 1);
        //this.loadMap();
    }

    loadMap() {
        console.log('map')
        let latLng = new google.maps.LatLng(39.6307643, -104.9038176);
        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });

        let content = "<h4>7595 Technology Dr., Suite 400<br> Denver, CO 80237</h4>";

        this.addInfoWindow(marker, content);
    }

}
