/*
  This file is automatically generated. Any changes will be overwritten.
  Modify app.module.ts instead.
*/
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderModule } from '@radzen/angular/dist/header';
import { ImageModule } from '@radzen/angular/dist/image';
import { LabelModule } from '@radzen/angular/dist/label';
import { BodyModule } from '@radzen/angular/dist/body';
import { ContentContainerModule } from '@radzen/angular/dist/content-container';
import { IconModule } from '@radzen/angular/dist/icon';
import { ContentModule } from '@radzen/angular/dist/content';
import { DataListModule } from '@radzen/angular/dist/datalist';
import { CardModule } from '@radzen/angular/dist/card';
import { HeadingModule } from '@radzen/angular/dist/heading';
import { ButtonModule } from '@radzen/angular/dist/button';
import { TabsModule } from '@radzen/angular/dist/tabs';
import { HtmlModule } from '@radzen/angular/dist/html';
import { ProgressBarModule } from '@radzen/angular/dist/progressbar';
import { SparklineModule } from '@radzen/angular/dist/sparkline';
import { LinkModule } from '@radzen/angular/dist/link';
import { SelectBarModule } from '@radzen/angular/dist/selectbar';
import { TextBoxModule } from '@radzen/angular/dist/textbox';
import { TemplateFormModule } from '@radzen/angular/dist/template-form';
import { SharedModule } from '@radzen/angular/dist/shared';
import { NotificationModule } from '@radzen/angular/dist/notification';
import { DialogModule } from '@radzen/angular/dist/dialog';

import { ConfigService, configServiceFactory } from './config.service';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CacheInterceptor } from './cache.interceptor';
export { AppComponent } from './app.component';
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
import { CopyOfErfassenComponent } from './copy-of-erfassen/copy-of-erfassen.component';
import { CopyOfErfassen1Component } from './copy-of-erfassen-1/copy-of-erfassen-1.component';
import { ErfassenNurAnzeigenComponent } from './erfassen-nur-anzeigen/erfassen-nur-anzeigen.component';
import { CopyOfErfassen2Component } from './copy-of-erfassen-2/copy-of-erfassen-2.component';
import { CopyOfErfassen3Component } from './copy-of-erfassen-3/copy-of-erfassen-3.component';
import { InventurStartLayoutComponent } from './inventur-start-layout/inventur-start-layout.component';
import { InventurInfosLayoutComponent } from './inventur-infos-layout/inventur-infos-layout.component';
import { InventurErfassenLayoutComponent } from './inventur-erfassen-layout/inventur-erfassen-layout.component';
import { InventurLeerLayoutComponent } from './inventur-leer-layout/inventur-leer-layout.component';
import { InventurDeviceLayoutComponent } from './inventur-device-layout/inventur-device-layout.component';
import { InventurMeldungLayoutComponent } from './inventur-meldung-layout/inventur-meldung-layout.component';

import { DbOptimoService } from './db-optimo.service';

export const PageDeclarations = [
  DashboardComponent,
  InfosComponent,
  ZzDashboardV1Component,
  ErfassenComponent,
  ZzDashboardV2Component,
  ZzErfassenAuswahlLagerorteV1Component,
  ZzDashboardV3Component,
  ZzDashboardV4Component,
  ZzErfassenV1Component,
  ErfassenArtikelAuswahlComponent,
  ZzErfassenArtikelAuswahlV1Component,
  MeldungLoeschenComponent,
  ZzErfassenV2Component,
  ZzErfassenV3Component,
  DeviceRegistrierenComponent,
  MeldungOkComponent,
  MeldungJaNeinComponent,
  CopyOfErfassenComponent,
  CopyOfErfassen1Component,
  ErfassenNurAnzeigenComponent,
  CopyOfErfassen2Component,
  CopyOfErfassen3Component,
];

export const LayoutDeclarations = [
  InventurStartLayoutComponent,
  InventurInfosLayoutComponent,
  InventurErfassenLayoutComponent,
  InventurLeerLayoutComponent,
  InventurDeviceLayoutComponent,
  InventurMeldungLayoutComponent,
];

export const AppDeclarations = [
  ...PageDeclarations,
  ...LayoutDeclarations,
  AppComponent
];

export const AppProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true
  },
  DbOptimoService,
  ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory: configServiceFactory,
    deps: [ConfigService],
    multi: true
  }
];

export const AppImports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  HeaderModule,
  ImageModule,
  LabelModule,
  BodyModule,
  ContentContainerModule,
  IconModule,
  ContentModule,
  DataListModule,
  CardModule,
  HeadingModule,
  ButtonModule,
  TabsModule,
  HtmlModule,
  ProgressBarModule,
  SparklineModule,
  LinkModule,
  SelectBarModule,
  TextBoxModule,
  TemplateFormModule,
  SharedModule,
  NotificationModule,
  DialogModule,
  AppRoutes
];
