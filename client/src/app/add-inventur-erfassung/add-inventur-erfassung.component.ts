import { Component, Injector } from '@angular/core';
import { AddInventurErfassungGenerated } from './add-inventur-erfassung-generated.component';

@Component({
  selector: 'page-add-inventur-erfassung',
  templateUrl: './add-inventur-erfassung.component.html'
})
export class AddInventurErfassungComponent extends AddInventurErfassungGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
