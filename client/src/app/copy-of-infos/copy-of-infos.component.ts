import { Component, Injector } from '@angular/core';
import { CopyOfInfosGenerated } from './copy-of-infos-generated.component';

@Component({
  selector: 'page-copy-of-infos',
  templateUrl: './copy-of-infos.component.html'
})
export class CopyOfInfosComponent extends CopyOfInfosGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
