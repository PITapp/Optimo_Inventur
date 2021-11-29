import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { InventurStartLayoutComponent } from './inventur-start-layout/inventur-start-layout.component';
import { InventurInfosLayoutComponent } from './inventur-infos-layout/inventur-infos-layout.component';
import { InventurErfassenLayoutComponent } from './inventur-erfassen-layout/inventur-erfassen-layout.component';
import { InventurLeerLayoutComponent } from './inventur-leer-layout/inventur-leer-layout.component';
import { InventurDeviceLayoutComponent } from './inventur-device-layout/inventur-device-layout.component';
import { InventurMeldungLayoutComponent } from './inventur-meldung-layout/inventur-meldung-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfosComponent } from './infos/infos.component';
import { ZzDashboardV1Component } from './zz-dashboard-v-1/zz-dashboard-v-1.component';
import { ErfassenComponent } from './erfassen/erfassen.component';
import { ZzDashboardV2Component } from './zz-dashboard-v-2/zz-dashboard-v-2.component';
import { ZzErfassenAuswahlLagerorteV1Component } from './zz-erfassen-auswahl-lagerorte-v-1/zz-erfassen-auswahl-lagerorte-v-1.component';
import { ZzDashboardV3Component } from './zz-dashboard-v-3/zz-dashboard-v-3.component';
import { ZzDashboardV4Component } from './zz-dashboard-v-4/zz-dashboard-v-4.component';
import { ZzErfassenV1Component } from './zz-erfassen-v-1/zz-erfassen-v-1.component';
import { ErfassenArtikelAuswahlComponent } from './erfassen-artikel-auswahl/erfassen-artikel-auswahl.component';
import { ZzErfassenArtikelAuswahlV1Component } from './zz-erfassen-artikel-auswahl-v-1/zz-erfassen-artikel-auswahl-v-1.component';
import { MeldungLoeschenComponent } from './meldung-loeschen/meldung-loeschen.component';
import { ZzErfassenV2Component } from './zz-erfassen-v-2/zz-erfassen-v-2.component';
import { ZzErfassenV3Component } from './zz-erfassen-v-3/zz-erfassen-v-3.component';
import { DeviceRegistrierenComponent } from './device-registrieren/device-registrieren.component';
import { MeldungOkComponent } from './meldung-ok/meldung-ok.component';
import { MeldungJaNeinComponent } from './meldung-ja-nein/meldung-ja-nein.component';

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
        path: 'zz-dashboard-v-4',
        component: ZzDashboardV4Component
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
        path: 'zz-erfassen-auswahl-lagerorte-v-1',
        component: ZzErfassenAuswahlLagerorteV1Component
      },
      {
        path: 'zz-erfassen-v-1',
        component: ZzErfassenV1Component
      },
      {
        path: 'zz-erfassen-v-2',
        component: ZzErfassenV2Component
      },
      {
        path: 'zz-erfassen-v-3',
        component: ZzErfassenV3Component
      },
    ]
  },
  {
    path: '',
    component: InventurLeerLayoutComponent,
    children: [
      {
        path: 'erfassen-artikel-auswahl/:InventurID',
        component: ErfassenArtikelAuswahlComponent
      },
      {
        path: 'zz-erfassen-artikel-auswahl-v-1',
        component: ZzErfassenArtikelAuswahlV1Component
      },
    ]
  },
  {
    path: '',
    component: InventurMeldungLayoutComponent,
    children: [
      {
        path: 'meldung-loeschen/:strMeldung',
        component: MeldungLoeschenComponent
      },
      {
        path: 'meldung-ok/:strMeldung',
        component: MeldungOkComponent
      },
      {
        path: 'meldung-ja-nein/:strMeldung',
        component: MeldungJaNeinComponent
      },
    ]
  },
  {
    path: '',
    component: InventurDeviceLayoutComponent,
    children: [
      {
        path: 'device-registrieren',
        component: DeviceRegistrierenComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
