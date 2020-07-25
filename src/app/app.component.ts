import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  city:string;
  time:string;
  name:string;

  constructor(){
      this.title = 'Shubham Shinde'
      this.city = 'Mumbai'
      this.time = new Date().toLocaleTimeString();
      this.name = '';
  }

  updateTime():void{
      this.time= new Date().toLocaleTimeString();
  }
}
