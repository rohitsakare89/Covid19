import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import { CountryReports } from 'src/countryReport';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor( private http:HttpClient) { }

  getCountries():Observable<any> {
    const url ="https://api.covid19api.com/countries"
    return this.http.get<any>(url)
  }

  public getCoronaActiveData(selectedValue):Observable<any>{
    const url1 = "https://corona.lmao.ninja/v2/countries/"+selectedValue
    console.log(url1)
    return this.http.get<any>(url1)
  }
 Covid19Reports():Observable<any>{
  const url1="http://corona.lmao.ninja/countries"
    return  this.http.get<any>(url1)
}


}
