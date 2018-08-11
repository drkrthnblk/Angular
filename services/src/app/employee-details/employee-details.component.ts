import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  template: `
              <h2>Employee DEtails</h2>
              <ul *ngFor="let employee of employees">
                <li>{{employee.id}} {{employee.name}} {{employee.age}}</li>
              </ul>
            `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees =[];
  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

}
