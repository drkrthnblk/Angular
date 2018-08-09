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
              
              <!--Style Binding-->
              <h2 [style.color]="hasError ? 'purple' : 'orange'">Style Binding</h2>
              <h2 [style.color]="highlightColor">Style Binding</h2>
              <h2 [ngStyle]="titleStyles">Style Binding</h2>

              <!--Event Binding-->
              <button (click)="onClick($event)">Greet</button>
              
              <br>
              <button (click)="greeting ='Welcome User'">Greetings</button>
              <br>
              {{greeting}}

              <!--Template Refrence Variables-->
              <input #myInput type="text">
              <button (click)="showVal(myInput.value)">Show</button>
              <br>

              <!--Two way Binding-->
              <p>Two way binding</p>
              <input [(ngModel)]="twoWayBinding" type="text">
              {{twoWayBinding}}
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

  //Style Binding
  public highlightColor = "purple";
  public titleStyles = {
    color : "blue",
    fontStyle: "italic"
  }

  //Event Binding
  public greeting = "";

  //Two way binding
  public twoWayBinding="";

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log(event);
    this.greeting="Hello User !!";
  }

  showVal(value){
    console.log(value);
  }

}
