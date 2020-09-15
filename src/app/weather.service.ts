import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import {Observable} from 'rxjs';
import { Weather } from './weather/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = "a3d33817fbd7f36acacac2d06c4ad932";
  endPoint = "api.openweathermap.org";
  city = "porto";
  units = "units=metric";
  // exemplo 
  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
  constructor(private http: HttpClient) { }


  getWeather(city, state):Observable<Weather>{
    let url = `http://${this.endPoint}/data/2.5/weather?q=${city}&${this.units}&appid=${this.apiKey}`;
    return this.http.get<Weather>(url, { responseType: "json" })
    .pipe(
      tap( // Log the result or error
        data  => console.log("data", data),
        error => console.log(error)
      )
    );;
  }
}