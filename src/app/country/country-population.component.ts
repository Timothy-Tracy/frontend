import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { CountryPopulation } from './CountryPopulation';

@Component({
  selector: 'app-country-population',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss'
})
export class CountryPopulationComponent implements OnInit{
  public cpop!: CountryPopulation;
  id:number = -1;
  public population:number = -1;
  constructor(private http: HttpClient, private activatedRoute : ActivatedRoute) {}
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
   
    this.id = idParam? +idParam: -1;
    this.getCountryPopulation()
  }
  
  getCountryPopulation() {
  
    this.http.get<CountryPopulation>(`${environment.baseUrl}/api/countries/countrypopulation/${this.id}`).subscribe({
      next: result => this.cpop = result,
      error: e => console.error(e)
    }
    );
  }

  title = 'comp584project.client.countrypopulation';
}
