import { Component } from '@angular/core';
import { PlacesService } from "../../services/places.services";
import { NavController } from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  location : {lng: number,
              lat: number}= {lat:0, lng: 0};

constructor(private placesService : PlacesService, private navCtrl : NavController, private geolocation: Geolocation){}


 onAddPlace( value : {title: string}){
this.placesService.addPlace({title: value.title, location: this.location});
this.navCtrl.pop();
}

onLocateUser(){
  this.geolocation.getCurrentPosition()
  .then(
    (location) => {
      console.log('Location Fetched Successfully');
      this.location.lat= location.coords.latitude;
      this.location.lng= location.coords.longitude;
    }
  )
  .catch(
    (error) => console.log('An Error Occured at Geolocation')
  );


}

}
