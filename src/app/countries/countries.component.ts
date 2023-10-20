import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(private countriesService: CountriesService) {}

  countryFlag: any = {};
  loading = false;
  countries: any = {};

  ngOnInit(): void {
    this.listaPaises();
  }
  
  listaPaises() {
    this.loading = true;
    this.countriesService.listCountries('').subscribe({
      next:(data) => {
        this.countries = data;
        this.loading = false;
      },
      error(erro) {
        console.log(erro);
      },      
    });
  }

  selectContinent(event: any) {
    const selectedContinent = event?.target?.value;

    if (selectedContinent) {
      this.countriesService.listCountriesByContinent(selectedContinent).subscribe({
        next: (data) => {
          this.countries = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  searchCountryByName(search: any) {
    const searchContinent = search?.target?.value;

    if (searchContinent) {
      this.countriesService.listCountryByName(searchContinent).subscribe({
        next: (data) => {
          this.countries = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  getCountryInfo(country: any) {
    console.log(country);
  }

  formatPopulation(population: number): string {
    return population.toLocaleString();
  }
  
}



// Exemplo:
// clickRegion(event: any) {
//   const selectedOption = event?.target?.value;

//   if (selectedOption === 'Europe') {
//     this.countries.ListCountriesRegion(selectedOption).subscribe({
//       next: (data) => {
//         this.countryFlag = data;
//       },
//       error: (error) => {
//         console.log(error);
//       },
//     });
//   }
// }



