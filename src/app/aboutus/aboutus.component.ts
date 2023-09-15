import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent  {
  questions=[
    {
      question:"What is REST API?",
      p1:"Representational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating web services. REST API is a way of accessing web services in a simple and flexible way without having any processing.",
      p2:"REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST uses less bandwidth, simple and flexible making it more suitable for internet usage. It’s used to fetch or give some information from a web service. All communication done via REST API uses only HTTP request. ",
      rights:["hello","world"]
    },
    {
      question:"What are http and https protocols? Explain in detail the following http methods a) GET b) POST c)  PUT d) DELETE",

    },
  ];
  constructor(){

  }
  // ngOnInit: void {

  // }
}
