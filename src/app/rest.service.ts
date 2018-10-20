import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class RestService {
  constructor(private httpClient: HttpClient) { }
  getAllRest() {
    return this.httpClient.get(environment.gateway + '/index');
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
