import { Component, Injector } from '@angular/core';
import { ErfassenArtikelAuswahlGenerated } from './erfassen-artikel-auswahl-generated.component';

@Component({
  selector: 'page-erfassen-artikel-auswahl',
  templateUrl: './erfassen-artikel-auswahl.component.html'
})
export class ErfassenArtikelAuswahlComponent extends ErfassenArtikelAuswahlGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
