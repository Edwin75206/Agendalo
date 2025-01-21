import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url='https://api.openweathermap.org/data/2.5/weather?&appid='
  key='a083d87e6e455afceb92bbe267312cbc'

  constructor(private http: HttpClient) { }
  getClima(ciudad:String): Observable<any>{
    const URL=this.url + this.key + '&q=' + ciudad
    return this.http.get(URL)
  }

}
