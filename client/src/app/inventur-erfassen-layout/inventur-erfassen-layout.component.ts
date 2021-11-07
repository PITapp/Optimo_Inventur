import { Component, Injector } from '@angular/core';
import { InventurErfassenLayoutGenerated } from './inventur-erfassen-layout-generated.component';

@Component({
  selector: 'page-inventur-erfassen-layout',
  templateUrl: './inventur-erfassen-layout.component.html'
})
export class InventurErfassenLayoutComponent extends InventurErfassenLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
