import { Component, Injector } from '@angular/core';
import { InventurStartTempLayoutGenerated } from './inventur-start-temp-layout-generated.component';

@Component({
  selector: 'page-inventur-start-temp-layout',
  templateUrl: './inventur-start-temp-layout.component.html'
})
export class InventurStartTempLayoutComponent extends InventurStartTempLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
