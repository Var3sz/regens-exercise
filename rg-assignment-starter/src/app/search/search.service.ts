import { Injectable } from "@angular/core";
import { timestamp } from "rxjs";
import { City } from "../data/cities";
import { WEATHER_DATA } from "../data/weather";

export interface WeatherRow {
  date: string;
  time: string;
  temp: number;
}

@Injectable({ providedIn: "root" })
export class SearchService {
  public getWeatherByCity(city: City): WeatherRow[] {
    var indexOfCity = 0;

    /* search for the city */
    for(let i=0;i<WEATHER_DATA.length;i++){
      if(WEATHER_DATA[i].city === city.name)
        indexOfCity = i;
    }

    let cityWeather = WEATHER_DATA[indexOfCity];
    let weatherData : WeatherRow[] = [];

    for(let i=0;i<cityWeather.hourly.time.length;i++){
        let row : WeatherRow ={
          date: "Dátum",
          time: "23-00",
          temp: 23
        }
        weatherData.push(row);
    }  

    // TODO assemble results based on input city
    return weatherData;
  }
}
