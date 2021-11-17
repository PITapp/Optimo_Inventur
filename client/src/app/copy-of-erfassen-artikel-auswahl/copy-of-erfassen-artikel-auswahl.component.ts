import { Component, Injector } from '@angular/core';
import { CopyOfErfassenArtikelAuswahlGenerated } from './copy-of-erfassen-artikel-auswahl-generated.component';

@Component({
  selector: 'page-copy-of-erfassen-artikel-auswahl',
  templateUrl: './copy-of-erfassen-artikel-auswahl.component.html'
})
export class CopyOfErfassenArtikelAuswahlComponent extends CopyOfErfassenArtikelAuswahlGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
