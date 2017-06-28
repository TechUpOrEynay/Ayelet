import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import {NavMenuComponent} from './components/navmenu/navmenu.component';
import {HomeComponent} from './components/home/home.component';
import {HelloWorldComponent} from './components/helloworld/helloworld.component';
import {FetchDataComponent} from './components/fetchdata/fetchdata.component';
import {CounterComponent} from './components/counter/counter.component';
import {WeatherComponent} from './components/weather/weather.component';
import {ContactsService } from './services/contacts.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HelloWorldComponent,
    FetchDataComponent,
    CounterComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
