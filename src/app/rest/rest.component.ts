import { Component, OnInit } from '@angular/core';
import { RestService, Rest } from '../rest.service';

@Component({
  selector: 'app-rest',
  providers: [RestService],
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
      this.Rests = data;
    });
  }
  vote(rest:Rest) {
    this.restService.vote(rest).subscribe(
            data => {
                console.log("POST ", data);
            },
            error => {
                console.log("Error", error);
            };
    //console.log(rest);
  }
  onClickAdd(id, quality) {
    switch(quality) { 
      case "voteser": { 
        this.Rests[id].quality.service += 1;
        break; 
      } 
      case "votesal": {
        this.Rests[id].quality.salle += 1;
        break; 
        }
      case "votenou": {
        this.Rests[id].quality.nourriture += 1;
        break;
      }
      default: { 
        console.log(id + " " + quality);
        break; 
      } 
    } 
  }
  onClickMinus(id, quality) {
    switch(quality) { 
      case "voteser": { 
        this.Rests[id].quality.service -= 1;
        break; 
      } 
      case "votesal": {
        this.Rests[id].quality.salle -= 1;
        break; 
        }
      case "votenou": {
        this.Rests[id].quality.nourriture -= 1;
        break;
      }
      default: { 
        console.log(id + " " + quality);
        break; 
      } 
    } 
  }
}
