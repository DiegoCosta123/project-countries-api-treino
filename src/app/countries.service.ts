import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  listCountries(country: string) {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  listCountriesByContinent(continent: string) {
    return this.http.get(`https://restcountries.com/v3.1/region/${continent}`);
  }

  listCountryByName(search: string) {
    return this.http.get(`https://restcountries.com/v3.1/name/${search}`);
  }

}



// Exemplo:
// ListCountriesRegion(countryRegiom: string) {
//   return this.http.get('https://restcountries.com/v3.1/region/europe');
// }

