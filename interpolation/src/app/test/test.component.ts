import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template: `<h2>Welcome  {{name}}!!!</h2>
              <h2>{{"Welcome " + name}}</h2>
              <h2>{{greetUser()}}</h2> 
              <h2>{{siteUrl}}</h2>
              <!-- property binding-->
              <input [id]="myId" type="text" value="Rajat">
              <input [disabled]="isDisabled" type="text" value="Rajat">
              `,
  //styleUrls: ['./test.component.css']
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Rajat";
  private siteUrl = window.location.href;
  //property binding
  public myId="newId";
  public isDisabled=true;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
