import { Component, OnInit } from "@angular/core";
import { __values } from "tslib";
import { CITIES, City } from "../data/cities";
import { SearchService, WeatherRow } from "./search.service";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {

  cities: City[] = CITIES;
  results: WeatherRow[] = [];

  selectedCity: string =""; /* Kiválasztott város */
  show: boolean = false;    /* Ha lenyomásra kerül a gomb, akkor megjelennek az adatok, ha egyszer megvan nyomva, automatikusan frissül */


  constructor(private service: SearchService) {
  }

  public ngOnInit(): void {
  }

  public updateResults(city: City): void {
    this.results = this.service.getWeatherByCity(city);
  }

  changeCity(value: string){        /* Select komponens változását kezeli */
    this.show = false;
    this.selectedCity = value;
  }

  showWeather(){                    /* gombnyomást kezeli */
    if(this.selectedCity!=""){
      this.show = true;
    }
  }


}
