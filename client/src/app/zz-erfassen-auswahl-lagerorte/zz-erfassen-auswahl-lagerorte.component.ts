import { Component, Injector } from '@angular/core';
import { ZzErfassenAuswahlLagerorteGenerated } from './zz-erfassen-auswahl-lagerorte-generated.component';

@Component({
  selector: 'page-zz-erfassen-auswahl-lagerorte',
  templateUrl: './zz-erfassen-auswahl-lagerorte.component.html'
})
export class ZzErfassenAuswahlLagerorteComponent extends ZzErfassenAuswahlLagerorteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
