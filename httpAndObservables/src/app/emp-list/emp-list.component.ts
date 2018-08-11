import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-list',
  template: `
              <h2>Employee LIST</h2>
              <h3>{{errorMsg}}</h3>
              <ul *ngFor="let employee of employees">
                <li>{{employee.id}} {{employee.name}} {{employee.age}}</li>
              </ul>
            `,
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

    public employees = [];
    public errorMsg;

  constructor(private employeeService : EmpServiceService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
        .subscribe(data=>this.employees = data,
            error=>this.errorMsg=error);
  }

}
