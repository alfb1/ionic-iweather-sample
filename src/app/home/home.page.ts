import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Storage }        from '@ionic/storage'; // https://ionicframework.com/docs/angular/storage
import { Weather }   from '../weather/weather.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  weather : Weather;
  weatherIcconUrl : String;
  //http://openweathermap.org/img/wn/10d@2x.png

  location:{
    city:string,
    state:string
  }
  constructor(
    private weatherService : WeatherService,
    private storage : Storage
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

    this.storage.get('location').then( (val)=>{
      if ( val != null){
        this.location = JSON.parse(val);
      }else{
        this.location = {
          city : "porto",
          state: "FL"
        }
      }

      
    this.weatherService.getWeather(this.location.city, this.location.state).
    subscribe(
      weather =>{ 
            let icon =  (weather != null) ? weather.weather[0].icon : null;
            this.weather = weather; 
            this.weatherIcconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png` 
          }, error => console.log(error)
    )});
}
    




}
