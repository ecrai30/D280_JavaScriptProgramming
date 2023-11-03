import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
//ng g (generate) s (service) <name of service or file> in the CLI
@Injectable({
  providedIn: 'root'
})
export class ApiService {
//httpClient dependency
  constructor(private http: HttpClient) { }

  getCountryDetails(countryId: string): Observable<any> {
    const url = `http://api.worldbank.org/v2/country/${countryId}?format=json`;
    return this.http.get<any>(url);
  }
}