import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tableData: any[];

  constructor() {}

  ngOnInit() {
    this.tableData = [
      { id: 1, category: 'cat1' },
      { id: 2, category: 'cat2' },
      { id: 3, category: 'cat3' }
    ];

    this.disableAllRowsEdition();
  }

  onEditInit(event) {
    this.disableAllRowsEdition();
    event.data.isEditable = true;
  }

  disableAllRowsEdition() {
    this.tableData.forEach(function(row) {
      row.isEditable = false;
    });
  }
}
