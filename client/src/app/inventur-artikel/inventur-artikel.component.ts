import { Component, Injector } from '@angular/core';
import { InventurArtikelGenerated } from './inventur-artikel-generated.component';

@Component({
  selector: 'page-inventur-artikel',
  templateUrl: './inventur-artikel.component.html'
})
export class InventurArtikelComponent extends InventurArtikelGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
