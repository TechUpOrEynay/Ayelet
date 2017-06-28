import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent {
    public weather: Weather;
    public chosenCity: string;

    constructor(private http: Http) {
    }

    public getWeather(chosenCity: string) {
        this.http.get('http://localhost:4222/api/weather/city/' + chosenCity).subscribe(result => {
            this.weather = result.json();
        });
    }
}

interface Weather {
    temp: string;
    summary: string;
    city: string;
}