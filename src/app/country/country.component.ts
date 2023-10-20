import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  constructor(private countriesService: CountriesService, private route: ActivatedRoute) {}

  countries: any;
  countryName = ''

  ngOnInit(): void {
    this.countryName = this.route.snapshot.paramMap.get('name') as string;
    this.listCountry();
  }

  listCountry() {
    this.countriesService.listCountryByName(this.countryName).subscribe({
      next: (countries) => {
        this.countries = countries;
      }, 
      error: (error) => {
        console.log(error);
        
      }
    })
  }

  formatPopulation(population: number): string {
    return population.toLocaleString();
  }

}

