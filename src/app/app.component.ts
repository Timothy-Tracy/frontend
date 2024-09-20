
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherComponent } from "./weather/weather.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}


  title = 'comp584project.client';
}
