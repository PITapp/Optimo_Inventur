import { Component, Injector } from '@angular/core';
import { CopyOfErfassenGenerated } from './copy-of-erfassen-generated.component';

@Component({
  selector: 'page-copy-of-erfassen',
  templateUrl: './copy-of-erfassen.component.html'
})
export class CopyOfErfassenComponent extends CopyOfErfassenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
