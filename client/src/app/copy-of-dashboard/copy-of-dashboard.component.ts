import { Component, Injector } from '@angular/core';
import { CopyOfDashboardGenerated } from './copy-of-dashboard-generated.component';

@Component({
  selector: 'page-copy-of-dashboard',
  templateUrl: './copy-of-dashboard.component.html'
})
export class CopyOfDashboardComponent extends CopyOfDashboardGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
