import { Component, Injector } from '@angular/core';
import { EditInventurErfassungGenerated } from './edit-inventur-erfassung-generated.component';

@Component({
  selector: 'page-edit-inventur-erfassung',
  templateUrl: './edit-inventur-erfassung.component.html'
})
export class EditInventurErfassungComponent extends EditInventurErfassungGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
