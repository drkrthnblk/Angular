import { Component, OnInit } from '@angular/core';

@Component({
  //1.->selector: 'app-test',
  //2.->selector: '.app-test',
  selector: '[app-test]',
  //templateUrl: './test.component.html',
  template: `<div>Inline component</div>`,
  //styleUrls: ['./test.component.css']
  styles:[`
    div{
      color:blue
    }
  `] 
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
