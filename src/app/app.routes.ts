import { Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { WeatherComponent } from './weather/weather.component';
import { CountryPopulationComponent } from './country/country-population.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
    {
        path: "login", component: LoginComponent
    },
    {
        path: "countries", component: CountryComponent
    },
    {
        path: "cities", component: CityComponent
    },
    {
        path: "countries", component: CountryComponent
    },
    {
        path: "countrypopulation/:id", component: CountryPopulationComponent
    },
    {
        path: "", component:WeatherComponent
    },
    
];
