import { Component, Injector } from '@angular/core';
import { TestGenerated } from './test-generated.component';

@Component({
  selector: 'page-test',
  templateUrl: './test.component.html'
})
export class TestComponent extends TestGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
