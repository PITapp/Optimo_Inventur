import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { DetailsLayoutComponent } from './details-layout/details-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainTempLayoutComponent } from './main-temp-layout/main-temp-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseComponent } from './base/base.component';
import { BaseDetailsComponent } from './base-details/base-details.component';
import { DienstplanComponent } from './dienstplan/dienstplan.component';
import { KundenComponent } from './kunden/kunden.component';
import { KontakteComponent } from './kontakte/kontakte.component';
import { NachrichtenComponent } from './nachrichten/nachrichten.component';
import { FahrtenbuchComponent } from './fahrtenbuch/fahrtenbuch.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { VersionenComponent } from './versionen/versionen.component';
import { CopyOfDashboardComponent } from './copy-of-dashboard/copy-of-dashboard.component';
import { CopyOfDashboard1Component } from './copy-of-dashboard-1/copy-of-dashboard-1.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
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
      {
        path: 'test',
        component: TestComponent
      },
    ]
  },
  {
    path: '',
    component: MainTempLayoutComponent,
    children: [
      {
        path: 'dienstplan',
        component: DienstplanComponent
      },
      {
        path: 'kunden',
        component: KundenComponent
      },
      {
        path: 'kontakte',
        component: KontakteComponent
      },
      {
        path: 'nachrichten',
        component: NachrichtenComponent
      },
      {
        path: 'fahrtenbuch',
        component: FahrtenbuchComponent
      },
      {
        path: 'einstellungen',
        component: EinstellungenComponent
      },
      {
        path: 'impressum',
        component: ImpressumComponent
      },
      {
        path: 'datenschutz',
        component: DatenschutzComponent
      },
      {
        path: 'versionen',
        component: VersionenComponent
      },
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
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
