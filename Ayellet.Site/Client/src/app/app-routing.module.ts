import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HelloWorldComponent} from './components/helloworld/helloworld.component';
import {FetchDataComponent} from './components/fetchdata/fetchdata.component';
import {CounterComponent} from './components/counter/counter.component';
import {WeatherComponent} from './components/weather/weather.component';
import {ContactsService } from './services/contacts.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'hello', component: HelloWorldComponent },
            { path: 'weather', component: WeatherComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: '/' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
