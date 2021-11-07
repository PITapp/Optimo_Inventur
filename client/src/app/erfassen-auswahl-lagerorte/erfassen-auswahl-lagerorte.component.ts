import { Component, Injector } from '@angular/core';
import { ErfassenAuswahlLagerorteGenerated } from './erfassen-auswahl-lagerorte-generated.component';

@Component({
  selector: 'page-erfassen-auswahl-lagerorte',
  templateUrl: './erfassen-auswahl-lagerorte.component.html'
})
export class ErfassenAuswahlLagerorteComponent extends ErfassenAuswahlLagerorteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
