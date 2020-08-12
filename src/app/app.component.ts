import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { CalculatorService } from "../services/calculator.service"
import { from, Observable } from 'rxjs';
import{HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CalculatorService]
})

export class AppComponent {
  title: string;
  city: string;
  name: string;
  fontWeight: string;
  fontStyle: string;
  fontSize: string;
  employee:Employee[];

  constructor(private calcObj:CalculatorService,public httpClient:HttpClient) {
    this.title = 'Shubham Shinde'
    this.city = 'Mumbai'
    this.name = '';
    this.fontWeight = "normal";
    this.fontStyle = "normal";
    this.fontSize = "20px";
    console.log(this.calcObj.add(5,5));
    this.employee = [];
    this.getAllEmp().subscribe((employeeList:Employee[])=>{
      this.employee = employeeList
      console.log(employeeList);

    })
  }
  updateSize(e): void {
    var element = e.target;
    var size = element.value + 'px';
    this.fontSize = size;
  }

  getAllEmp():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("http://localhost:57622/api/Emp_Test")
  }
   
}
