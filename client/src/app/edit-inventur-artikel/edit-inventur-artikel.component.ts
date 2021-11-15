import { Component, Injector } from '@angular/core';
import { EditInventurArtikelGenerated } from './edit-inventur-artikel-generated.component';

@Component({
  selector: 'page-edit-inventur-artikel',
  templateUrl: './edit-inventur-artikel.component.html'
})
export class EditInventurArtikelComponent extends EditInventurArtikelGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
