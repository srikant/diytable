import { Directive, TemplateRef } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[ngx-datatable-header-template]' })
export class DataTableColumnHeaderDirective {
  constructor(public template: TemplateRef<any>) { }
}
