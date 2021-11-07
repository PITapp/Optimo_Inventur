import { Component, Injector } from '@angular/core';
import { ErfassenGenerated } from './erfassen-generated.component';

@Component({
  selector: 'page-erfassen',
  templateUrl: './erfassen.component.html'
})
export class ErfassenComponent extends ErfassenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
