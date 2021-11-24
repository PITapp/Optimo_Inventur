import { Component, Injector } from '@angular/core';
import { DeviceAnmeldenGenerated } from './device-anmelden-generated.component';

@Component({
  selector: 'page-device-anmelden',
  templateUrl: './device-anmelden.component.html'
})
export class DeviceAnmeldenComponent extends DeviceAnmeldenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
