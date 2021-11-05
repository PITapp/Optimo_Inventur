import { Component, Injector } from '@angular/core';
import { InventurStartLayoutGenerated } from './inventur-start-layout-generated.component';

@Component({
  selector: 'page-inventur-start-layout',
  templateUrl: './inventur-start-layout.component.html'
})
export class InventurStartLayoutComponent extends InventurStartLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
