import { Component, Injector } from '@angular/core';
import { InventurInfosLayoutGenerated } from './inventur-infos-layout-generated.component';

@Component({
  selector: 'page-inventur-infos-layout',
  templateUrl: './inventur-infos-layout.component.html'
})
export class InventurInfosLayoutComponent extends InventurInfosLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
