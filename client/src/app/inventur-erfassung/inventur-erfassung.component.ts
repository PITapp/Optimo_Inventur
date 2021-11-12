import { Component, Injector } from '@angular/core';
import { InventurErfassungGenerated } from './inventur-erfassung-generated.component';

@Component({
  selector: 'page-inventur-erfassung',
  templateUrl: './inventur-erfassung.component.html'
})
export class InventurErfassungComponent extends InventurErfassungGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
