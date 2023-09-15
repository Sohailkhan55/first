import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements AfterViewInit*/ {
  myField = "";
  title = 'first';
  name = "Sohail";
  flowers = ["rose","jasmine","mariegold"];
  //Array of JSON objects
  countries = [
    {id:1,"name":"India","numberOfStates":29,flag:""},
    {"id":2,"name":"Bermuda","numberOfStates":12,flag:""},
    {"id":3,"name":"Registan","numberOfStates":25,flag:""},
    {"id":4,"name":"Naruto","numberOfStates":4,flag:""},

  ];
  showElem=true;
  displayElem(){
    this.showElem= !this.showElem;
  }

  // student = {
  //   name :"Sohail",
  //   rno:64
  // };
  // arr=[1,7,9,2];
  //JSON object
  obj = {
    "rno": 1,"name" : "King"
  }
  toggleName() {
    if(this.name == "Sohail")
    {
      this.name="Khan";
    }
    else{
      this.name="Sohail";
    }
  }
  // showArray=true;
  // toggleArray(){
  //   this.showArray = !this.showArray;
  // }

  // employees = [
  //   {
  //     name:"Sohail",
  //     empid:2,
  //     salary:20
  //   },
  //   {
  //     name:"Sohail",
  //     empid:2,
  //     salary:12
  //   },
  //   {
  //     name:"Sohail",
  //     empid:2,
  //     salary:16
  //   }

  // ]
   currentItem="Message coming from parent component";
   fromChildOutput="";
   receiveMessage($event : string){
      this.fromChildOutput=$event;
   }
//   @ViewChild(NavbarComponent) childComp;
//   message="";
//  constructor(){
//   console.log(this.childComp);
//  }
//   ngAfterViewInit(): void {
//     console.log(this.childComp);
//     this.message=this.childComp.childMessage;
//   }
};


