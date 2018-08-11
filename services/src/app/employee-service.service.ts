import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1,"name":"andrew","age":30},
      {"id":2,"name":"Brandon","age":25},
      {"id":3,"name":"chris","age":26},
      {"id":4,"name":"elen","age":26}
     ]
  }
}
