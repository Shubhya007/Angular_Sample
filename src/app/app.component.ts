import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { CalculatorService } from "../services/calculator.service"
import { from } from 'rxjs';

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
  employee: Array<Employee>

  constructor(private calcObj:CalculatorService) {
    this.title = 'Shubham Shinde'
    this.city = 'Mumbai'
    this.name = '';
    this.fontWeight = "normal";
    this.fontStyle = "normal";
    this.fontSize = "20px";
    this.employee = [
      { id: 1, name: 'Shubham Shinde' },
      { id: 2, name: 'Ragnar Loathbroke' },
      { id: 3, name: 'Thor' },
      { id: 1, name: 'Shubham Shinde' },
      { id: 2, name: 'Ragnar Loathbroke' }
      
    ];
    console.log(this.calcObj.add(5,5));
  }
  updateSize(e): void {
    var element = e.target;
    var size = element.value + 'px';
    this.fontSize = size;
  }
}
