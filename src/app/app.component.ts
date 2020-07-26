import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  city: string;
  name: string;
  fontWeight: string;
  fontStyle: string;
  fontSize: string;

  constructor() {
    this.title = 'Shubham Shinde'
    this.city = 'Mumbai'
    this.name = '';
    this.fontWeight = "normal";
    this.fontStyle = "normal";
    this.fontSize = "20px";
  }
  updateSize(e):void{
    var element = e.target;
    var size = element.value+'px';
    this.fontSize = size;
  }
}
