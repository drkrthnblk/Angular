import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
             
              <h2 *ngIf="toDisplay; else elseBlock">Hello World</h2>
             
              <ng-template #elseBlock>
                <h2>Text is hidden</h2>
              </ng-template>


            <!--OR-->

            <div *ngIf="toDisplay; then thenBlock; else ElseBlock"></div>

            <ng-template #thenBlock>IfBlock</ng-template>
            <ng-template #ElseBlock>ElseBlock</ng-template>

            <!--ngSwitch-->
            <p><u>ngSwitch</u></p>
            <div [ngSwitch]="colorVal">
              <div *ngSwitchCase="'red'">Red color</div>
              <div *ngSwitchCase="'blue'">Blue color</div>
              <div *ngSwitchCase="'green'">Green color</div>
              <div *ngSwitchDefault>Default color</div>
            </div>


            <!--ngFor-->
            <p><u>ngFor</u></p>
            <div *ngFor="let color of colors; index as i; odd as o">
              <h2>{{i}} {{o}} {{color}}</h2>
            </div>

            `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public toDisplay=false;
  public colorVal="red";
  public colors=["red","green","blue","yellow"];
  constructor() { }

  ngOnInit() {
  }

}
