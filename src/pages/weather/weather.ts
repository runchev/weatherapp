import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather-provider';

/*
  Generated class for the Weather page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on 
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage implements OnInit {
  private weather:any;
  private searchString:string;
  private searchResults:any[];
  private zmw;
  private forecast10Days=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider:WeatherProvider) {}
  ngOnInit() {
    this.getDefaultCity();
    this.weatherProvider.getWeather(this.zmw).subscribe(res=>{
      this.weather=res.current_observation;
    });
    this.weatherProvider.get10DayForecast(this.zmw).subscribe(res=>
      this.forecast10Days=res.forecast.simpleforecast.forecastday);
    }
  searchWeather(){
    this.weatherProvider.searchWeather(this.searchString).subscribe(res=>{
      this.searchResults=res.RESULTS;
    });
  }
  chooseCity(city){
    this.searchResults=[];
      this.weatherProvider.getWeather(city.zmw).subscribe(res=>{
      this.weather=res.current_observation;
    });
  }
 getDefaultCity(){
   if(localStorage.getItem('city')){
     this.zmw=JSON.parse(localStorage.getItem('city')).zmw;
   }else{
     this.zmw='94125.1.99999'
   }
 }
    
}
