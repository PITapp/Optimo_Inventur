import { Component, Injector } from '@angular/core';
import { DeviceRegistrierenGenerated } from './device-registrieren-generated.component';

@Component({
  selector: 'page-device-registrieren',
  templateUrl: './device-registrieren.component.html'
})
export class DeviceRegistrierenComponent extends DeviceRegistrierenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
