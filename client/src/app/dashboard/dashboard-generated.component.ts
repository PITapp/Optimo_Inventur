/*
  This file is automatically generated. Any changes will be overwritten.
  Modify dashboard.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { DataListComponent } from '@radzen/angular/dist/datalist';
import { CardComponent } from '@radzen/angular/dist/card';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { LabelComponent } from '@radzen/angular/dist/label';
import { IconComponent } from '@radzen/angular/dist/icon';
import { ButtonComponent } from '@radzen/angular/dist/button';

import { ConfigService } from '../config.service';
import { MeldungOkComponent } from '../meldung-ok/meldung-ok.component';

import { DbOptimoService } from '../db-optimo.service';

export class DashboardGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('datalistLagerorte') datalistLagerorte: DataListComponent;
  @ViewChild('card8') card8: CardComponent;
  @ViewChild('heading8') heading8: HeadingComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('label0') label0: LabelComponent;
  @ViewChild('buttonNavigateToErfassen') buttonNavigateToErfassen: ButtonComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  dbOptimo: DbOptimoService;
  globalDeviceID: any;
  dsoDevice: any;
  onClickStartErfassen: any;
  onClickStartInfos: any;
  parameters: any;
  rstLagerorte: any;
  rstLagerorteCount: any;
  strLagerortStatus: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.dbOptimo = this.injector.get(DbOptimoService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


  load() {
    this.datalistLagerorte.load();

    this.globalDeviceID = "0";

    if(localStorage.getItem("globalDeviceID") == null) {
    localStorage.setItem("globalDeviceID","0");
    this.globalDeviceID = "0";
} else {
    this.globalDeviceID = localStorage.getItem("globalDeviceID");
}

    this.dbOptimo.getInventurDeviceByDeviceId(null, this.globalDeviceID)
    .subscribe((result: any) => {
      this.dsoDevice = result;
    }, (result: any) => {

    });

    this.onClickStartErfassen = (data) => {
    this.buttonNavigateToErfassenClick(data);
};

    this.onClickStartInfos = () => {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['infos']);
};
  }

  datalistLagerorteLoadData(event: any) {
    this.dbOptimo.getInventurBases(null, null, null, `LagerortNummer, LagerortTitel`, null, `InventurBasisStatus`, null, null)
    .subscribe((result: any) => {
      this.rstLagerorte = result.value;

      this.rstLagerorteCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  buttonNavigateToErfassenClick(event: any) {
    this.datalistLagerorte.load();

    sessionStorage.setItem("globalArtikelID", "0");

    this.dbOptimo.getInventurDeviceByDeviceId(null, this.globalDeviceID)
    .subscribe((result: any) => {
      this.dbOptimo.getInventurBasisByInventurId(null, event.InventurID)
      .subscribe((result: any) => {
        this.strLagerortStatus = result.LagerortStatus;

        if (this.strLagerortStatus == 'Erfassung offen') {
          if (this.dialogRef) {
            this.dialogRef.close();
          }
          this.router.navigate(['erfassen', event.InventurID]);
        }

        if (this.strLagerortStatus == 'Erfassung abgeschlossen') {
          this.notificationService.notify({ severity: "error", summary: `Erfassung abgeschlossen`, detail: `Die Erfassung für diesen Lagerort wurde bereits abgeschlossen!`, duration: 5000 });
        }

        if (this.strLagerortStatus == 'Erfassung zur Zeit gesperrt') {
          this.notificationService.notify({ severity: "error", summary: `Erfassung gesperrt`, detail: `Die Erfassung ist zur Zeit gesperrt, weil ein Mitarbeiter für diesen Lagerort gerade Daten erfasst!`, duration: 5000 });
        }
      }, (result: any) => {
        this.notificationService.notify({ severity: "error", summary: ``, detail: `Lagerort konnte nicht geladen werden!` });
      });
    }, (result: any) => {
      this.dialogService.open(MeldungOkComponent, { parameters: {strMeldung: "Dieses Gerät wurde noch nicht registriert. Nach Bestätigung dieser Benachrichtigung wird ein Dialogfenster mit den verfügbaren Geräten geöffnet. Wählen Sie die passende Gerätenummer für Ihr Gerät aus. Nach der Auswahl ist dieses Gerät automatisch unter der gewählten Gerätenummer registriert."}, title: `Gerät registrieren` })
          .afterClosed().subscribe(result => {
                  if (result == 'OK') {
          if (this.dialogRef) {
            this.dialogRef.close();
          }
          this.router.navigate(['device-registrieren']);
        }
      });
    });
  }
}
