import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { DetailsLayoutComponent } from './details-layout/details-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainTempLayoutComponent } from './main-temp-layout/main-temp-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { InventurStartLayoutComponent } from './inventur-start-layout/inventur-start-layout.component';
import { InventurStartTempLayoutComponent } from './inventur-start-temp-layout/inventur-start-temp-layout.component';
import { InventurInfosLayoutComponent } from './inventur-infos-layout/inventur-infos-layout.component';
import { InventurErfassenLayoutComponent } from './inventur-erfassen-layout/inventur-erfassen-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseComponent } from './base/base.component';
import { BaseDetailsComponent } from './base-details/base-details.component';
import { InfosComponent } from './infos/infos.component';
import { CopyOfDashboardComponent } from './copy-of-dashboard/copy-of-dashboard.component';
import { CopyOfDashboard1Component } from './copy-of-dashboard-1/copy-of-dashboard-1.component';
import { ErfassenComponent } from './erfassen/erfassen.component';
import { CopyOfDashboard2Component } from './copy-of-dashboard-2/copy-of-dashboard-2.component';
import { CopyOfDashboard3Component } from './copy-of-dashboard-3/copy-of-dashboard-3.component';
import { CopyOfDashboard4Component } from './copy-of-dashboard-4/copy-of-dashboard-4.component';
import { CopyOfDashboard5Component } from './copy-of-dashboard-5/copy-of-dashboard-5.component';
import { ErfassenAuswahlLagerorteComponent } from './erfassen-auswahl-lagerorte/erfassen-auswahl-lagerorte.component';

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
        path: 'copy-of-dashboard-2',
        component: CopyOfDashboard2Component
      },
      {
        path: 'copy-of-dashboard-3',
        component: CopyOfDashboard3Component
      },
      {
        path: 'copy-of-dashboard-4',
        component: CopyOfDashboard4Component
      },
      {
        path: 'copy-of-dashboard-5',
        component: CopyOfDashboard5Component
      },
    ]
  },
  {
    path: '',
    component: DetailsLayoutComponent,
    children: [
      {
        path: 'base',
        component: BaseComponent
      },
      {
        path: 'base-details/:baseID',
        component: BaseDetailsComponent
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
    component: MainTempLayoutComponent,
    children: [
      {
        path: 'copy-of-dashboard',
        component: CopyOfDashboardComponent
      },
      {
        path: 'copy-of-dashboard-1',
        component: CopyOfDashboard1Component
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
        path: 'erfassen-auswahl-lagerorte',
        component: ErfassenAuswahlLagerorteComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
