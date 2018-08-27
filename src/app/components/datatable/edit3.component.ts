import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = [];

  editRow(row) {
    // with this you set all the rows as no editable, so you can change from row to row with the edit button
    this.data.filter(row => row.isEditable).map(r => {
      r.isEditable = false;
      return r;
    });
    row.isEditable = true;
  }

  save(row) {
    row.isEditable = false;
  }

  getData() {
    this.data = [
      { name: 'test', city: 'city' },
      { name: 'test', city: 'city' },
      { name: 'test', city: 'city' },
      { name: 'test', city: 'city' }
    ];
    // here you call your service to get your array, and you add a field to set the edit on the row
    this.data.map(row => {
      row.isEditable = false;
    });
  }
}
