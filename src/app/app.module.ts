//nativo angular
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//enviroment
import {AppEnv} from './app.env';

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FilmsPage } from '../pages/films/films';
import { StarshipsPage } from '../pages/starships/starships';
import { VehiclesPage } from '../pages/vehicles/vehicles';

//components
import { StarshipsComponent } from '../components/starships/starships';
import { FilmsComponent } from '../components/films/films';
import { VehiclesComponent } from '../components/vehicles/vehicles';
import { ItemComponent } from '../components/item/item';

//providers
import { Api } from '../providers/api/api';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilmsPage,
    StarshipsPage,
    VehiclesPage,
    StarshipsComponent,
    FilmsComponent,
    VehiclesComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilmsPage,
    StarshipsPage,
    VehiclesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppEnv,
    Api
  ]
})
export class AppModule {}
