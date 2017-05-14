import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from 'angular2-google-maps/core';




import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NewPlacePage} from "../pages/new-place/new-place";
import {PlacesService} from "../services/places.services";
import { PlacePage } from "../pages/place/place";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8f1Dp49Qx32YwYTv1RPF3jE6seDBKrqA'
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, PlacesService, IonicStorageModule,Storage, Geolocation
  ]
})
export class AppModule {}
