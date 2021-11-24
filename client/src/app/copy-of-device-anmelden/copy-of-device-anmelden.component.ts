import { Component, Injector } from '@angular/core';
import { CopyOfDeviceAnmeldenGenerated } from './copy-of-device-anmelden-generated.component';

@Component({
  selector: 'page-copy-of-device-anmelden',
  templateUrl: './copy-of-device-anmelden.component.html'
})
export class CopyOfDeviceAnmeldenComponent extends CopyOfDeviceAnmeldenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
