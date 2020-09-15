import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage'; // https://ionicframework.com/docs/angular/storage

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
/*

IonicStogareModule

https://ionicframework.com/docs/angular/storage

Usage
First, if you'd like to use SQLite, install the cordova-sqlite-storage plugin:

ionic cordova plugin add cordova-sqlite-storage
Next, install the package:

npm install --save @ionic/storage
Next, add it to the imports list in your NgModule declaration (for example, in src/app/app.module.ts)

*/

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
