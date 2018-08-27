import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
  //counter: number = 0;
  data = [
    {
      dashboardId: '10001',
      dashboardName: 'MyDashboard1',
      Created_On: '12/17/2015'
    },
    {
      dashboardId: '10002',
      dashboardName: 'MyDashboard1',
      Created_On: '12/17/2015'
    },
    {
      dashboardId: '10003',
      dashboardName: 'MyDashboard1',
      Created_On: '12/17/2015'
    },
    {
      dashboardId: '10004',
      dashboardName: 'MyDashboard1',
      Created_On: '12/17/2015'
    },
    {
      dashboardId: '10005',
      dashboardName: 'MyDashboard1',
      Created_On: '12/17/2015'
    },
    {
      dashboardId: '10006',
      dashboardName: 'MyDashboard1',
      Created_On: '12/17/2015'
    }
  ];
  onClick() {
    this.counter++;
  }

  onDeleteRow(index) {
    this.cars.splice(index, 1);
  }

  onEditRow(row) {
    // alert(JSON.stringify(row));
    let count = 0;
    this.rowNum = row;
    if (count % 2 === 0) {
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
    count++;
  }
}
