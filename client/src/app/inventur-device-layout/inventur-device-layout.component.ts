import { Component, Injector } from '@angular/core';
import { InventurDeviceLayoutGenerated } from './inventur-device-layout-generated.component';

@Component({
  selector: 'page-inventur-device-layout',
  templateUrl: './inventur-device-layout.component.html'
})
export class InventurDeviceLayoutComponent extends InventurDeviceLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
