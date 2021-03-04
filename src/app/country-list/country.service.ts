import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CountryService {
  countriesURL: string;

  constructor(private http: HttpClient) {
    this.countriesURL = 'http://localhost:8080/countries';
  }

  getData(): any {
    return this.http.get(this.countriesURL);
  }
}
