import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
  data: any[];

  constructor() {
    this.data = [
      {
        PayScaleArea: 'PSA 1',
        PayScaleTypeCode: 'A1',
        MeritPercentage: 50,
        CreatedBy: 'me',
        CreatedDate: '2018-02-20'
      },
      {
        PayScaleArea: 'PSA 2',
        PayScaleTypeCode: 'C3',
        MeritPercentage: 20,
        CreatedBy: 'me',
        CreatedDate: '2018-02-21'
      },
      {
        PayScaleArea: 'PSA 3',
        PayScaleTypeCode: 'B2',
        MeritPercentage: 33,
        CreatedBy: 'me',
        CreatedDate: '2018-02-22'
      }
    ];
  }
}
