import { Component, OnInit } from '@angular/core';
import { RestService, Rest } from '../rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  Rests: Rest[];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.restService.getAllRest().subscribe((data: Rest[]) => {
      this.Rests = data.filter((a) => !a.id);
    });
  }

}
