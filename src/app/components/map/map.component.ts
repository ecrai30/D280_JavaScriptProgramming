import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Output() name = new EventEmitter<string>();
  @Output() capital = new EventEmitter<string>();
  @Output() region = new EventEmitter<string>();
  @Output() income = new EventEmitter<string>();
  @Output() longitude = new EventEmitter<string>();
  @Output() latitude = new EventEmitter<string>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Initialization code can be placed here if needed.
  }

  onClick(event: MouseEvent) {
    const target = event.target as SVGElement;
    const countryId = target.id;
    console.log(target)
    this.apiService.getCountryDetails(countryId).subscribe((info:any) => {
        let countryInfo = info[1][0];
        this.name.emit(countryInfo.name);
        this.capital.emit(countryInfo.capitalCity);
        this.region.emit(countryInfo.region.value);
        this.income.emit(countryInfo.incomeLevel.value);
        this.longitude.emit(countryInfo.longitude);
        this.latitude.emit(countryInfo.latitude);
        console.log(countryInfo)
      });      
    }
}



