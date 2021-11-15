import { Component, Injector } from '@angular/core';
import { AddInventurArtikelGenerated } from './add-inventur-artikel-generated.component';

@Component({
  selector: 'page-add-inventur-artikel',
  templateUrl: './add-inventur-artikel.component.html'
})
export class AddInventurArtikelComponent extends AddInventurArtikelGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
