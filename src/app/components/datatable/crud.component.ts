import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './carservice';
import { MessageService } from './messageservice';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  displayDialog: boolean;
  isRow: number;
  isCheckbox: number;

  car: Car = {};

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  cols: any[];

  constructor(
    private carService: CarService,
    private messageService: MessageService
  ) {
    this.isRow = 0;
    this.isCheckbox = 0;
  }

  ngOnInit() {
    console.log('ngOnInit ');
    this.carService.getCarsSmall().then(cars => (this.cars = cars));

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  showDialogToAdd() {
    console.log('showDialogToAdd ');
    this.newCar = true;
    this.car = {};
    this.displayDialog = true;
  }

  save() {
    console.log('save ');
    const cars = [...this.cars];
    if (this.newCar) {
      cars.push(this.car);
    } else {
      cars[this.cars.indexOf(this.selectedCar)] = this.car;
    }

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    console.log('delete ');
    const index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i !== index);
    this.car = null;
    this.displayDialog = false;
  }

  // selectionChange(event) {
  //   console.log('selectionChange -> ', event);
  // }

  showDialog(event) {
    if (event.type === 'checkbox') {
      this.isCheckbox++;
    }

    if (event.type === 'row') {
      this.isRow++;
    }
    if (this.isCheckbox === 0 && this.isRow === 1) {
      //  console.log('show dialog');
      this.isCheckbox = 0;
      this.isRow = 0;
      return true;
    }

    if (this.isCheckbox === 1 && this.isRow === 1) {
      //  console.log('downt show dialog');
      this.isCheckbox = 0;
      this.isRow = 0;
      return false;
    }
  }
  onRowSelect(event) {
    if (this.showDialog(event)) {
      console.log('show dialog');
      this.newCar = false;
      this.car = this.cloneCar(event.data);
      this.displayDialog = true;
      this.messageService.add({
        severity: 'info',
        summary: 'Car Selected',
        detail: 'Vin: ' + event.data.vin
      });
    }

    // console.log(this.isRowTwo);
    // if (this.isRowTwo === 1) {
    //   this.isRowTwo = 0;
    //   console.log('show dialogbox');
    // }
    // if (this.isRowTwo >= 1) {
    //   console.log('set zero');
    //   this.isRowTwo = 0;
    // }
    // this.isRowTwo++;

    // console.log('this.isCheckbox ', this.isCheckbox);
    // console.log('this.isRow ', this.isRow);

    /*
    if (
      event.originalEvent &&
      event.type === 'row' &&
      event.index === undefined
    ) {
      this.isRowTwo++;
      console.log('this.isRowTwo > ', this.isRowTwo);

      if (this.isRowTwo <= 1) {
        console.log('this.isRowTwo11 > ', this.isRowTwo);
        this.isRowTwo = 0;
      }

      if (this.isRowTwo >= 2) {
        console.log('this.isRowTwo22 > ', this.isRowTwo);
        this.isRowTwo = 0;
      }
    } */
    /*
      console.log('clicked on not Checkbox');
      console.log('event.type !== ', event); */
    /*  this.newCar = false;
      this.car = this.cloneCar(event.data);
      this.displayDialog = true;
      this.messageService.add({
        severity: 'info',
        summary: 'Car Selected',
        detail: 'Vin: ' + event.data.vin
      }); */

    // if (event.originalEvent.target['nodeName'] === "P-TABLECHECKBOX") {
    //   console.log("clicked on a Checkbox")
    //   }
    //   else {
    //   console.log("clicked on a Row")
    //   }
  }

  onRowUnselect(event) {
    console.log('onRowUnselect -> ', event);
    this.messageService.add({
      severity: 'info',
      summary: 'Car Unselected',
      detail: 'Vin: ' + event.data.vin
    });
  }

  cloneCar(c: Car): Car {
    console.log('cloneCar -> ', c);
    const car = {};
    for (const prop in c) {
      if (c.hasOwnProperty(prop)) {
        // code here
        car[prop] = c[prop];
      }
    }
    return car;
  }
}
