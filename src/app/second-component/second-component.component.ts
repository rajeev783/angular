import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    imageUrl:string = "../../assets/favicon.ico";
    secondHeading:string = "this is second heading";

    changeValue(){
        this.secondHeading = "change on click of button";
    }
}
