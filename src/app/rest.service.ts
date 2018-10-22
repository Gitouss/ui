import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class RestService {
  constructor(private httpClient: HttpClient) { }
  getAllRest() {
    return this.httpClient.get(environment.gateway + '/index');
  }
  vote(rest) {
    //console.log("vote "+ rest);
    return this.httpClient.post(environment.gateway + '/rest', rest, httpOptions);
  }
}

export class Rest {
  id:       number;
  name:     string;
  image:    string;
  quality:  Quality;
}
export class Quality {
  nourriture: number;
  salle:      number;
  service:    number;
}
