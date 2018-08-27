import { Component, OnInit } from '@angular/core';
import { Car } from '../../car';
import { CarService } from '../../carservice';
@Component({
  selector: 'app-crud-details',
  templateUrl: './crud-details.component.html',
  styleUrls: ['./crud-details.component.scss']
})
export class CrudAdsDetailsComponent implements OnInit {
  car: Car = {};
  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => (this.cars = cars));
    this.carService.getCarsSmall().then(cars => {
      this.cars = cars;
      this.cars.map(row => {
        row.isEditable = false;
      });
    });

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  initForm() {
    console.log('init form');
    this.newCar = true;
    this.car = {};
    this.pushARecord();
  }

  pushARecord() {
    const cars = [...this.cars];
    if (this.newCar) {
      cars.push(this.car);
      cars[cars.length - 1].isEditable = true;
    }

    this.cars = cars;
    this.car = null;
  }
}
