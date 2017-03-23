import { WeatherPage } from '../pages/weather/weather';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { WeatherProvider } from '../providers/weather-provider';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    WeatherPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    WeatherPage,
    SettingsPage,
    ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
              {provide: WeatherProvider, useClass:WeatherProvider}
  ]
})
export class AppModule {}
