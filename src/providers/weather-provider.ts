import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WeatherProvider {
  private apiKey="a513e5c30c858896";
  private url='http://localhost:8100/api/'+this.apiKey+'/conditions/q';
  private searchUrl='http://localhost:8100/search/aq?query=';
  private forecast10DayUrl = 'http://localhost:8100/api/'+this.apiKey+'/forecast10day/q';

  constructor(public http: Http) {}
  getWeather(zmw){
    return this.http.get(this.url+'/zmw:'+zmw+'.json').map(res=>
    res.json());
  }
  searchWeather(searchString:string){
    return this.http.get(this.searchUrl+''+searchString).map(res=>
    res.json());
  }
  get10DayForecast(zmw){
    return this.http.get(this.forecast10DayUrl+'/zmw:'+zmw+'.json').map(res=>
    res.json());
  }

}
