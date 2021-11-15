import { Component, Injector } from '@angular/core';
import { TestLayoutGenerated } from './test-layout-generated.component';

@Component({
  selector: 'page-test-layout',
  templateUrl: './test-layout.component.html'
})
export class TestLayoutComponent extends TestLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
