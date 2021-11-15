import { Component, Injector } from '@angular/core';
import { InventurDialogLayoutGenerated } from './inventur-dialog-layout-generated.component';

@Component({
  selector: 'page-inventur-dialog-layout',
  templateUrl: './inventur-dialog-layout.component.html'
})
export class InventurDialogLayoutComponent extends InventurDialogLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
