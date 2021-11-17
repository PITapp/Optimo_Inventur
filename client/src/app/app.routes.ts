import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { InventurStartLayoutComponent } from './inventur-start-layout/inventur-start-layout.component';
import { InventurInfosLayoutComponent } from './inventur-infos-layout/inventur-infos-layout.component';
import { InventurErfassenLayoutComponent } from './inventur-erfassen-layout/inventur-erfassen-layout.component';
import { InventurLeerLayoutComponent } from './inventur-leer-layout/inventur-leer-layout.component';
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
import { ErfassenArtikelAuswahlComponent } from './erfassen-artikel-auswahl/erfassen-artikel-auswahl.component';
import { InventurArtikelComponent } from './inventur-artikel/inventur-artikel.component';
import { AddInventurArtikelComponent } from './add-inventur-artikel/add-inventur-artikel.component';
import { EditInventurArtikelComponent } from './edit-inventur-artikel/edit-inventur-artikel.component';
import { CopyOfInfosComponent } from './copy-of-infos/copy-of-infos.component';
import { CopyOfErfassenArtikelAuswahlComponent } from './copy-of-erfassen-artikel-auswahl/copy-of-erfassen-artikel-auswahl.component';
import { MeldungLoeschenComponent } from './meldung-loeschen/meldung-loeschen.component';
import { CopyOfErfassen1Component } from './copy-of-erfassen-1/copy-of-erfassen-1.component';

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
      {
        path: 'inventur-artikel',
        component: InventurArtikelComponent
      },
      {
        path: 'add-inventur-artikel',
        component: AddInventurArtikelComponent
      },
      {
        path: 'edit-inventur-artikel/:ArtikelID',
        component: EditInventurArtikelComponent
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
      {
        path: 'copy-of-infos',
        component: CopyOfInfosComponent
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
      {
        path: 'copy-of-erfassen-1',
        component: CopyOfErfassen1Component
      },
    ]
  },
  {
    path: '',
    component: InventurLeerLayoutComponent,
    children: [
      {
        path: 'erfassen-artikel-auswahl',
        component: ErfassenArtikelAuswahlComponent
      },
      {
        path: 'copy-of-erfassen-artikel-auswahl',
        component: CopyOfErfassenArtikelAuswahlComponent
      },
      {
        path: 'meldung-loeschen/:strMeldung',
        component: MeldungLoeschenComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
