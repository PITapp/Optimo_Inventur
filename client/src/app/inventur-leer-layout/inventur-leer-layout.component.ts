import { Component, Injector } from '@angular/core';
import { InventurLeerLayoutGenerated } from './inventur-leer-layout-generated.component';

@Component({
  selector: 'page-inventur-leer-layout',
  templateUrl: './inventur-leer-layout.component.html'
})
export class InventurLeerLayoutComponent extends InventurLeerLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
