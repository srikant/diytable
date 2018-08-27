//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
   <p-dataTable (onRowSelect)="rowSelected($event)"

   [value]="tableData" [responsive]="true">
     <p-column>
     <ng-template pTemplate="header">
           <input type="checkbox" [ngModel]="checkedAll" (ngModelChange)="checkAll($event)"/>
    </ng-template>
       <ng-template let-col let-car="rowData" pTemplate="body">
           <input type="checkbox" *ngIf="!car.disabled" [(ngModel)]="car.status" (change)="checked(car)"/>
           <input type="checkbox" *ngIf="car.disabled" [checked]="false" disabled (change)="checked(car)"/>
       </ng-template>
     </p-column>
    <p-column field="orderNumber" [header]="'Order Number'"></p-column>
    <p-column field="country" [header]="'Country'"></p-column>
</p-dataTable>
    </div>
  `,
})
export class App {
  name:string;
  checkedAll=false;
  selectedData[] = [];
  tableData:any[]=[{"id":1,"status":false,"macAddress":"00-E4-BA-04-06-45","serialNumber":"a99444ba-5409-4f38-942f-e1c454d722ae","model":"Green","claimedOn":"11/17/2016","orderNumber":"com.sbwire.Greenlam","disabled":false,"country":"China"},{"id":2,"macAddress":"9A-58-63-57-EE-EF","serialNumber":"f35816af-7281-4ea2-b514-4d27e97df3f7","model":"Mauv","claimedOn":"10/5/2016","orderNumber":"cn.com.sina.Trippledex","disabled":false,"country":"China","status":false},{"id":3,"macAddress":"9A-DD-49-E4-E2-90","serialNumber":"b383ed38-0ebf-4ec4-a1f0-7600317613bb","model":"Goldenrod","claimedOn":"5/16/2016","disabled":true,"status":false,"disabled":false,"orderNumber":"com.scribd.Tin","country":"Philippines"},{"id":4,"disabled":true,"macAddress":"9A-DD-49-E4-E2-90","serialNumber":"b383ed38-0ebf-4ec4-a1f0-7600317613bb","model":"Goldenrod","claimedOn":"5/16/2016","status":false,"orderNumber":"com.scribd.Tin","country":"Philippines"}]
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }
  checked(carValue){
    if(carValue.status){
      this.selectedData.push(carValue);
    }else {
     _.remove(this.selectedData, function(val) {return val === carValue;})
    }
    console.log(this.selectedData)

  }
  checkAll(event){

    _.forEach(this.tableData =>(item){
      if(event){
      item.status=true;
      }else {
        item.status=false;
      }

    });

    this.selectedData= this.tableData;
    if(!event){
      this.selectedData = [];
    }
    console.log(this.selectedData);
  }
}

@NgModule({
  imports: [ FormsModule,BrowserModule,DataTableModule,SharedModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}
