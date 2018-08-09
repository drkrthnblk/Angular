import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template: `<h2>Welcome  {{name}}!!!</h2>
              <h2>{{"Welcome " + name}}</h2>
              <h2>{{greetUser()}}</h2> 
              <h2>{{siteUrl}}</h2>
              
              <!-- Property Binding-->
              <input [id]="myId" type="text" value="Rajat">
              <input [disabled]="isDisabled" type="text" value="Rajat">
              <input bind-disabled="isDisabled" type="text" value="Rajat">
              
              <!--Class Binding-->
              <h2 [class]="successClass">HEllo World</h2>
              <h2 [ngClass]="messageClasses">Multiple Class Binding</h2>
              

              `,
  //styleUrls: ['./test.component.css']
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Rajat";
  private siteUrl = window.location.href;
  
  //property binding
  public myId="newId";
  public isDisabled=true;
  
  //Class Binding
  public successClass="text-success";
  public hasError = false;
  public isSpecial  = true;
  public messageClasses = {  //Object
    "text-success":!this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
