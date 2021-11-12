import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { InventurStartLayoutComponent } from './inventur-start-layout/inventur-start-layout.component';
import { InventurInfosLayoutComponent } from './inventur-infos-layout/inventur-infos-layout.component';
import { InventurErfassenLayoutComponent } from './inventur-erfassen-layout/inventur-erfassen-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfosComponent } from './infos/infos.component';
import { ZzDashboardV1Component } from './zz-dashboard-v-1/zz-dashboard-v-1.component';
import { ErfassenComponent } from './erfassen/erfassen.component';
import { ZzDashboardV2Component } from './zz-dashboard-v-2/zz-dashboard-v-2.component';
import { ZzErfassenAuswahlLagerorteComponent } from './zz-erfassen-auswahl-lagerorte/zz-erfassen-auswahl-lagerorte.component';
import { ZzDashboardV3Component } from './zz-dashboard-v-3/zz-dashboard-v-3.component';
import { CopyOfDashboardComponent } from './copy-of-dashboard/copy-of-dashboard.component';
import { CopyOfErfassenComponent } from './copy-of-erfassen/copy-of-erfassen.component';
import { InventurErfassungComponent } from './inventur-erfassung/inventur-erfassung.component';
import { AddInventurErfassungComponent } from './add-inventur-erfassung/add-inventur-erfassung.component';
import { EditInventurErfassungComponent } from './edit-inventur-erfassung/edit-inventur-erfassung.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: InventurStartLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'zz-dashboard-v-1',
        component: ZzDashboardV1Component
      },
      {
        path: 'zz-dashboard-v-2',
        component: ZzDashboardV2Component
      },
      {
        path: 'zz-dashboard-v-3',
        component: ZzDashboardV3Component
      },
      {
        path: 'copy-of-dashboard',
        component: CopyOfDashboardComponent
      },
      {
        path: 'inventur-erfassung',
        component: InventurErfassungComponent
      },
      {
        path: 'add-inventur-erfassung',
        component: AddInventurErfassungComponent
      },
      {
        path: 'edit-inventur-erfassung/:ErfassungID',
        component: EditInventurErfassungComponent
      },
    ]
  },
  {
    path: '',
    component: InventurInfosLayoutComponent,
    children: [
      {
        path: 'infos',
        component: InfosComponent
      },
    ]
  },
  {
    path: '',
    component: InventurErfassenLayoutComponent,
    children: [
      {
        path: 'erfassen/:InventurID',
        component: ErfassenComponent
      },
      {
        path: 'zz-erfassen-auswahl-lagerorte',
        component: ZzErfassenAuswahlLagerorteComponent
      },
      {
        path: 'copy-of-erfassen',
        component: CopyOfErfassenComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
