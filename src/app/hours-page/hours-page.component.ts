import { Component, OnInit } from '@angular/core';
import {Http , Headers} from '@angular/http';
@Component({
  selector: 'app-hours-page',
  templateUrl: './hours-page.component.html',
  styleUrls: ['./hours-page.component.css']
})
export class HoursPageComponent implements OnInit {

  constructor(private htttp: Http) { }

  ngOnInit() {
    this.htttp.post('https://seld-teach-elad101.c9users.io/addfriend', {name : 'elad'}).subscribe(response => {
       // const data  = response.json();
      console.log(response.text());
    });
  }

}
