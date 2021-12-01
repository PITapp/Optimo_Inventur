import { Component, Injector } from '@angular/core';
import { ErfassenNurAnzeigenGenerated } from './erfassen-nur-anzeigen-generated.component';

@Component({
  selector: 'page-erfassen-nur-anzeigen',
  templateUrl: './erfassen-nur-anzeigen.component.html'
})
export class ErfassenNurAnzeigenComponent extends ErfassenNurAnzeigenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
