import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gotcharacter',
  templateUrl: './gotcharacter.component.html',
  styleUrls: ['./gotcharacter.component.css']
})
export class GOTCharacterComponent implements OnInit {

  GOTCharacter:string[];
  GOTCharacterFirstName:string[]=['Ram', 'Lakshmman', 'Bharat', 'Shatrughna'];
  GOTCharacterMotherName:string[]=['Kaushilya', 'Sumitra', 'Kaikeyee', 'Sumitra'];
  i=0;
  constructor() {
    setInterval(
      ()=>{
        if(this.i%2 == 0){
          this.GOTCharacter = this.GOTCharacterFirstName;
          console.log("inside if");
        }else{
          this.GOTCharacter = this.GOTCharacterMotherName;
          console.log("inside else");
        }
        this.i++;
      }, 3000);
  }

  ngOnInit() {
  }

}
