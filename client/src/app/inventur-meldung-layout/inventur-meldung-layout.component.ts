import { Component, Injector } from '@angular/core';
import { InventurMeldungLayoutGenerated } from './inventur-meldung-layout-generated.component';

@Component({
  selector: 'page-inventur-meldung-layout',
  templateUrl: './inventur-meldung-layout.component.html'
})
export class InventurMeldungLayoutComponent extends InventurMeldungLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
