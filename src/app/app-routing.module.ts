import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: 'country/:name',
    component: CountryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
