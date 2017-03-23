import { WeatherPage } from '../weather/weather';
import { SettingsPage } from '../settings/settings';

import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  weatherRoot: any = WeatherPage;
  settingsRoot: any = SettingsPage;

  constructor() {

  }
}
