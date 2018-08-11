import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IEmployee} from './employee';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
//import {throw} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

    private url: string = "/assets/data/employees.json";
    //ERROR -> private url: string = "/assets/data/employees1.json";
  constructor(private http: HttpClient) { }

  getEmployees(){
    // return [
    //   {"id":1, "name":"Andrew", "age":24},
    //   {"id":2, "name":"MAthew", "age":27},
    //   {"id":3, "name":"Brndon", "age":26},
    //   {"id":4, "name":"Anaken", "age":25}
    // ];
    return this.http.get<IEmployee[]>(this.url)
        .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "service Error");
  }
}
