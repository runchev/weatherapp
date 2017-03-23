import { WeatherPage } from '../weather/weather';
import { WeatherProvider } from '../../providers/weather-provider';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit{
  private searchString:string;
  private defaultCity;
  private searchResults=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider:WeatherProvider){
  }

  ngOnInit() {
    this.getDefaultCity();
  }
  saveChanges(){
    this.navCtrl.setRoot(WeatherPage);
  }
  getQuery(){
    this.weatherProvider.searchWeather(this.searchString).subscribe(
      res=>this.searchResults=res.RESULTS);
  }
  getDefaultCity(){
    if(localStorage.getItem('city')){
      this.defaultCity = JSON.parse(localStorage.getItem('city')).name;  
    } else {
      this.defaultCity='';
    }
  }
  chooseCity(city){
    this.searchResults=[];
    if(typeof(Storage)!=="undefined"){
      // localStorage.city = JSON.stringify(city);
      localStorage.setItem('city',JSON.stringify(city));
      this.searchString=city.name;
      this.getDefaultCity();
    }else{
      console.log("Storage type not supported!")
    }
  }
}
