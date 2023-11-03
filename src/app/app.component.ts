import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'World Map';
  name!: string;
  capital!: string;
  region!: string;
  income!: string;
  longitude!: string;
  latitude!: string;

  OnNameChange(value:string){
    this.name = value;
  }
  OnCapitalChange(value:string){
    this.capital = value;
  }
  OnRegionChange(value:string){
    this.region = value;
  }
  OnIncomeChange(value:string){
    this.income = value;
  }
  OnLongitudeChange(value:string){
    this.longitude = value;
  }
  OnLatitudeChange(value:string){
    this.latitude = value;
  }

 

}

