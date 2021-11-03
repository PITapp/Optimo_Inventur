import { Component, Injector } from '@angular/core';
import { MainTempLayoutGenerated } from './main-temp-layout-generated.component';

@Component({
  selector: 'page-main-temp-layout',
  templateUrl: './main-temp-layout.component.html'
})
export class MainTempLayoutComponent extends MainTempLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
